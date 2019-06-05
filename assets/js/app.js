var topics = ["monster hunter", "final fantasy", "street fighter"];

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

$("#add-topic").on("click", function() {
    event.preventDefault();
    var userInput = $("#topic-input").val();
    topics.push(userInput);
    renderTopicButtons();
    $("#topic-input").val("");
})

$(document).on("click", ".topic", displayTopicInfo);

renderTopicButtons();