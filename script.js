$(document).ready(function(){


$("#img").html($("#sh").show());

  $('.cc').first().on('click',function(){
    $("#img").append($("#sh").show().addClass('animated fadeInRight'));
    $('#rf').hide();
  });

   $('.cc').last().on('click',function(){
    $("#img").append($("#rf").show().addClass('animated fadeInRight'));
    $('#sh').hide();
  });


   $('.player ul').hover(function(){
   	$(this).toggleClass('animated pulse');
   });

});




