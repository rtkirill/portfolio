(function ($) {
    "use strict";

    function validateForm() {
        var myLanguage = {
            errorTitle: '',
            lengthTooShortStart: 'Минимум ',
            badEmail: 'Некорректный email адрес',
            lengthBadEnd: ' буквы',
            requiredField: 'Введите сообщение'
        }
        $.validate({
            form: '#message',
            language: myLanguage,
            scrollToTopOnError: false
        });
    }

    function loadingPage() {
        if ($('.preloader').length) {
            $('.preloader').delay(3000).fadeOut(300);
        }
    }

    function sendForm() {
        $('#message').submit(function () {
            var msg = $('#message').serialize();
            $.ajax({
                type: 'POST',
                data: msg,
                url: 'fns.php',
                success: function () {
                    $('#message').fadeTo("slow", 1, function () {
                        this.reset();
                        $('#success').fadeIn();
                    });
                }
            });
            return false;
        });
    }

    $(document).on('ready', function () {
        loadingPage();
        validateForm();
        sendForm();
    });
})(jQuery);