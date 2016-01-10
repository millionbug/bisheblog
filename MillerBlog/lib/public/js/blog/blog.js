$(function(){
    init();
    AddCategory();
    function init(){
        $.getJSON(
            "/Query",
            function (data) {
                if(!data.result)
                    return;
                var rows = data.result;
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
                                html += "<a href = '/blogDetail#"+rows[i].id+"' class = 'article'>"+rows[i].articleName+"</a>";
                                html += "<span class = 'category'></span>"
                                html += "</h5>";
                                $("#"+yearTotal[j]).append(html)
                            }
                        }
                    }
                }


            }
        )
    }

    function AddCategory(){
        $.getJSON(
            "/Category",
            function(data){
                if(!data.result)
                    return;
                var rows = data.result;
                var html  = "<ul>";
                for(var i = 0,len = rows.length;i<len;i++){
                    html += "<li><a href = '/CategoryDetail#"+rows[i].categoryId+"'>"+rows[i].categoryName+"</a></li>";
                }
                html+="</ul>";
                $(".blog_category").append(html);
            }
        )
    }
});
