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
        $('#message').on('submit', function (e) {
            e.preventDefault();
            var msg = $('#message').serialize();
            $.ajax({
                type: 'POST',
                url: 'fns.php',
                data: msg,
                success: function () {
                    $('#message').fadeTo("slow", 1, function () {
                        this.reset();
                        $('#success').fadeIn();
                    });
                }
            });
        });
    }

    $(document).on('ready', function () {
        loadingPage();
        validateForm();
        sendForm();
    });
})(jQuery);