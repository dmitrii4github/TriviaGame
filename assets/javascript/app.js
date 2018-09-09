

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('team')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

$(document).ready(function() {

    $("#start_button").on('click', function() { 
    $("#start_button").hide();
    $("#questions").show();
    });

    var timeleft = 20;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);

    $("#done_button").on('click', function() {         
        $("#questions").hide();
        $("#answers").show();
        });
    


});
