// select color input
// select size input
let color = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
let tab = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
makeGrid(height, width);

sizePicker.addEventListener('submit', function(m){
    m.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    tab.firstElementChild.remove();
    makeGrid(height, width);
});

// grid should appear when iser submit heighr,width
function makeGrid(height, width) {
    var r, c; // c is colomn,r is row
    for( r = 1; r <= height; r++) {
        let row = tab.insertRow(r);
        for( c = 1; c < width; c++){
            let col = row.insertCol(c);
            col.addEventListener('click',function(){
                col.style.backgroundcolor = color.value;
            });
        }
    }
}


