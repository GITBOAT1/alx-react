// Import jQuery
import $ from 'jquery';

// Wait for the document to be ready
$(document).ready(function() {
  // Create the first paragraph element
  const paragraph1 = $('<p>').text('Holberton Dashboard');

  // Create the second paragraph element
  const paragraph2 = $('<p>').text('Dashboard data for the students');

  // Create the third paragraph element
  const paragraph3 = $('<p>').text('Copyright - Holberton School');

  // Append the paragraphs to the body of the page
  $('body').append(paragraph1, paragraph2, paragraph3);
});
