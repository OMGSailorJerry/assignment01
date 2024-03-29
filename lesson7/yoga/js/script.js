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

    let deadline = '2019-08-22';

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

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
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
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };

    let hideModal = () => {
        overlay.style.display = 'none';
        if (more.classList.contains('more-splash')) more.classList.remove('more-splash');
        if (descriptionBtn.classList.contains('more-splash')) descriptionBtn.classList.remove('more-splash');
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
});