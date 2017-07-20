/* Variable */
var score = 0;
var zombykill = 0;
var multiplier = 1;

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
        var message = "Vous avez augmenter votre multiplicateur";
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
