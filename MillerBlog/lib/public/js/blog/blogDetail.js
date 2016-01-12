$(function(){
    var articleId = location.hash.substring(1);
    init();
    function init(){
        $.getJSON(
            "/ArticleContent",
            {
                articleId:articleId
            },
            function(data){
                if(!data)
                    return;
                var rows = data.result[0];
                $(document).attr("title","Article:"+rows.articleName);
                $(".articleName").html(rows.articleName);
                $(".time").html("时间:"+rows.date);
                $(".category").html("分类:"+rows.categoryName);

                $(rows.content).appendTo($(".article_content"));
            }

        )
    }
});