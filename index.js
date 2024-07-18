// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

/* Event Bubbling : 
Event bubbling describes how the browser handles events targeted at nested elements. 
when we click the image which is nested inside the div, the event handler calls both image and div and gives alert for both(this means the event gets triggered from nested to parent element in dom tree)
-------
To avoid this we have an event handler called event.stopPropagation();
Below code is the example for the handler
*/

const div = document.querySelector('div');
const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
  console.log('button is clicked');
});

div.addEventListener('click', () => {
  alert('Div is clicked');
});

img.addEventListener('click', (event) => {
  event.stopPropagation(); //Handler to prevent the event bubbling//
  alert('image is clicked');
});

/*Event Delegation :
In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.
*/

const div2 = document.querySelector('div');
const btn2 = document.querySelectorAll('button');

/*instead of adding event to each button which is children to div we will add
event to div which is parent and we'll do the following */
btn2.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log('Button was clicked');
  });
});

div2.addEventListener('click', (event) => {
  const target = event.target;
  /*For DOM trees which represent HTML documents, the returned tag name is always in the canonical upper-case form. */
  console.log(target.tagName);

  if (target.tagName === 'BUTTON') {
    console.log(target.innerText);
  }
});
