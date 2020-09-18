// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one();
  two();
  three();
  makeVisible()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}


function two () {
  // First, we have to find the element:
  var one = document.getElementById('two')

  // Next, we apply a new CSS class to it:
  one.classList.add('rosy')
}


function three () {
  // First, we have to find the element:
  var one = document.getElementById('three')

  // Next, we apply a new CSS class to it:
  one.classList.add('green')
}
// CREATE FUNCTION two HERE

// CREATE FUNCTION three HERE

// CREATE FUNCTION makeVisible HERE

function makeVisible() {
  // First, we have to find the element:
  var visual = document.getElementsByClassName('invisible')

  // Next, we apply a new CSS class to it:
  visual[0].classList.add('visible')


}