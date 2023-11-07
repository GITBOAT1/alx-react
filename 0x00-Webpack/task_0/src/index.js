import $ from 'jquery';

const paragraph1 = $('<p>').text('Holberton Dashboard');
const paragraph2 = $('<p>').text('Dashboard data for the students');
const paragraph4 = $('<p>').text('Copyright - Holberton School');

$('body').append(paragraph1, paragraph2, paragraph4);
