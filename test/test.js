'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var paletto = new Engine();
    paletto.init();
    assertTrue(paletto.juxta());
};