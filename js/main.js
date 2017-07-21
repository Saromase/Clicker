/* Variable */
var score = 500;
var zombykill = 0;
var multiplier = 1;

/* Weapons */

// Brush
var lvlBrush = 0;
var priceBrush = 200;
var killBrush = 0;

function addBrush() {
    if ((score >= priceBrush ) && (lvlBrush == 0)){
        lvlBrush++;
        score = score - priceBrush;
        var message = "Vous avez augmenté le niveau de votre Pinceau";
        return display("score", score) + display("lvlbrush", lvlBrush) + display("pricebrush", priceBrush) + display("message", message);
    } else {
        if (score >= priceBrush) {
        lvlBrush++;
        score = score - priceBrush;
        var message = "Vous avez augmenté le niveau de votre Pinceau";
        return display("score", score) + display("lvlbrush", lvlBrush) + display("pricebrush", priceBrush) + display("message", message);
    } else {
        var message = "Vous n'avez pas assez de rage pour augmenter votre arme il vous en faut : " + priceBrush;
        return display("message", message);
    }
    }
    
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
        return display("score", score) + display("multiplier", multiplier) + display("message", message);
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
