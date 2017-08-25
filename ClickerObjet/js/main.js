var Clicker = {
    score: 99,
    rage: 99,
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
    setNewWeapon: function (price, add) {
        if (price <= this.rage) {
            this.rage -= price;
            this.score -= price;
            var weapon = new Object();
            weapon.lvl = 1;
            weapon.kill = 0;
            weapon.price = price;
            weapon.update = add;
            Clicker.displayScore();
            return weapon;
        } else {
            alert("test");
        }
    },
    addWeapon: function (variable, price, add) {
        if (variable.price < this.rage) {
            variable.lvl++;
            this.rage -= variable.price;
            variable.update += add;
            variable.price = Math.floor(variable.price * 1.5);
            Clicker.displayScore();
            return variable;
        } else {
            alert("pas de tune");
            return variable;
        }
    },
    addRage: function (weapon) {
        Clicker.score += weapon.update;
        Clicker.rage += weapon.update;
        Clicker.displayScore();
    }
};

var brush;
var bat;
$(document).ready(function () {
    $("#target").click(function () {
        Clicker.hit();
    });
    $("#addMultiplier").click(function () {
        Clicker.addMultiplier();
    });

    $("#weapon0").click(function () {
        if (typeof brush === "undefined") {
            brush = Clicker.setNewWeapon(100, 10);
            console.log(brush);
            setInterval(function () {
                Clicker.score += brush.update;
                Clicker.rage += brush.update;
                Clicker.displayScore();
            }, 1000);
        } else {
            brush = Clicker.addWeapon(brush, brush.price, 10);
            console.log(brush);
        }
    });
    $("#weapon1").click(function () {
        if (typeof bat === "undefined") {
            bat = Clicker.setNewWeapon(250, 50);
            console.log(bat);
            setInterval(function () {
                Clicker.score += (bat.update * Clicker.multiplier);
                Clicker.rage += (bat.update * Clicker.multiplier);
                Clicker.displayScore();
            }, 1000);

        } else {
            bat = Clicker.addWeapon(bat, bat.price, 50);
            console.log(bat);
        }
    });
});
