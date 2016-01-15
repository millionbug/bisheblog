$(function(){
    init();
    setButton();

    function init(){
        $.getJSON(
            "/QueryMessage",
            function(data){
                if(!data)
                    return;

                var rows = data.result;
                var total = data.total;
                var html = "";
                for(var i = 0;i<total;i++){
                        html += '<div class = "message_person">';
                        html += '<img src = "'+rows[i].image+'">';
                        html += '<p class = "info_name">'+rows[i].userName+'</p>';
                        html += '<p class = "info_time">'+rows[i].date+'</p>';
                        html += '<p class = "info_content">'+rows[i].content+'</p>';
                        html += '</div>';
                }
                $(".message").append(html);
            }
        )
    }
    function setButton(){
        $("#btn").click(function(){
            var name = $("#userName").val();
            var content = $("#messageContent").val();
            if(name == ""){
                alert("客官，名字不能为空哦！");
                return false;
            }else if(content == ""){
                alert("客官，请说点什么吧～");
                return false;
            }

            $.getJSON(
                "/SubmitMessage",
                {
                    "userName": name,
                    "messageContent": content
                },
                function(data){
                    if(data != "1"){
                        return;
                    }
                    //location.reload();
                }
            );
        });
    }
});
