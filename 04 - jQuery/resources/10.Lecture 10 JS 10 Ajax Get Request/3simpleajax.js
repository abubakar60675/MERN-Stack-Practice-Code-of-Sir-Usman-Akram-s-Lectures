console.log("Code Starting");
$(function() {
    console.log("Doing Bindings");
    $("#load").click(sendAjax);
});

function sendAjax() {
    console.log("sending ajax request");
    // send request here
    $.get("students.txt", handleResponse);
    console.log("request sent");
}

function handleResponse(response) {
    console.log("response received");
    //console.log(response);
    $("#result").empty();
    $("#result").append(response);
}
console.log("Code Finished");