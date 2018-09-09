

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('team')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

$(document).ready(function() {

    

    // var newHTML = '<div class="question">' +
    //           '<h2 align="center">Which NBA Team won the most titles in the 90s?</h2>' +
    //           '<input type="checkbox" name="team" value="NewYork" onclick="onlyOne(this)">New York Knicks</input>' +
    //           '<input type="checkbox" name="team" value="Portland" onclick="onlyOne(this)">Portland Trailblazers</input>' +
    //           '</div>'

    $("#start_button").on('click', function() { 
    alert("clicked on button");
    //$("#start_button").replaceWith(newHTML);
    $("#start_button").hide();
    $("#questions").show();
    });




});
