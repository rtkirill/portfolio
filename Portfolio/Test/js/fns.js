(function ($) {
    "use strict";

    function show_hideInput() {
        $('#name').focus(function () {
            $('#inp1').addClass('active_input');
            $('#but1').addClass('butshow');
            $('#true1').click(function () {
                $('#inp1').removeClass('active_input');
                $('#but1').removeClass('butshow');
            });
            $('#false1').click(function () {
                $('#name').val('');
            });
        });

        $('#geo').on('focus', function () {
            $('#inp2').addClass('active_input');
            $('#but2').addClass('butshow');
            $('#true2').click(function () {
                $('#inp2').removeClass('active_input');
                $('#but2').removeClass('butshow');
            });
            $('#false2').click(function () {
                $('#geo').val('');
            });
        });

        $('#lang').on('focus', function () {
            $('#inp3').addClass('active_input');
            $('#but3').addClass('butshow');
            $('#true3').click(function () {
                $('#inp3').removeClass('active_input');
                $('#but3').removeClass('butshow');
            });
            $('#false3').click(function () {
                $('#lang').val('');
            });
        });

        $('#skill').focus( function () {
            $('#inp4').addClass('active_skill');
            $('#but4').addClass('butshow');
            $('#skillselect').addClass('butshow');
            $('#true4').click(function () {
                $('#inp4').removeClass('active_skill');
                $('#but4').removeClass('butshow');
                $('#skillselect').removeClass('butshow');
            });
        });

    }

    function deleteSkill() {
        $('.skill').on('click', function () {
            $(this).remove();
        });
    }

    function addSkill() {
        $('#true4').on('click', function () {
            var content = $('#skill').val();
            var skill = $('#skillselect option:selected').text();
            var level = '';
            if (skill == 'Strong') {
                level = 'strong';
            }
            if (skill == 'Average') {
                level = 'average';
            }
            if (skill == 'Low') {
                level = 'low';
            }
            $('.list-skill').prepend("<li class='skill'>" + content + "</li>");
            $('.list-skill li:first-child').addClass(level);
            deleteSkill();
        });
        
    }

    $(document).on('ready', function () {
        show_hideInput();
        addSkill();        
        deleteSkill();
    });
})(jQuery);