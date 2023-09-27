#!/usr/bin/node

$(document).ready(function() {
    const dict = {};
    $('input').change(function() {
        if (this.checked) {
            dict[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete dict[$(this).attr('data-id')];
        }
        $('div.amenities h4').html(Object.values(dict).join(', ') || '&nbsp;');
    });
});