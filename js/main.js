$(document).ready(function () {
    function startOverlay(oid) {
        $('.overlay-veil').fadeTo("50", '0.8', function () {
            var element = $('div[data-overlayid="' + oid + '"]');
            element.fadeIn('50');
            element.addClass('active');
        });
    }

    function closeOverlays(oid) {
        $('.overlay-component').each(function () {
            if ($(this).hasClass('active')) {
                $('.overlay-veil').fadeOut();
                $(this).fadeOut('50', function () {
                    $(this).removeClass('active');
                });
            }
        });
        if (oid !== false) startOverlay(oid);
    }
    $('.closs').click(function () {
        closeOverlays(false);
    });
    $('.overlay-click').click(function (e) {
        var oid = $(this).data('overlay');
        closeOverlays(oid);
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    window.onscroll = function () { myFunction() };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});