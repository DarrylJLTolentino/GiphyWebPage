var topics = ["monster hunter", "final fantasy", "street fighter"];

function renderTopicButtons() {
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("topic");
        newButton.attr("data-topic", topics[i])
        newButton.text(topics[i]);
        $("#topic-view").append(newButton);
    }
}

renderTopicButtons();