window.onload = function () {
    $.ajax({
        type: "get",
        url: "get_current_date.php",
        success: function(val)
        {
            document.getElementById("clock").innerHTML = val;
        },
        error: function()
        {
            console.log("ajax error");
        }           
    });
    $(document).ready(function(){
        $("#cvTitle").click(function(){
            $("#cvDownload").slideToggle();
        });
    });
    $(document).ready(function(){
        $("#gradesTitle").click(function(){
            $("#gradesDownload").slideToggle();
        });
    });
    $(document).ready(function(){
        $("#linksTitle").click(function(){
            $("#linksDownload").slideToggle();
        });
    });
    $(document).ready(function(){
        $("#detailesTitle").click(function(){
            $("#detailesText").slideToggle();
        });
    });
};
