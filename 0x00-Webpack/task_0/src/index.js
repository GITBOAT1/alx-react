import $ from 'jquery';

// Function to add paragraphs
function addParagraphs() {
  const body = $('body');
  const paragraphs = [
    'Holberton Dashboard',
    'Dashboard data for the students',
    'Copyright - Holberton School',
  ];

  paragraphs.forEach((text) => {
    body.append(`<p>${text}</p>`);
  });
}

// Call the function to add paragraphs
addParagraphs();
