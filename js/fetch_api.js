// Initialize the DOM elements
const teaserWrapper = document.querySelector('.event__teaser-wrapper');
const gridTriggerBtn = document.querySelector('.view-grid');
const listTriggerBtn = document.querySelector('.view-list');
const textViews = document.querySelector('.festivals__filter--options-views-content');
const jazzNum = document.querySelector('.jazz-event');
const jazzBtn = document.querySelector('.filter__buttons--filter-button-jazz');
const hipHopBtn = document.querySelector('.filter__buttons--filter-button-hiphop');
const indieBtn = document.querySelector('.filter__buttons--filter-button-indie');
const popRockBtn = document.querySelector('.filter__buttons--filter-button-poprock');
const electroBtn = document.querySelector('.filter__buttons--filter-button-electronic');
const eventFilter = document.querySelector('.event__teaser-filter');
const eventFilterList = document.querySelector('.event__list-teaser-filter');
const resBtb = document.querySelector('.res-btns');
const resetBtns = document.querySelectorAll('.flt-btns');




// Select all the Buttons in the Dom to ad some Interactivity



// Lynda .com JavaScript for WebDesigner
// Convert the New Date and make a connecton to the MonthName array

function formatMonth(m) {
    m = parseInt(m, 10);

    if (m < 0) {
        m = 0;
    } else if (m > 11) {
        m = 11
    }


    const monthName = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun',
        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
    ];

    return monthName[m];

}

function isDate(d) {
    return d instanceof Date && !isNaN(d);
}


function dueDate(start) {
    if (isDate(new Date(start))) {
        let s = new Date(start);
        let month = formatMonth(s.getMonth());
        let year = s.getFullYear();
        let day = s.getDate();
        return day + ' ' + month + ' ' + year;
    } else
        return "";
}


function endDate(end) {
    if (isDate(new Date(end))) {
        let e = new Date(end);
        let month = formatMonth(e.getMonth());
        let day = e.getDate();
        let year = e.getFullYear();
        return day + ' ' + month + ' ' + year;
    } else
        return "";
}





// Fetch the JSON Api from Heroku
// Initialize the API
const API_URL = 'https://festivalovers.herokuapp.com/events';

// Fetch the Data from the JSON return
function getAllEvents() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            let gridOutput = '';
            console.log(data);
            data.forEach(function (event, index) {
                if (index <= 8) {
                    let start = dueDate(event.duedate);
                    let end = endDate(event.enddate);
                    let startEndDates = "";
                    if (start.length > 0)
                        startEndDates = start;
                    if (end.length > 0)
                        startEndDates += " - " + end;
                    gridOutput +=
                        ` <a class='show-link' href="detail-festival.html">
                        <div class="event-box-article" style="border-bottom: 4px solid ${event.teaser_color}">
                    <div class="event-teaser-img">
                        <img src="${event.teaser_img_url}" class="event-img">
                        <div class="event-icon-cont" style="background-color:${event.teaser_color}">
                            <img src="${event.icon_path}" onload="SVGInject(this)" class="event-icon">
                        </div>
                    </div>
                    <div class="event-box-article-inner">
                        <p class="event-box-start-end">${event.location} / ${startEndDates} </p>
                        <h3 class="event-article-title">${event.teaser_title}</h3>
                        <p class="event-box-content-text">${event.teaser_desc}</p>
                        <input type="checkbox" name="star-icon" class="star-reminder">
                        <label for="merken" class="event-reminder">Merken</label>
                    </div>
                </div>
                </a>
                 `

                }






            });

            resBtb.addEventListener('click', function () {
                teaserWrapper.innerHTML = gridOutput;
                eventFilter.innerHTML = '';
                eventFilterList.innerHTML = '';
                resetBtns.forEach(function (btn) {
                    btn.classList.add('static-class');
                    if (!btn.classList.contains('static-class')) {
                        console.log('remove class');
                        btn.classList.remove('static-class');

                    }
                });

            });

            let listOutput = '';
            data.forEach(function (listEvent, index) {
                if (index <= 8) {
                    listOutput += `
                    <a class="show-link" href="detail-festival.html">
                <div class="event-list-layout">
                <div class="event-list-layout--teaser-img">
                    <img src="${listEvent.teaser_img_url}" class="event-list-img">
                </div>
                <div class="event-list-layout--teaser-icon" style="background-color:${listEvent.teaser_color}">
                    <img src="${listEvent.icon_path}" onload="SVGInject(this)" class="event-list-icon">
                </div>
                <div class="event-list-layout--teaser-title">
                    <h3 class="event-list-title">${listEvent.teaser_title}</h3>
                </div>
                <div class="event-list-layout--teaser-canton">${listEvent.location}</div>
                <div class="event-list-layout--teaser-date">13. Aug – 15. Aug 2016</div>
                <div class="event-list-layout--teaser-reminder" style="border-right: 4px solid ${listEvent.teaser_color}; border-bottom:4px solid ${listEvent.teaser_color};"">
                    <input type="checkbox" name="star-icon" class="star-reminder">
                    <label for="merken" class="event-reminder">Merken</label>
                </div>
            </div>
            </a>
                `
                }


            });

            teaserWrapper.innerHTML = gridOutput;

            gridTriggerBtn.addEventListener('click', function () {
                teaserWrapper.innerHTML = gridOutput;
                textViews.style.fontFamily = 'Proxima_bold';


            });

            listTriggerBtn.addEventListener('click', isGridLayout);



            function isGridLayout() {
                console.log('listLayout');
                teaserWrapper.innerHTML = listOutput;
                teaserWrapper.classList.add('fix-flex-list');
                textViews.style.fontFamily = 'Proxima_reg';
                eventFilter.innerHTML = '';

                // Filter thorugh the buttons
                jazzBtn.addEventListener('click', function jazzFilter(event) {
                    this.classList.add('jazz__filter--color');
                    checkClasse(jazzBtn, 'static-class');
                    filterGenreList(data, 'jazz');

                });

                hipHopBtn.addEventListener('click', function (event) {
                    this.classList.add('hiphop__filter--color');
                    checkClasse(hipHopBtn, 'static-class');
                    filterGenreList(data, 'hiphop');


                }, false);

                indieBtn.addEventListener('click', function () {
                    this.classList.add('indie__filter--color');
                    checkClasse(indieBtn, 'static-class');
                    filterGenreList(data, 'indie');

                }, false);

                popRockBtn.addEventListener('click', function () {
                    this.classList.add('poprock__filter--color');
                    checkClasse(indieBtn, 'static-class');
                    filterGenreList(data, 'poprock');

                }, false);


                electroBtn.addEventListener('click', function () {
                    this.classList.add('electro__filter--color');
                    checkClasse(electroBtn, 'static-class');
                    filterGenreList(data, 'electro');

                }, false);
            }


            function checkClasse(element, cssClass) {
                var cssClass;
                if (element.classList.contains(cssClass)) {
                    element.classList.remove(cssClass);
                }
            }

            // Filter thorugh the buttons
            jazzBtn.addEventListener('click', function jazzFilter(event) {
                this.classList.add('jazz__filter--color');
                checkClasse(jazzBtn, 'static-class');
                filterGenre(data, 'jazz');

            });

            hipHopBtn.addEventListener('click', function (event) {
                this.classList.add('hiphop__filter--color');
                checkClasse(hipHopBtn, 'static-class');
                filterGenre(data, 'hiphop');


            }, false);

            indieBtn.addEventListener('click', function () {
                this.classList.add('indie__filter--color');
                checkClasse(indieBtn, 'static-class');
                filterGenre(data, 'indie');

            }, false);

            popRockBtn.addEventListener('click', function () {
                this.classList.add('poprock__filter--color');
                checkClasse(indieBtn, 'static-class');
                filterGenre(data, 'poprock');

            }, false);


            electroBtn.addEventListener('click', function () {
                this.classList.add('electro__filter--color');
                checkClasse(electroBtn, 'static-class');
                filterGenre(data, 'electro');

            }, false);

            // Function that returns the filteres Objects



        });





};


getAllEvents();