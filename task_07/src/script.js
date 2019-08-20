(function () {
  'use strict';

  var id = function (id) {
    return document.getElementById(id);
  }, form = id('form');

  form.onchange = function () {
    var res = id('price'),
      map = {
        'mushroom': 15,
        'tomato': 8,
        'bacon': 24.5,
        'cheese': 17.2,
        'olive': 28.6
      },
      price = ([60, 80, 100])[this.size.selectedIndex],
      i;

    for (i in map) {
      if (map.hasOwnProperty(i) && this[i] && this[i].checked) {
        price += map[i];
      }
    }

    res.innerHTML = price.toFixed(2);
  };
}());