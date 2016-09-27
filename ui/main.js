console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

// move the madi
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft +1;
    img.style.marginleft = marginLeft + 'px';
}
img.onClick = function() {
    var interval = setInterval(moveRight, 50);
};