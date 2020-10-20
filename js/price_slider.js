//* work in progress
document.onmousedown = function(e) {			//событие нажатия на кнопку мыши
  
  const rangeControls = document.querySelector(".range-controls"); 
  var elem = e.target; 							//элемент, на который нажали
  var limits = {
    right: rangeControls.clientWidth + rangeControls.clientLeft - elem.clientWidth,
    left: rangeControls.clientLeft
  };

  elem.ondragstart = function() {   				// отменяем Drag’n’Drop браузера
    return false
  };   

  rangeControls.onmousemove = function(e) {
      move(e);
  }

  function move(e) {
    var targetCoords = rangeControls.getBoundingClientRect();
    var newLocation = {
      x: limits.left,
    };
    
    if (e.offsetX > limits.right) {
      newLocation.x = limits.right;
    } else if (e.offsetX >= limits.left) {
      newLocation.x = e.clientX - targetCoords.left;
    } 
    relocate(newLocation);
  }
  
  //* размещение small
  function relocate(newLocation) {
    elem.style.left = newLocation.x + 'px';
    elem.onmouseup = function() {
      rangeControls.onmousemove = null;
      elem.onmouseup = null;
    };
  
    console.log("offset " + e.offsetX);
    console.log("limits " + limits.right);
    console.log("limits " + limits.left);
    console.log("location " + newLocation.x);
  } 

 
} 


