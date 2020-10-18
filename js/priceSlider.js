
//* work in progress

/*document.onmousedown = function(e) {			//событие нажатия на кнопку мыши
       
  const minToggle = document.querySelector(".toggle-min"); 	
  const maxToggle = document.querySelector(".toggle-max");
  const rangeControls = document.querySelector(".range-controls"); 
 
  var elem = e.target; 							//элемент, на который нажали
  
  if (!elem.classList.contains('toggle')) return; 
  
  elem.ondragstart = function() {   				// отменяем Drag’n’Drop браузера
    return false
  };   

  var limits = {
    right: rangeControls.clientWidth + rangeControls.clientLeft - elem.clientWidth,
    left: rangeControls.clientLeft
  };

 //* переделка 
  var targetCoords = rangeControls.getBoundingClientRect();
  var newLocation = {
    x: limits.left
  };
  if (e.offsetX > limits.right) {
    newLocation.x = limits.right;
  } else if (e.offsetX > limits.left) {
    newLocation.x = e.clientX - targetCoords.left;
  }
  relocate(newLocation);


//* размещение small
function relocate(newLocation) {
  elem.style.left = newLocation.x + 'px';
}

} 
*/


var small = document.querySelector(".toggle-min");
var big = document.querySelector(".range-controls"); 
//* флаг перетаскивания
var isDrag = false;
//* ограничения, за которые нельзя вытащить small
var limits = {
  right: big.clientWidth + big.clientLeft - small.clientWidth,
  left: big.clientLeft
};

//* вкл/выкл режим перетаскивания
small.onmousedown = function(e) {
  isDrag = true;
}
document.onmouseup = function() {
  isDrag = false;
}
document.onmousemove = function(e) {
  if (isDrag) {
    move(e);
  }
}

//* вычисление координат
function move(e) {
  var targetCoords = big.getBoundingClientRect();
  var newLocation = {
    x: limits.left,
  };
  if (e.offsetX > limits.right) {
    newLocation.x = limits.right;
  } else if (e.offsetX > limits.left) {
    newLocation.x = e.clientX - targetCoords.left;
  }
  relocate(newLocation);
  console.log(e.offsetX);
  console.log(limits.right);
  console.log(newLocation.x);
}

//* размещение small
function relocate(newLocation) {
  small.style.left = newLocation.x + 'px';
}


 



