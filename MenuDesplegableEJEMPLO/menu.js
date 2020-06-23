$(".submenu").click(function(){
    $(this).children("ul").slidetoggle();
})
$("ul").click(function(p){
   p.stopPropagation();
})
