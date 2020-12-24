$(document).ready(function(){

  var count = 0;

  // Toggle Click
  $("#menu").click(function(){
    if(count==0)
    {
      $("#menu div:nth-child(1)").css("transform","matrix3d(-.71,.71,0,0,-.71,-.71,0,0,0,0,1,0,0,16,0,1)").css("width","53px");
      $("#menu div:nth-child(3)").css("transform","matrix3d(-.71,-.71,0,0,.71,-.71,0,0,0,0,1,0,0,-16,0,1)").css("width","53px");
      $("#menu div:nth-child(2)").css("opacity","0");
      $("#nav a").css("transform","skew(10deg) translateX(100px)");
      $("html, body").css("background","rgb(60,60,60)");
      count = 1;
    }
    else if(count==1)
    {
      $("#menu div:nth-child(1)").css("transform","matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)").css("width","47px");
      $("#menu div:nth-child(3)").css("transform","matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)").css("width","47px");
      $("#menu div:nth-child(2)").css("opacity","1");
      $("#nav a").css("transform","skew(10deg) translateX(350px)");
      $("html, body").css("background","rgb(245,245,245)");
      count = 0;
    }
    return count;
  });

  // Nav Hover
  $("#nav a").hover(function(){
      $(this).css("transform","skew(10deg) translateX(75px)");
    }, function(){
      $(this).css("transform","skew(10deg) translateX(100px)");
  });

});