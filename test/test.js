'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var paletto = new Engine();
    paletto.init();
    assertTrue(paletto.juxta());
};

PalettoTestCase.prototype.testStory2 = function () {
    var paletto = new Engine();
    paletto.init();
    assertTrue(paletto.playerOne_choseColor(5,0));
};

PalettoTestCase.prototype.testStory3 = function () {
    var paletto = new Engine();
    paletto.init();
    paletto.playerOne_takeBall(5,0);
    assertTrue(paletto.countGrid() == 35);
    assertTrue(paletto.playerOne_score() == 1);
};