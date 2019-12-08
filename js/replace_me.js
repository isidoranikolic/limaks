$(window).on('load', function () { // makes sure the whole site is loaded
    $('.preloader').delay(250).fadeOut('slow'); // will first fade out the loading animation
    $('.preloader__container').delay(850).fadeOut('slow'); // will fade out the white DIV that covers the website.
    setTimeout(() => {
        $('body').removeClass('body');
    }, 850);
})

function valName() {
    var name = document.getElementById('name__input').value;

    if (!name) {
        document.getElementsByClassName('alert__block')[0].classList.remove("active__alert");
        document.getElementsByClassName('alert__block-name')[0].classList.add("active__alert");
        setTimeout(function () {
            document.getElementsByClassName('alert__block-name')[0].classList.remove("active__alert");
        }, 5000);
        return false;
    } else {
        return true;
    }
}

function valEmail() {
    var email = document.getElementById('email__input').value;
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        document.getElementsByClassName('alert__block')[0].classList.remove("active__alert");
        document.getElementsByClassName('alert__block-email')[0].classList.add("active__alert");
        setTimeout(function () {
            document.getElementsByClassName('alert__block-email')[0].classList.remove("active__alert");
        }, 5000);
        return false;
    } else if (!filter.test(email)) {
        document.getElementsByClassName('alert__block')[0].classList.remove("active__alert");
        document.getElementsByClassName('alert__block-email-val')[0].classList.add("active__alert");
        setTimeout(function () {
            document.getElementsByClassName('alert__block-email-val')[0].classList.remove("active__alert");
        }, 5000);
        return false;
    } else {
        return true;
    }

}

function valMsg() {
    var text = document.getElementById('text__input').value;

    if (!text) {
        document.getElementsByClassName('alert__block')[0].classList.remove("active__alert");
        document.getElementsByClassName('alert__block-msg')[0].classList.add("active__alert");
        setTimeout(function () {
            document.getElementsByClassName('alert__block-msg')[0].classList.remove("active__alert");
        }, 5000);
        return false;
    } else {
        return true;
    }
}

$(document).ready(function () {
    $('.skip-to-main-content').click(function () {
        $(this).blur();
    })

    $('.scroll').click(function () {
        $(this).blur();
    })

    $('#submit__button').click(function (e) {
        if (!valName() || !valEmail() || !valMsg()) {
            e.preventDefault();
        }
    });
    $('.ccformfield').on('keydown', function () {
        $('.alert__block').removeClass('active__alert');
    });

    $(".col-12 .input__field").val("");

    $(".input-effect .input__field").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    })
});