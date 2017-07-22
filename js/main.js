/* Variable */
var score = 700;
var zombykill = 0;
var multiplier = 1;

/* Weapons */

// Brush
var lvlBrush = 2;
var killBrush = 0;
var priceBrush = 200;
var winBrush = 1 * multiplier * lvlBrush;

function addBrush() {
        if (score >= priceBrush) {
        lvlBrush++;
        score = score - priceBrush;
        var message = "Vous avez augmenté le niveau de votre Pinceau";
        priceBrush = 200 * (lvlBrush * 2.5);
        return display("score", score) + display("lvlbrush", lvlBrush) + display("pricebrush", priceBrush) + display("message", message) + priceBrush;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceBrush;
        return display("message", message);
    }
}
function exeBrush(){
    score = score + winBrush;
    zombykill = zombykill + winBrush;
    return display("score", score) + display("zombykill", zombykill);
}

// Bat
var lvlBat = 0;
var killBat = 0;
var priceBat = 2000;

function addBat() {
        if (score >= priceBat) {
        lvlBat++;
        score = score - priceBat;
        var message = "Vous avez augmenté le niveau de votre Batte  ";
        priceBat = 2000 * (lvlBat * 2.5);
        return display("score", score) + display("lvlbat", lvlBat) + display("pricebat", priceBat) + display("message", message) + priceBat ;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceBat;
        return display("message", message);
    }
}

/* Slaves */
function exeWeapon(){
    return exeBrush();
}
/* Execute */
function hitZomby() {
    score = score + multiplier;
    zombykill = zombykill + multiplier;
    return display("score", score) + display("zombykill", zombykill);
}

function upgradeMultiplier() {
    var priceMultiplier = 50 * multiplier;
    if (score >= priceMultiplier) {
        multiplier++;
        score = score - priceMultiplier;
        var message = "Vous avez augmenté votre multiplicateur";
        return display("score", score) + display("multiplier", multiplier) + display("message", message) + multiplier;
    } else {
        var message = "Vous n'avez pas assez de rage pour multiplier il vous en faut : " + priceMultiplier;
        return display("message", message);
    }
}



/* Display */
function display(id, variable) {
    return document.getElementById(id).innerHTML = variable;
}

function displayUpgrade(id, icon) {
    var text = '<span class="glyphicon glyphicon-' + icon + ' title-size" aria-hidden="true"></span';
    return document.getElementById(id).innerHTML = text;
}
