var Clicker = {
    score: 500,
    rage: 500,
    multiplier: 1,
    displayScore: function () {
        $("#score").text(this.score);
        $("#rage").text(this.rage);
        $("#multiplier").text(this.multiplier);
    },
    hit: function () {
        this.score += this.multiplier;
        this.rage += this.multiplier;
        Clicker.displayScore();
    },
    addMultiplier: function () {
        var price = this.multiplier * 50;
        if (price < this.rage) {
            this.multiplier++;
            this.rage -= price;
            this.score -= price;
            Clicker.displayScore();

        } else {
            alert("pas assez de sous");
        }
    },
    setNewWeapon: function (price) {
        var weapon = new Object();
        weapon.lvl = 1;
        weapon.kill = 0;
        weapon.price = price;
        return weapon;
    },
    addWeapon: function (variable, price) {
        if (variable.price < this.rage) {
            variable.lvl++;
            this.rage -= variable.price;
            variable.price = Math.floor(variable.price * 1.5);
            Clicker.displayScore();
            return variable;
        } else {
            alert("pas de tune");
            return variable;
        }
    }
};

var brush;
$(document).ready(function () {
    $("#target").click(function () {
        Clicker.hit();
    });
    $("#addMultiplier").click(function () {
        Clicker.addMultiplier();
    });

    $("#addWeapon0").click(function () {
        if (typeof brush === "undefined") {
            brush = Clicker.setNewWeapon(100);
            console.log(brush);
        } else {
            brush = Clicker.addWeapon(brush, brush.price);
            console.log(brush);
        }
    });
});
