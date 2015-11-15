(function () {

    var openCart = document.querySelectorAll('.product-card-actions-buy');
    var popupCart = document.querySelector('.modal-cart');
    var closeCart = document.querySelector('.modal-cart-close');
    var cancelCart = popupCart.querySelector('.modal-close-btn');
    var submitCart = popupCart.querySelector('.modal-btn');
    var countBtn = document.querySelector('.bar-cart-count');
    var counter = countBtn.querySelector('.count');

    for (var i = 0; i < openCart.length; i++) {
        openCart[i].addEventListener('click', function (event) {
            event.preventDefault();
            popupCart.classList.add('modal-cart-show');
            countBtn.classList.add('count-active');
            var count = Number(counter.innerHTML);
            counter.innerHTML = count += 1;
        });
    }

    submitCart.addEventListener('click', function (event) {
        event.preventDefault();
        popupCart.classList.remove('modal-cart-show');
    });

    closeCart.addEventListener('click', function (event) {
        event.preventDefault();
        popupCart.classList.remove('modal-cart-show');
    });

    cancelCart.addEventListener('click', function (event) {
        event.preventDefault();
        popupCart.classList.remove('modal-cart-show');
    });

    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            if (popupCart.classList.contains('modal-cart-show')) {
                popupCart.classList.remove('modal-cart-show');
            }
        }
    });


    var linkArrow = document.querySelectorAll('.features-slider-arrows a');
    var inputNav = document.querySelectorAll('[name="features-toggle"]');

    if (linkArrow) {
        for (var i = 0; i < linkArrow.length; i++) {
            linkArrow[i].addEventListener('click', function (event) {
                event.preventDefault();
                var currentInput = document.querySelector('.features-slider input:checked');
                var currentInputIndex = [].indexOf.call(inputNav, currentInput);
                var inputCount = inputNav.length;
                switch (this.dataset.direction) {
                case 'left':
                    if (currentInputIndex == 0) {
                        inputNav[inputCount - 1].checked = true;
                    } else {
                        inputNav[currentInputIndex - 1].checked = true;
                    }
                    break;

                case 'right':
                    if ((inputCount - 1) == currentInputIndex) {
                        inputNav[0].checked = true;
                    } else {
                        inputNav[currentInputIndex + 1].checked = true;
                    }
                    break;
                }
            });
        };
    }

    var openMap = document.querySelector('.open-modal-map');
    var popupMap = document.querySelector('.modal-map');
    var closeMap = document.querySelector('.modal-map-close');

    if (openMap) {
        openMap.addEventListener('click', function (event) {
            event.preventDefault();
            popupMap.classList.add('modal-map-show');
        });

        closeMap.addEventListener('click', function (event) {
            event.preventDefault();
            popupMap.classList.remove('modal-map-show');
        });

        window.addEventListener('keydown', function (event) {
            if (event.keyCode === 27) {
                if (popupMap.classList.contains('modal-map-show')) {
                    popupMap.classList.remove('modal-map-show');
                }
            }
        });

        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map('map', {
                    center: [59.938554257894, 30.322479499999993],
                    zoom: [16],
                    controls: []
                }),
                myMap.behaviors.disable('scrollZoom');
            myMap.controls.add('zoomControl');

            myPlacemark = new ymaps.Placemark([59.938554257894, 30.322479499999993], {
                hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
            }, {
                preset: 'islands#redDotIcon'
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }


    var openContact = document.querySelector('.open-modal-btn');
    var popupContact = document.querySelector('.modal-contact');
    var closeContact = document.querySelector('.modal-contact-close');

    if (popupContact) {
        var formContact = popupContact.querySelector('.contact-form');
        var nameContact = popupContact.querySelector('[name=name]');
        var emailContact = popupContact.querySelector('[name=email]');
        var textContact = popupContact.querySelector('[name=text]');
        var storageName = localStorage.getItem('nameContact');
        var storageEmail = localStorage.getItem('emailContact');

        openContact.addEventListener('click', function (event) {
            event.preventDefault();
            popupContact.classList.add('modal-contact-show');

            if (storageName && !storageEmail) {
                nameContact.value = storageName;
                emailContact.focus();
            } else if (storageName && storageEmail) {
                nameContact.value = storageName;
                emailContact.value = storageEmail;
                textContact.focus();
            } else {
                nameContact.focus();
            }
        });

        formContact.addEventListener('submit', function (event) {
            if (!nameContact.value || !emailContact.value || !textContact.value) {
                event.preventDefault();
                popupContact.classList.add('modal-error');
            } else {
                localStorage.setItem('nameContact', nameContact.value);
                localStorage.setItem('emailContact', emailContact.value);
                console.log(localStorage.getItem('emailContact'));
            }
        });

        closeContact.addEventListener('click', function (event) {
            event.preventDefault();
            popupContact.classList.remove('modal-contact-show');
            popupContact.classList.remove('modal-error');
        });

        window.addEventListener('keydown', function (event) {
            if (event.keyCode === 27) {
                if (popupContact.classList.contains('modal-contact-show')) {
                    popupContact.classList.remove('modal-contact-show');
                    popupContact.classList.remove('modal-error');
                }
            }
        });
    };
})();
 
