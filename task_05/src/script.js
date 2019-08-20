(function () {
    'use strict';

    var _ = function () {};

    _.id = function (id) {
        return document.getElementById(id);
    };

    function sum(a, b) {
        if (b > a) {
            a += b - (b = a);
        }

        return (a * (a + 1) - b * (b + 1)) / 2 + b;
    }

    function oddNum(a, b) {
        if (b > a) {
            a += b - (b = a);
        }

        var i, str = '';
        for (i = b; i <= a; i++) {
            if (i % 2 === 1) {
                str += i + ', ';
            }
        }

        return str;
    }

    function drawRectangle(a, b) {
        var str = '',
            i;

        for (; a > 0; a--) {
            for (i = 0; i < b; i++) {
                str += '*';
            }

            str += '\r\n';
        }

        return str;
    }

    function drawLine(space, star) {
        var i, str = '';
        for (i = 0; i < space; i++) {
            str += ' ';
        }

        for (i = 0; i < star; i++) {
            str += '*';
        }

        str += '\r\n';

        return str;
    }

    function drawRhombus(a) {
        var i, str = '';
        str += drawDecTriangle(a);

        for (i = a - 2; i >= 0; i--) {
            str += drawLine(a - i - 1, i * 2 + 1);
        }

        return str;
    }

    function drawDecTriangle(a) {
        var i, str = '';

        for (i = 0; i < a; i++) {
            str += drawLine(a - i - 1, i + i + 1);
        }

        return str;
    }

    function drawTriangle(a) {
        var i, j, str = '';

        for (i = 0; i < a; i++) {
            for (j = 0; j < i; j++) {
                str += '*';
            }

            str += '\r\n';
        }

        return str;
    }

    (function () {
        var pred = _.id('paint');
        pred.innerHTML += 'Sum of elements {6, 9}: ' + sum(6, 9) + '\r\n';
        pred.innerHTML += 'Odd elements in {6, 9}: ' + oddNum(6, 9) + '\r\n';
        pred.innerHTML += drawRectangle(6, 9) + '\r\n';
        pred.innerHTML += drawTriangle(7) + '\r\n';
        pred.innerHTML += drawDecTriangle(5) + '\r\n';
        pred.innerHTML += drawRhombus(10) + '\r\n';
    })();

}());