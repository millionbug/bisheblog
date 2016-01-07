$(function(){
    init();

    function init(){
        $.getJSON(
            "js/main/txt.json",
            function (data) {
                var rows = data.result;
                var yearTotal = setYear();
                setMain();

                function setYear() {
                    var years = {};
                    for (var i = 0; i < data.total; i++) {
                        years[rows[i].year] = rows[i].year;
                    }
                    var yearTotal = Object.keys(years).reverse();
                    var html = "";
                    for (var j = 0, len = yearTotal.length; j < len; j++) {
                        html += "<div class = 'year' id = '"+yearTotal[j]+"'>" + yearTotal[j];
                        html += "<hr>";
                        html += "</div>";

                    }
                    $(".main").append(html);
                    return yearTotal;
                }
                function setMain(){
                    for(var i = 0,len1 = rows.length;i<len1;i++){
                        for(var j= 0,len2 = yearTotal.length;j<len2;j++){
                            if(rows[i].year == yearTotal[j]){
                                var html = "<h5>";
                                html += "<p class ='rect'></p>";
                                html += "<a href = '/blogDetail#"+rows[i].id+"' class = 'article'>"+rows[i].name+"</a>";
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
