var topics = ["monsterhunter", "finalfantasy", "streetfighter"];

function renderTopicButtons() {
    $("#topic-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("topic");
        newButton.attr("data-topic", topics[i])
        newButton.text(topics[i]);
        $("#topic-view").append(newButton);
    }
}

$("#add-topic").on("click", function () {
    event.preventDefault();
    var userInput = $("#topic-input").val();
    topics.push(userInput);
    renderTopicButtons();
    $("#topic-input").val("");
})

function displayTopicInfo() {
    var topic = $(this).attr('data-topic');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=1ZN7AKjpHDCwOhjIuxw1AWcF5lr51PD8&limit=10";
    $("#gifs").empty();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        results = response.data;
        console.log(results);
        for (var i = 0; i < 10; i++) {
            var topicDiv = $("<div>");
            var topicImage = $("<img>");
            topicImage.addClass("gif");
            topicImage.attr('src', results[i].images.fixed_height_still.url);
            topicImage.attr('data-still', results[i].images.fixed_height_still.url);
            topicImage.attr('data-animate', results[i].images.fixed_height.url);
            topicImage.attr('data-state', "still");
            topicDiv.append(topicImage);
            $("#gifs").append(topicDiv);
            $("#gifs").append("<br>");
        }
    })
}

$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "still") {
        $(this).attr('data-state', "animate");
        $(this).attr('src', $(this).attr('data-animate'));
    }
    else {
        $(this).attr('data-state', "still");
        $(this).attr('src', $(this).attr('data-still'));
    }
})


$(document).on("click", ".topic", displayTopicInfo);

renderTopicButtons();