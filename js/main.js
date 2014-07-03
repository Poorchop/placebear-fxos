$(document).ready(function() {
    var dimension = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $("#imageArea").append("<img id='image' src=" + "http://placebear.com/" + dimension(470, 480) + "/" +
    dimension(600, 610) + ">");

    $(document).on("click", ".ui-btn-right", function() {
        $("#image").remove();
        $("#imageArea").append("<img id='image' src=" + "http://placebear.com/" + dimension(470, 480) + "/" +
        dimension(600, 610) + ">");
    });
});
