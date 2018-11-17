$(document).ready(function() {
    $('#x_Begin_Date, #x_End_Date').on('change textInput input', function () {
        if ( ($("#x_Begin_Date").val() != "") && ($("#x_End_Date").val() != "")) {
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
            var firstDate = new Date($("#x_Begin_Date").val());
            var secondDate = new Date($("#x_End_Date").val());
            var diffDays = Math.round(Math.round((secondDate.getTime() - firstDate.getTime()) / (oneDay)));
            $("#x_Date_Difference").val(diffDays);
        }
    });
});
