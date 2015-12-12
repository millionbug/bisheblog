function init(){
    ajax("GET","src/js/text.json");
}
init();
function onready(){
    window.onload = function(){
        console.log(2)
    }
    ready(function(){
        console.log(1)
    })
}
onready();