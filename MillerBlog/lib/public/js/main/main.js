$(function(){
    init();
    function init(){
        $.get(
            "/Query",
            {
                name:"Miller",
                id:"112"
            },
            function(data){
                console.log(data)
                $("#name").html(JSON.stringify(data));
            }
        )
    }
});
