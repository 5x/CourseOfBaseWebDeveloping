(function () {
    'use strict';

    var _ = function (query) {
        return document.querySelectorAll(query);
    };

    _.id = function (id) {
        return document.getElementById(id);
    };

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    function nextColor(query, nodeElStr) {
        var el = _(query),
            randColor = randomColor(),
            i;

        nodeElStr.style.color = randColor;

        for (i = 0; i < el.length; i++) {
            el[i].style.color = randColor;
        }
    }

    function changeText(queryIn, formId) {
        _(queryIn)[0].innerHTML = _.id(formId).value;
    }

    (function () {
        var btn = _.id('btn');
        if (btn) {
            btn.onclick = function () {
                changeText('.bounce > p', 'marquee_text');
                changeText('.line > p', 'marquee_text');
            };
        }

        var f = _.id('btn_list'),
            arr = ['.wrap > p', '.wrap > a', '#id_test'],
            q = function (el) {
                return function () {
                    nextColor(el, this);
                };
            },
            i;

        for (i = 0; i < arr.length; i++) {
            f[i].onclick = q(arr[i]);
        }
    }());

}());