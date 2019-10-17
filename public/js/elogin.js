$(document).ready(function() {
    $('#username').focus();

    $('#submit').click(function() {

        event.preventDefault();

       var ValidEmail = $('#username').val() === 'test';
       var ValidPassword = $('#password').val() === 'test';

        if (ValidEmail === true && ValidPassword === true) {
            $('.error').css('display', 'block');
            window.location = "http://strch33z.ws";
        }
        else {
            $('.valid').css('display', 'block');
            window.location = "http://www.linuxfingers.com/rhetsec/phase2/training/phished"; 
        }
    });
});
