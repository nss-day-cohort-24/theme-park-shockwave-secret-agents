$('#myOptions').change(function () {
    var val = $("#myOptions option:selected").text();
    alert(val);
});