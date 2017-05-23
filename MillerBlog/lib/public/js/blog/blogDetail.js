$(function(){
    var articleId = location.hash.substring(1);
    initComment();
    setButton();
    function initComment(){
        $.getJSON(
            "/QueryComment",
            {
              articleId:articleId
            },
            function(data){
                if(!data)
                    return;

                var rows = data.result;
                var total = data.total;
                if(!total)
                    total = 0;
                $(".comment_mysql").html(total+"条评论");
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
                "/SubmitComment",
                {
                    "userName": name,
                    "messageContent": content,
                    "articleId":articleId
                },
                function(data){
                    if(data != "1"){
                        return;
                    }
                    location.reload();
                }
            );
        });
    }
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#back-to-top").fadeIn(1500);
            }
            else
            {
                $("#back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
        $("#scroll_comment").click(function(){
            var top = document.getElementById("Message").offsetTop;
           $('body,html').animate({scrollTop:top},1000);
            return false;
        });
    });
});
