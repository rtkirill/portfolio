//google maps 
google.maps.event.addDomListener(window, 'load', init);
var map;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(59.9765, 30.323),
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
['Address', 'undefined', 'undefined', 'undefined', 'undefined', 59.9762548, 30.322731999999974, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') {
            description = '';
        } else {
            description = locations[i][1];
        }
        if (locations[i][2] == 'undefined') {
            telephone = '';
        } else {
            telephone = locations[i][2];
        }
        if (locations[i][3] == 'undefined') {
            email = '';
        } else {
            email = locations[i][3];
        }
        if (locations[i][4] == 'undefined') {
            web = '';
        } else {
            web = locations[i][4];
        }
        if (locations[i][7] == 'undefined') {
            markericon = '';
        } else {
            markericon = locations[i][7];
        }
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        link = '';
    }

}

//preloader

if ($('.preloader').length) {
    $('.preloader').delay(2500).fadeOut(300);
}

//scroll to div
$('.navbar-nav>li>a').click(function () {
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    $('body,html').animate({
        scrollTop: posi
    }, 700);

});

//for scroll animation
new WOW().init();

//form validating
var myLanguage = {
    errorTitle: '',
    lengthTooShortStart: 'Минимум ',
    badEmail: 'Некорректный email адрес',
    lengthBadEnd: ' буквы',
    requiredField: 'Введите сообщение'
}
$.validate({
    form: '#require',
    language: myLanguage,
    scrollToTopOnError: false
});