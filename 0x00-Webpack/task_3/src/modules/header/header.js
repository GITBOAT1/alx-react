import $ from 'jquery';
import './header.css';

const logo = '<img src="path/to/logo.png" alt="Logo">';
const title = '<h1>Holberton Dashboard</h1>';

$('header').append(logo, title);
console.log('Init header');
