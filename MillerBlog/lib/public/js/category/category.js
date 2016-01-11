$(function(){

    init();
    function init(){
        var cateId = location.hash.substring(1);
        $.getJSON(
            "/QueryCategory",
            {
                categoryId:cateId
            },
            function (data) {
                if(!data.result)
                    return;
                var rows = data.result;
                $(".Cate_cate").html(rows[0].categoryName);
                $(document).attr("title","Category:"+rows[0].categoryName);
                console.log(rows)
                var yearTotal = setYear();
                setMain();

                function setYear() {
                    var years = {};
                    for (var i = 0; i < data.total; i++) {
                        years[rows[i].year] = rows[i].year;
                    }
                    var yearTotal = Object.keys(years).reverse();
                    var html = "<div class='yearContent'>";
                    for (var j = 0, len = yearTotal.length; j < len; j++) {
                        html += "<div class = 'year' id = '"+yearTotal[j]+"'>" + yearTotal[j];
                        html += "<hr>";
                        html += "</div>";

                    }
                    html+="</div>"
                    $(".main").append(html);
                    return yearTotal;
                }
                function setMain(){
                    for(var i = 0,len1 = rows.length;i<len1;i++){
                        for(var j= 0,len2 = yearTotal.length;j<len2;j++){
                            if(rows[i].year == yearTotal[j]){
                                var html = "<h5>";
                                html += "<p class ='rect'></p>";
                                html += "<span class = 'articleTime'>"+rows[i].date+"</span>";
                                html += "<span class = 'articleHao'>»</span>"
                                html += "<a href = '/blogDetail#"+rows[i].articleId+"' class = 'article'>"+rows[i].articleName+"</a>";
                                html += "<span class = 'category'>标签:"+rows[i].categoryName+"</span>"
                                html += "<span class = 'category'>8条评论</span>"
                                html += "</h5>";
                                $("#"+yearTotal[j]).append(html)
                            }
                        }
                    }
                }


            }
        )
    }

});
