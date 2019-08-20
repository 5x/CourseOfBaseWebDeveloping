$('#change-p').click(function () {
  $('p').toggleClass('red');
});

$('#change-div').click(function () {
  $('.blocks div').toggleClass('blue');
});


/*Task 2*/
function add(btn, el, prop, val) {
  $(btn).click(function () {
    $(el).css(prop, val);
  });
}

add('#btn1', 'p',               'color',      'red');
add('#btn2', 'p[id^="rand_"]',  'color',      'red');
add('#btn3', 'div.pr',          'background', 'yellow');
add('#btn4', '.art div',        'background', 'red');
