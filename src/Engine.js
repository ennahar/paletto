'use strict';
var Engine = function () {

// private attributes and methods
    var grid = Array(6);
// public methods
    this.init = function() {
        for(var i = 0; i < 6; i++) {
            grid[i] = Array(6);
            for(var j = 0; j < 6; j++) {
                grid[i][j] = [0];
            }
        }
        grid[0][0] = "black";
        grid[0][1] = "green";
        grid[0][2] = "white";
        grid[0][3] = "blue";
        grid[0][4] = "red";
        grid[0][5] = "white";
        grid[1][0] = "yellow";
        grid[1][1] = "white";
        grid[1][2] = "green";
        grid[1][3] = "red";
        grid[1][4] = "yellow";
        grid[1][5] = "blue";
        grid[2][0] = "blue";
        grid[2][1] = "yellow";
        grid[2][2] = "blue";
        grid[2][3] = "white";
        grid[2][4] = "black";
        grid[2][5] = "red";
        grid[3][0] = "red";
        grid[3][1] = "black";
        grid[3][2] = "red";
        grid[3][3] = "green";
        grid[3][4] = "blue";
        grid[3][5] = "white";
        grid[4][0] = "white";
        grid[4][1] = "green";
        grid[4][2] = "yellow";
        grid[4][3] = "black";
        grid[4][4] = "yellow";
        grid[4][5] = "green";
        grid[5][0] = "yellow";
        grid[5][1] = "blue";
        grid[5][2] = "black";
        grid[5][3] = "red";
        grid[5][4] = "green";
        grid[5][5] = "black";
    };

    this.juxta = function() {
        for(var i = 1; i < 5; i++){
            for(var j = 1; j < 5; j++){
                if(grid[i - 1][j] == grid[i][j] || grid[i + 1][j] == grid[i][j]) {
                    return false;
                }else if(grid[i][j - 1] == grid[i][j] || grid[i][j + 1] == grid[i][j]) {
                    return false;
                }else if(grid[0][0] == grid[0][1] || grid[0][0] == grid[1][0]) {
                    return false;
                }else if(grid[5][5] == grid[5][4] || grid[0][0] == grid[4][5]) {
                    return false;
                }else if(grid[0][5] == grid[1][5] || grid[0][0] == grid[0][4]) {
                    return false;
                }else if(grid[5][0] == grid[5][1] || grid[0][0] == grid[4][0]) {
                    return false;
                }else {
                    return true;
                }
            }
        }
    };

    this.playerOne_choseColor = function(i, j) {
        if(grid[i][j] === "yellow") {
            return true;
        }
        return false;
    };

    this.playerOne_takeBall = function(i,j) {
        grid[i][j] = "NULLP1";
    };

    this.countGrid = function() {
        var count = 0;
        for(var i = 0; i < 6; i++) {
            for(var j = 0; j < 6; j++) {
                if(grid[i][j] == "NULLP1" || grid[i][j] == "NULLP2") {
                    count--;
                }
                count++;
            }
        }
        return count;
    };

    this.playerOne_score = function() {
        var score = 0;
        for(var i = 0; i < 6; i++) {
            for(var j = 0; j < 6; j++) {
                if(grid[i][j] == "NULLP1") {
                    score++;
                }
            }
        }
        return score;
    };

    this.playerTwo_choseColor = function(i, j) {
        if(grid[i][j] === "black") {
            return true;
        }
        return false;
    };

    this.playerTwo_takeBall = function(i,j) {
        grid[i][j] = "NULLP2";
    };

    this.playerTwo_score = function() {
        var score = 0;
        for(var i = 0; i < 6; i++) {
            for(var j = 0; j < 6; j++) {
                if(grid[i][j] == "NULLP2") {
                    score++;
                }
            }
        }
        return score;
    };
};