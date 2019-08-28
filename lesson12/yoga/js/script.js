window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tabs = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (index) => {
        if (tabContent[index].classList.contains('hide')) {
            tabContent[index].classList.remove('hide');
            tabContent[index].classList.add('show');
        }
    };

    infoHeader.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let [i, tab] of tabs.entries()) {
                if (target === tab) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let deadline = '2019-08-23';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    let setClock = (id, endtime) => {
        
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        
        let updateClock = () => {
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        };
        let timeInterval = setInterval(updateClock, 1000);
        updateClock();
    };

    setClock('timer', deadline);

    // Modal window
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        info = document.querySelector('.info'),
        descriptionBtn;

    let showModal = () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };

    let hideModal = () => {
        overlay.style.display = 'none';
        if (more.classList.contains('more-splash')) more.classList.remove('more-splash');
        if (descriptionBtn && descriptionBtn.classList.contains('more-splash')) descriptionBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    };

    info.addEventListener('click', function(e){
        if (e.target.classList.contains('description-btn')) {
            descriptionBtn = e.target;
            showModal.call(descriptionBtn);
        }
    });

    more.addEventListener('click', showModal);
    close.addEventListener('click', hideModal);

    // Form

    let message = {
        loading: 'Loading...',
        success: 'Thank you! We will connect with you soon.',
        failure: 'Something goes wrong'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input');

    statusMessage.classList.add('status');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        form.appendChild(statusMessage);

        let formData = new FormData(form);
        let formObg = {};

        formData.forEach((value, key) => {
            formObg[key] = value;
        });

        let json = JSON.stringify(formObg);

        send('POST', json)
            .then(res => {
                statusMessage.innerHTML = message.success;
                
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }).catch(err => {
                statusMessage.innerHTML = message.failure;
            });
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        contactForm.appendChild(statusMessage);

        let formData = new FormData(contactForm);
        let formObg = {};

        formData.forEach((value, key) => {
            formObg[key] = value;
        });

        let json = JSON.stringify(formObg);

        statusMessage.innerHTML = message.loading;

        send('POST', json)
            .then(res => {
                statusMessage.innerHTML = message.success;
                
                for (let i = 0; i < contactInput.length; i++) {
                    contactInput[i].value = '';
                }
            }).catch(err => {
                statusMessage.innerHTML = message.failure;
            });
    });

    let send = (method, data) => {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            
            request.open(method, 'server.php');

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        resolve(request.response);
                    } else {
                        reject(Error(request.status));
                    }
                }
            };

            request.onerror = function() {
                reject(Error("Network Error"));
            };

            request.send(data);
        });
    };

    // Slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        dots.forEach(item => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        slideIndex +=n;
        showSlides(slideIndex);
    }
    
    function currentSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    })
    next.addEventListener('click', function(){
        plusSlides(1);
    })

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
});