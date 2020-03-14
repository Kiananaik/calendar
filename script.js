$(document).ready(function(){
    var sched = JSON.parse(localStorage.getItem("sched"));
    if(sched === null) {
        var sched =  [{time: "4", toDo: ""},
                        {time: "5", toDo: ""},
                        {time: "6", toDo: ""},
                        {time: "7", toDo: ""},
                        {time: "8", toDo: ""},
                        {time: "9", toDo: ""},
                        {time: "10", toDo: ""},
                        {time: "11", toDo: ""},
                        {time: "12", toDo: ""},
                        {time: "13", toDo: ""},
                        {time: "14", toDo: ""},
                        {time: "15", toDo: ""},
                        {time: "16", toDo: ""},
                        {time: "17", toDo: ""},
                        {time: "18", toDo: ""},
                        {time: "19", toDo: ""},
                        {time: "20", toDo: ""},
                        {time: "21", toDo: ""},
                        {time: "22", toDo: ""},
                        {time: "23", toDo: ""},];
    };
    var schedTimes = ["#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17", "#18", "#19", "#20", "#21", "#22", "#23"];

    $("button").on("click", function(){
        for(i = 0; i < sched.length; i++){
            if(sched[i].time === $(this).prev().attr("id")){
                sched[i].toDo = $(this).prev().val();
            }
        }
        saveNote();
    });

    function saveNote(){
        var storedsched = JSON.stringify(sched);
        localStorage.setItem("sched", storedsched);
        showNotes();
    };

    function showNotes(){
        newSched = localStorage.getItem("sched");
        objectSched = JSON.parse(newSched);

        for(i = 0; i < objectSched.length; i++){
            $(schedTimes[i]).text(objectSched[i].toDo);
        }
    };

    function showCurrentDate(){
        $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        var today = setInterval(function(){
            $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
        }, 1000)
    };


    //check this again!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function showCurrentTime(){
        var currentHour = moment().hour();
        var currentHourCounterGray = currentHour;
        var currentHourCounterGreen = currentHour;

        if(currentHour >= 0 && currentHour <= 8){
            $(".sched").attr("style", "background-color:rgb(110, 219, 110)");
        }
        else if(currentHour >= 9 && currentHour <= 17){
            var currentHourString = "#".concat(currentHour.toString());
            $(currentHourString).attr("style", "background-color:rgb(230, 99, 99)");

            while(currentHourCounterGray > 9){
                currentHourCounterGray--;
                var pastHourString = "#".concat(currentHourCounterGray.toString());
                $(pastHourString).attr("style", "background-color:rgb(163, 163, 163)");
            }

            while(currentHourCounterGreen < 17){
                currentHourCounterGreen++;
                var futureHourString = "#".concat(currentHourCounterGreen.toString());
                $(futureHourString).attr("style", "background-color:rgb(110, 219, 110)");
            }
        }
        else if(currentHour >= 18){
            $(".sched").attr("style", "background-color:rgb(163, 163, 163)");
        }

        var updateHour = setInterval(function(){
            var currentHour = moment().hour();
            var currentHourCounterGray = currentHour;
            var currentHourCounterGreen = currentHour;

            if(currentHour >= 0 && currentHour <= 8){
                $(".sched").attr("style", "background-color:rgb(110, 219, 110)");
            }
            else if(currentHour >= 9 && currentHour <= 17){
                var currentHourString = "#".concat(currentHour.toString());
                $(currentHourString).attr("style", "background-color:rgb(230, 99, 99)");

                while(currentHourCounterGray > 9){
                    currentHourCounterGray--;
                    var pastHourString = "#".concat(currentHourCounterGray.toString());
                    $(pastHourString).attr("style", "background-color:rgb(163, 163, 163)");
                }

                while(currentHourCounterGreen < 17){
                    currentHourCounterGreen++;
                    var futureHourString = "#".concat(currentHourCounterGreen.toString());
                    $(futureHourString).attr("style", "background-color:rgb(110, 219, 110)");
                }
            }
            else if(currentHour >= 18){
                $(".sched").attr("style", "background-color:rgb(163, 163, 163)");
            }
        }, 60000)
    };

    showCurrentDate();
    showCurrentTime();
    showNotes();
});