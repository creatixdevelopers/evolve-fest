// main_menu

let mainMenu = document.querySelector("#main_menu")

document.querySelector('#hamburger').onclick = () => {
    mainMenu.classList.toggle('active');
}

window.onscroll = () => {
    mainMenu.classList.remove('active');
}

// main_menu


// slider

new Swiper('.slider', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.slider .swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 1, spaceBetween: 20 }
    }
});

// slider

// upload_img

$(document).ready(function () {
    $('#chooseFileBtn').on('click', function () {
        $('#fileInput').click();
    });

    $('#fileInput').on('change', function (e) {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $('#preview').attr('src', e.target.result);
            }
            reader.readAsDataURL(file);
        } else {
            alert("File too large or invalid.");
        }
    });

    $('#deleteBtn').on('click', function () {
        $('#fileInput').val('');
        $('#preview').attr('src', '');
    });
});

// upload_img