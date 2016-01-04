/* global jest */
/* global describe */
/* global beforeEach */
/* global it */
/* global expect */

jest.dontMock("../like-button");
/*
 * You'll probably want to use this to simplify your
 * test code.
 *
 * var TestUtils = require("react-addons-test-utils");
 *
 * See https://facebook.github.io/react/docs/test-utils.html
 * Also http://reactcheatsheet.com/
 */

describe("LikeButton", function () {
  "use strict";

  var LikeButton;

  beforeEach(function () {
    LikeButton = require("../like-button");
  });

  it("is defined", function () {
    expect(LikeButton).toBeDefined();
  });
});
