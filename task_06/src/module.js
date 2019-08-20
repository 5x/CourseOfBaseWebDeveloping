'use strict';
var module = function () {
    var replaceTo = 'UKRAINE';

    function isText(el) {
        return el.nodeType === 3 && el.data.trim();
    }

    function isNodeElement(el) {
        return el.nodeType === 1;
    }

    function changeText(el) {
        el = el || document.body;
        if (isText(el)) {
            el.data = replaceTo;
        } else if (isNodeElement(el)) {
            var n;
            for (n = el.firstChild; n !== null; n = n.nextSibling) {
                changeText(n);
            }
        }
    }

    return {
        patriotArticle: changeText
    };

}();

(function () {
    module.patriotArticle();
}());