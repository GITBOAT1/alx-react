// Import jQuery
import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
  // Add elements to the body in the specified order
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});

let count = 0;

function updateCounter() {
  // Increment the count
  count++;

  // Update the content of the paragraph element with id='count'
  $('#count').text(`${count} click${count === 1 ? '' : 's'} on the button`);
}

$(document).ready(function() {
    // Add elements to the body (as previously described)
  
    // Bind the `updateCounter` function to the button's click event with a debounce delay of 300 milliseconds
    $('#startButton').on('click', debounce(updateCounter, 300));
  });
  
