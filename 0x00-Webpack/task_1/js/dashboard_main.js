import $ from 'jquery';
import debounce from 'lodash/debounce';

$(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;
    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on button`);
    }

    const clickHandler = debounce(updateCounter, 500);
    $('button').on('click', clickHandler);
});
