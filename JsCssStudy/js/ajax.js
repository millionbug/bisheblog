function ajax(type,url){
    var httpRequest = null;
    if(window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxm12.XMLHTTP");
        } catch (e1) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e2) {
                alert("浏览器问题")
            }
        }
    }
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            console.log(httpRequest.responseText);
        }
    }
    httpRequest.open(type,url,true);
    httpRequest.send();
}