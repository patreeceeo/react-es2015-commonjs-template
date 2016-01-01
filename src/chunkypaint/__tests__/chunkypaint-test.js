/* global jest */
/* global describe */
/* global beforeEach */
/* global it */
/* global expect */

jest.dontMock("../chunkypaint");
// var ReactTestUtils = require("react-addons-test-utils");

describe("chunkypaint", function () {
  "use strict";

  var ChunkyPaint;

  beforeEach(function () {
    ChunkyPaint = require("../chunkypaint");
  });

  it("is defined", function () {
    expect(ChunkyPaint).toBeDefined();
  });
});
