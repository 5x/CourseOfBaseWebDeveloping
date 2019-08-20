(function() {

    var _ = {};
    _.id = function (id) {
        return document.getElementById(id);
    };

    function calculate() {  //stupid name to func;
        var sum = 0, i = 0, len = arguments.length;

        while (i < len) {
            sum += +arguments[i++];
        }

        return len ^ 0 && (sum === +sum ? sum / len : 'Incorrectly input values');
    }

    function Cylinder(radius, height) {
        this.R = radius || 0;
        this.h = height || 0;

        this.volumeOf = function() {
            return Math.PI * (this.R * this.R) * this.h;
        };

        this.surfaceAreaOf = function() {
            return 6.283185307 * this.R * (this.R + this.h);
        };
    }

    var addition = function() {
            var args = Array.prototype.slice.call(arguments);
            args[0].length > 0 && (args = args[0]);
            var val = 0, i = 0, len = args.length;

            while (i < len) {
                val += +args[i++];
            }

            return val;
        },

        subtraction = function() {
            var args = Array.prototype.slice.call(arguments);
            args[0].length > 0 && (args = args[0]);
            var val = args[0], i = 1, len = args.length;

            while (i < len) {
                val -= +args[i++];
            }

            return val;
        },

        multiplication = function() {
            var args = Array.prototype.slice.call(arguments);
            args[0].length > 0 && (args = args[0]);
            var val = args[0], i = 1, len = args.length;

            while (i < len) {
                val *= +args[i++];
            }

            return val;
        },

        division = function() {
            var args = Array.prototype.slice.call(arguments);
            args[0].length > 0 && (args = args[0]);
            var val = args[0], i = 1, len = args.length,
                isCorrect = !0;

            while (i < len && (isCorrect = !isCorrect || args[i])){
                val /= +args[i++];
            }

            return isCorrect ? val : 'Not possible to divide by 0';
        };

    var cylinder_btn = _.id('cylinder'),
        cylinder = new Cylinder();
    cylinder_btn.onclick = function() {
        cylinder.R = +_.id('radius').value;
        cylinder.h = +_.id('height').value;
        _.id('cylinder_result').value = _.id('volumeOf').checked ?
            cylinder.volumeOf() : cylinder.surfaceAreaOf();
    };

    var btn = _.id('calculate'), R = _.id('R');
    btn.onclick = function () {
        R.value = calculate(_.id('a').value, _.id('b').value, _.id('c').value);
    };

    var num = _.id('num');
    num.onclick = function() {
        var radios = document.getElementsByName('num_func_type'), value;

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                value = radios[i].id;
            }
        }

        var arr = [6, 0, -1, -6, 24.2, 15, 3, 4];

        _.id('num_result').value =
            value === 'addition'         ? addition(arr) :
            value === 'subtraction'      ? subtraction(arr) :
            value === 'multiplication'   ? multiplication(arr) :
            value === 'division'         ? division(arr) :
                                         'Select function type';
    };
}());

(function() {
    var list = document.querySelector('.deb-stk').querySelectorAll('li'),
        res = document.querySelector('.ctr-val ul'),
        x = 0, y = 0, z = 0;

    for (var i = 0; i < list.length; i++) {
        eval(list[i].innerHTML);
        res.innerHTML += '<li>'+ 'x: ' + x + ' y: ' + y + ' z: ' + z+'</li>';
    }
}());
