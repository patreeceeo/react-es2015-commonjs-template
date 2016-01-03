var dimension = 16;

var paint = new (function() {
  "use strict";
  // Private
  var self = this,
  color = "",
  color_on = false,
  select_color = false,
  edited = false,
  tool_type = "brush",
  tools = ["brush", "bucket", "eraser"],
  grid = false;

  // Dom utils
  function $(id) { return document.getElementById(id); }
  $.bg = function(elt, val) {
    if (typeof(val) == "undefined") {
      return elt.style.backgroundColor;
    }
    elt.style.backgroundColor = val;
    return elt;
  };
  $.hasClass = function(elt, cls) {
    return (" " + elt.className + " ").indexOf(" " + cls + " ") > -1;
  };
  $.addClass = function(elt, cls) {
    if (!$.hasClass(elt, cls)) {
      elt.className = (elt.className ? " " : "") + cls;
    }
    return elt;
  };
  $.removeClass = function(elt, cls) {
    if ($.hasClass(elt, cls)) {
      var splcls = elt.className.split(" "), i = 0, len = splcls.length, res = [];
      for (; i<len; i++) {
        if (splcls[i] && splcls[i] != cls) res.push(cls);
      }
      elt.className = res.join(" ");
    }
    return elt;
  };

  // Tool functions
  var toolFns = {
    brush: function(pixel) {
      $.bg(pixel, color);
    },
    eraser: function(pixel) {
      //$.bg(pixel, "transparent");
      $.bg(pixel, ""); //TODO - test this change cross-browser
    },
    bucket: function(pixel) {
      color_on = false;
      var color_match = $.bg(pixel);
      if (color_match == color)
        return false;

      var pixel_ids = [pixel.id], tested_squares = {}, cur, coords, x, y, t;

      while (pixel_ids.length) {
        var pixel_id = pixel_ids.pop();
        cur = $(pixel_id);
        if (cur && $.bg(cur) == color_match) {
          $.bg(cur, color);
          tested_squares.pixel_id = 1;

          coords = pixelFns.idCoords(pixel_id);
          x = parseInt(coords[0]), y = parseInt(coords[1]);
          t = pixelFns.getId(x - 1, y);
          if (!tested_squares[t]) pixel_ids.push(t);
          t = pixelFns.getId(x, y + 1);
          if (!tested_squares[t]) pixel_ids.push(t);
          t = pixelFns.getId(x + 1, y);
          if (!tested_squares[t]) pixel_ids.push(t);
          t = pixelFns.getId(x, y - 1);
          if (!tested_squares[t]) pixel_ids.push(t);
        }
      }
    }
  };

  // Pixels
  var pixelFns = {
    getId: function(x, y) { return x+"_"+y; },
    idCoords: function(id) { return id.split("_"); },
    create: function(x, y) {
      return "<div class=\"pixel\" id=\""+pixelFns.getId(x,y)+"\" " +
        "onmouseover=\"return paint.pixelMouseOver(this)\" " + 
        "onmousedown=\"return paint.pixelMouseDown(this, arguments[0])\"></div>";
    }
  };

  // Events
  this.pixelMouseDown = function(elt, evt) {
    if (evt && evt.preventDefault) evt.preventDefault();
    if (select_color) {
      color = $.bg(elt);
      $.bg($("cur_color_inside"), color);
      $.removeClass($("eyedropper"), "active");
      select_color = false;
      return false;
    }
    color_on = true;
    if (!edited) edited = true;
    return self.pixelMouseOver(elt);
  };
  this.pixelMouseOver = function(elt) {
    if (color_on) {
      toolFns[tool_type](elt);
      if (!edited) edited = true;
    }
    return false;
  };

  window.onbeforeunload = function() {
    if (edited) 
      return "You will lose edits if you leave this page, are you sure you want to continue?";
  };

  window.onload = function() {

    // Prevent query strings...
    var qs = window.location.href.split("?");
    if (qs.length >= 2) {
      if (qs.slice(1).join("?") == "size=32" && false) {
        dimension = 32;
        $.removeClass(document.body, "dim16");
      } else {
        window.location.href = qs[0];
      }
    }

    $.addClass($(dimension == 32 ? "nav32" : "nav16"), "current");

    // Create pixels
    var s = [], main = $("main"), j = 0, i = 0;
    main.innerHTML = "";
    for (; j < dimension; j++) { for (i=0; i < dimension; i++) { s.push(pixelFns.create(i, j)); }}
    main.innerHTML = s.join("");
    main.onmousedown = function(evt) { 
      if (evt && evt.preventDefault) { 
        evt.preventDefault(); 
      }
    };
    document.body.onmouseup = function() { 
      color_on = false; 
    };

    // Pallets
    function palletClick() {
      if (tool_type == "eraser") setToolType("brush");
      color = $.bg(this);
      $.bg($("cur_color_inside"), color);
      return false;
    }
    var pallets = $("color_pallet").getElementsByTagName("div");
    for (j=0; j<pallets.length; j++) {
      if (pallets[j].className == "pallet_option") {
        pallets[j].onclick = palletClick;
      }
    }
    palletClick.call($("pallet7")); // set color to #000

    // Tools
    function toolClick() { 
      setToolType(this.id); 
    }
    function setToolType(tt) {
      tool_type = tt;
      for (var i=0; i<tools.length; i++) { $(tools[i]).style.fontWeight = "normal"; }
      $(tt).style.fontWeight = "bold";
    }
    for (j=0; j<tools.length; j++) {
      $(tools[j]).onclick = toolClick;
    }
    $(tool_type).style.fontWeight = "bold";
  };

  // Actions
  this.actions = {
    toggleGrid: function() {
      grid = !grid;
      (grid ? $.addClass : $.removeClass)($("main"), "grid");
      return false;
    },
    customColor: function() {
      var clr = "x";
      while (clr && !/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(clr)) {
        clr = window.prompt("Enter a custom color in hex format, \ne.g., ff9900 or f90:", "");
      }
      if (clr) {
        color = "#"+clr;
        $.bg($("cur_color_inside"), color);
      }
      return false;
    },
    selectColor: function() {
      select_color = true;
      $.addClass($("eyedropper"), "active");
      return false;
    },
    setBg: function(url) {
      $("main").style.backgroundImage = url ? "url("+url+")" : "none";
      return false;
    },
    generateImg: function() {
    }
  };
})();
