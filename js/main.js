/* Variable */
var score = 10000000;
var zombykill = 0;
var multiplier = 1;

/* Weapons */

// Brush
var lvlBrush = 0;
var killBrush = 0;
var priceBrush = 200;

function addBrush() {
    if (score >= priceBrush) {
        lvlBrush++;
        score -= priceBrush;
        var message = "Vous avez augmenté le niveau de votre Pinceau";
        priceBrush = 200 * (lvlBrush * 2.5);
        return display("score", score) + display("lvlbrush", lvlBrush) + display("pricebrush", priceBrush) + display("message", message) + priceBrush;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceBrush;
        return display("message", message);
    }
}

function exeBrush() {
    var winBrush = 1 * multiplier * lvlBrush;
    score += winBrush;
    zombykill += winBrush;
    killBrush += winBrush;
    return display("score", score) + display("zombykill", zombykill) + display("killbrush", killBrush);
}

// Bat
var lvlBat = 0;
var killBat = 0;
var priceBat = 2000;

function addBat() {
    if (score >= priceBat) {
        lvlBat++;
        score -= priceBat;
        var message = "Vous avez augmenté le niveau de votre Batte  ";
        priceBat = 2000 * (lvlBat * 2.5);
        return display("score", score) + display("lvlbat", lvlBat) + display("pricebat", priceBat) + display("message", message) + priceBat;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceBat;
        return display("message", message);
    }
}
function exeBat() {
    var winBat = 5 * multiplier * lvlBat;
    score += winBat;
    zombykill += winBat;
    killBat += winBat;
    return display("score", score) + display("zombykill", zombykill) + display("killbat", killBat);
}

// Knife
var lvlKnife = 0;
var killKnife = 0;
var priceKnife = 5000;

function addKnife() {
    if (score >= priceKnife) {
        lvlKnife++;
        score -= priceKnife;
        var message = "Vous avez augmenté le niveau de votre Couteau  ";
        priceKnife = 5000 * (lvlKnife * 2.5);
        return display("score", score) + display("lvlknife", lvlKnife) + display("priceknife", priceKnife) + display("message", message) + priceKnife;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceKnife;
        return display("message", message);
    }
}
function exeKnife() {
    var winKnife = 10 * multiplier * lvlKnife;
    score += winKnife;
    zombykill += winKnife;
    killKnife += winKnife;
    return display("score", score) + display("zombykill", zombykill) + display("killknife", killKnife);
}

// Gun 
var lvlGun = 0;
var killGun = 0;
var priceGun = 50000;

function addGun() {
    if (score >= priceGun) {
        lvlGun++;
        score -= priceGun;
        var message = "Vous avez augmenté le niveau de votre Pistolet  ";
        priceGun = 50000 * (lvlGun * 2.5);
        return display("score", score) + display("lvlgun", lvlGun) + display("pricegun", priceGun) + display("message", message) + priceGun;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceGun;
        return display("message", message);
    }
}
function exeGun() {
    var winGun = 100 * multiplier * lvlGun;
    score += winGun;
    zombykill += winGun;
    killGun += winGun;
    return display("score", score) + display("zombykill", zombykill) + display("killgun", killGun);
}

// Shotgun 
var lvlShotgun = 0;
var killShotgun = 0;
var priceShotgun = 250000;

function addShotgun() {
    if (score >= priceShotgun) {
        lvlShotgun++;
        score -= priceShotgun;
        var message = "Vous avez augmenté le niveau de votre Fusil à Pompe ";
        priceShotgun = 250000 * (lvlShotgun * 2.5);
        return display("score", score) + display("lvlshotgun", lvlShotgun) + display("priceshotgun", priceShotgun) + display("message", message) + priceShotgun;
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceShotgun;
        return display("message", message);
    }
}
function exeShotgun() {
    var winShotgun = 1000 * multiplier * lvlShotgun;
    score += winShotgun;
    zombykill += winShotgun;
    killShotgun += winShotgun;
    return display("score", score) + display("zombykill", zombykill) + display("killshotgun", killShotgun);
}

/* Slaves */
/* Execute */
function hitZomby() {
    score +=multiplier;
    zombykill += multiplier;
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
