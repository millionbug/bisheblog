$(function(){
    init();
    initData();
    function init(){
        $(".nav li").each(function(){
            $(this).click(function(){
                $(".nav li").each(function(){
                    $(this).removeClass();
                    $("#"+$(this).attr("title")).hide();
                })
                $(this).addClass("active");
                $("#"+$(this).attr("title")).show();
            });
        })
    }
   $("#add").click(function(){
       $(".add").show();
   })
    $(".clo").click(function(){
        $(".add").hide();
    });
    $("#addKe").click(function(){
       $(".add").show();
   })
    $("#addCl").click(function(){
       $(".add").show();
   })
    $("#btn").click(function(){
        var date = new Date();
        var year = date.getFullYear();
        var time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        var name = $("#name").val();
        var address = $("#address").val();
        var categroy = $("#category option:selected").attr("id");
        categroy = parseInt(categroy);

        $.getJSON(
            "/appendArticle",
            {
                "date":time,
                "year":year,
                "articleName":name,
                "address":address,
                "categoryId":categroy
            },
            function(data){
                if(data == "1"){
                    alert("添加成功！");
                    location.reload();
                }
            }
        )
    });
    $("#btnKe").click(function(){
        var name = $("#cateName").val();

        $.getJSON(
            "/addCategory",
            {
                "name":name,
            },
            function(data){
                if(data == "1"){
                    alert("添加成功！");
                    location.reload();
                }
            }
        )
    });


    function initData(){
        $.getJSON(
            "/Category",
            function(data) {
                var rows = data.result;
                var total = data.total;
                var html = "";
                for (var i = 0; i < total; i++) {
                    html += "<option id='" + rows[i].categoryId + "'>" + rows[i].categoryName + "</option>"
                }
                $("#category").append(html);


                var html2 = "";
                for (var i = 0; i < total; i++) {
                    html2 += "<tr>"
                    html2 += "<td>" + rows[i].categoryName + "</td>"
                    html2 += "<td class ='" + rows[i].categoryId + "'><button onclick='del1(this)'>删除</button></td>"
                    html2 += "</tr>"
                }
                $(".tBKe").append(html2);
            }
        )

        $.get("/Query",function(data){
            var row = data.result;
            var html = "";
            for(var i = 0;i<data.total;i++){
                html += "<tr>"
                html += "<td>"+row[i].articleName+"</td>"
                html += "<td>"+row[i].date+"</td>"
                html += "<td>"+row[i].address+"</td>"
                html += "<td>"+row[i].categoryName+"</td>"
                html += "<td class ='"+row[i].articleId+"'><button onclick='del(this)'>删除</button></td>"
                html += "<tr>"
            }
            $(".tB").append(html);

        })

        $.get("/QueryImage",function(data){
            var row = data.result;
            var html = "";
            for(var i = 0;i<data.total;i++){
                html += "<tr>"
                html += "<td>"+row[i].path+"</td>"
                html += "<td class ='"+row[i].imageId+"'><button onclick='del2(this)'>删除</button></td>"
                html += "<tr>"
            }
            $(".tBCl").append(html);
        })
    }

});
function del(obj){
    var id = obj.parentNode.getAttribute("class")|0;
    ajax("GET","/DelArticle?id="+id,function(data){
        alert("删除成功！");
        location.reload();
    })
}
function del1(obj){
    var id = obj.parentNode.getAttribute("class")|0;
    ajax("GET","/DelCategory?id="+id,function(data){
        alert("删除成功！");
        location.reload();
    })
}
function del2(obj){
    var id = obj.parentNode.getAttribute("class")|0;
    ajax("GET","/DelImage?id="+id,function(data){
            alert("删除成功！");
            location.reload();
    })
}
function ajax(type,url,func){
    var httpRequest = window.XMLHttpRequest?
        new XMLHttpRequest:window.ActiveXObject("Msxm12.XMLHTTP")?
        new ActiveXObject("Msxm12.XMLHTTP"):new ActiveXObject("Microsoft.XMLHTTP");

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
           func();
        }
    }
    httpRequest.open(type,url,true);
    httpRequest.send();
}