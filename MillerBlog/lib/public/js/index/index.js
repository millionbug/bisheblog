$(function(){
   $(".move1").bind("mouseover",function(){
      $(this).css({
         backgroundColor:"rgba(255,255,255,0.45)",
      });
      $(".move1 a").css({
         color:"#000"
      })
   }).bind("mouseout",function(){
      $(this).css({
         backgroundColor:"rgba(154,154,154,0.5)",
      });
      $(".move1 a").css({
         color:"#fff"
      })
   });
   $(".move2").bind("mouseover",function(){
      $(this).css({
         backgroundColor:"rgba(255,255,255,0.45)",
      });
      $(".move2 a").css({
         color:"#000"
      })
   }).bind("mouseout",function(){
      $(this).css({
         backgroundColor:"rgba(154,154,154,0.5)",
      });
      $(".move2 a").css({
         color:"#fff"
      })
   });
});
