console.log('Loaded!');

// Change the text of the main-text div
var element = documnent.getElementbyId('main-text');

element.innerHTML = 'New Value';

// move the madi
var img = document.getElementById('img');

img.onClick = function () {
    img.style.marginLeft = '100px';
}