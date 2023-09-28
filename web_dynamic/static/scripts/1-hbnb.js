#!/usr/bin/node

$(document).ready(function () {
    $('.checkbox').change(function () {
        if ($('.checkbox:checked').length > 0) {
            alert('At least one checkbox is checked!');
        }
    });
});
