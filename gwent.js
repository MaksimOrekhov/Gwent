$(document).ready( function() {  

        var newPhoto = new Image();
        var oldPhoto = $('#swap').attr('src');
        newPhoto.src = '/Users/maksimo/Documents/JavaScript/cards-win.32.png';

        $('#swap').hover(
                function() {
                    $(this).attr('src', newPhoto.src);
                },
                function() {
                    $(this).attr('src', oldPhoto);
                }

            );  // end hover
            }); // end ready