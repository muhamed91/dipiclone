function filterGenre(array, cat) {
    teaserWrapper.innerHTML = '';
    var cat;
    console.log(cat);
    var output = '';
    array.filter(function (arr, index) {
        if (arr.genre === cat) {
            var start = dueDate(arr.duedate);
            var end = endDate(arr.enddate);
            var startEndDates = "";
            if (start.length > 0)
                startEndDates = start;
            if (end.length > 0)
                startEndDates += " - " + end;
            output =
                ` <div class="event-box-article" style="border-bottom: 4px solid ${arr.teaser_color}">
        <div class="event-teaser-img">
            <img src="${arr.teaser_img_url}" class="event-img">
            <div class="event-icon-cont" style="background-color:${arr.teaser_color}">
                <img src="${arr.icon_path}" onload="SVGInject(this)" class="event-icon">
            </div>
        </div>
        <div class="event-box-article-inner">
            <p class="event-box-start-end">${arr.location} / ${startEndDates} </p>
            <h3 class="event-article-title">${arr.teaser_title}</h3>
            <p class="event-box-content-text">${arr.teaser_desc}</p>
            <input type="checkbox" name="star-icon" class="star-reminder">
            <label for="merken" class="event-reminder">Merken</label>
        </div>
    </div>
     `

            eventFilter.innerHTML += output;


        }

        return true;



    })
};




function filterGenreList(array, cat) {
    teaserWrapper.innerHTML = '';
    eventFilter.innerHTML = '';
    var cat;
    listTriggerBtn.id = 'list-Layout';
    console.log(cat);
    var listOutput = '';
    array.filter(function (arr, index) {
        if (arr.genre === cat) {
            var start = dueDate(arr.duedate);
            var end = endDate(arr.enddate);
            var startEndDates = "";
            if (start.length > 0)
                startEndDates = start;
            if (end.length > 0)
                startEndDates += " - " + end;
            listOutput = `
                <div class="event-list-layout">
                <div class="event-list-layout--teaser-img">
                    <img src="${arr.teaser_img_url}" class="event-list-img">
                </div>
                <div class="event-list-layout--teaser-icon" style="background-color:${arr.teaser_color}">
                    <img src="${arr.icon_path}" onload="SVGInject(this)" class="event-list-icon">
                </div>
                <div class="event-list-layout--teaser-title">
                    <h3 class="event-list-title">${arr.teaser_title}</h3>
                </div>
                <div class="event-list-layout--teaser-canton">${arr.location}</div>
                <div class="event-list-layout--teaser-date">${startEndDates}</div>
                <div class="event-list-layout--teaser-reminder" style="border-right: 4px solid ${arr.teaser_color}"">
                    <input type="checkbox" name="star-icon" class="star-reminder">
                    <label for="merken" class="event-reminder">Merken</label>
                </div>
                </div>
                `

            eventFilterList.innerHTML += listOutput;
            eventFilterList.classList.add('fix-flex-list');


        }

        return true;



    })
};