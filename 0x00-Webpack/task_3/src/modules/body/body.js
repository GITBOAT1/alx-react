import $ from 'jquery';
import debounce from 'lodash/debounce';
import image from '../../assets/holberton-logo.jpg'
import '../../css/main.css'

const paragraph1 = $('<p>').text('Holberton Dashboard');
const paragraph2 = $('<p>').text('Dashboard data for the students');
const button = $('<button>').text('Click here to get started');
const paragraph3 = $('<p>').attr('id', 'count');
const paragraph4 = $('<p>').text('Copyright - Holberton School');

$('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

button.on('click', debounce(updateCounter, 500));

// Add element at the top of the document with id #logo
const logoElement = $('<div>').attr('id', 'logo');
$('body').prepend(logoElement);