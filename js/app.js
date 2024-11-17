$('#toytalez .design_on').click(function(){
    $('#toytalez .design').css('display','block');
})
$('#toytalez .design_off').click(function(){
    $('#toytalez .design').css('display','none');
})
$('#cpgn .design_on').click(function(){
    $('#cpgn .design').css('display','block');
})
$('#cpgn .design_off').click(function(){
    $('#cpgn .design').css('display','none');
})
$('#jewel .design_on').click(function(){
    $('#jewel .design').css('display','block');
})
$('#jewel .design_off').click(function(){
    $('#jewel .design').css('display','none');
})
$('#esec .design_on').click(function(){
    $('#esec .design').css('display','block');
})
$('#esec .design_off').click(function(){
    $('#esec .design').css('display','none');
})
let vs01Slide = $('.work > .wrap').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth:true,
    arrows:false,
});
let list = $('#jewel > .design .list').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth:true,
    arrows:false,
});
let onOff = false;
$('#toytalez .aim_on').click(function(){
    if(onOff == false){
        $('#toytalez .aim_on > p').css('display','block');
        $('#toytalez .aim_on img').css('transform','rotate(-180deg)')
        onOff = true;
    }else{
        $('#toytalez .aim_on > p').css('display','none');
        $('#toytalez .aim_on img').css('transform','rotate(180deg)');
        onOff = false;
    }
}
)
$('#cpgn .aim_on').click(function(){
    if(onOff == false){
        $('#cpgn .aim_on > p').css('display','block');
        $('#cpgn .aim_on img').css('transform','rotate(-180deg)');
        onOff = true;
    }else{
        $('#cpgn .aim_on > p').css('display','none');
        $('#cpgn .aim_on img').css('transform','rotate(180deg)');
        onOff = false;
    }
}
)
$('#jewel .aim_on').click(function(){
    if(onOff == false){
        $('#jewel .aim_on > p').css('display','block');
        $('#jewel .aim_on img').css('transform','rotate(-180deg)');
        onOff = true;
    }else{
        $('#jewel .aim_on > p').css('display','none');
        $('#jewel .aim_on img').css('transform','rotate(180deg)');
        onOff = false;
    }
}
)
$('#esec .aim_on').click(function(){
    if(onOff == false){
        $('#esec .aim_on > p').css('display','block');
        $('#esec .aim_on img').css('transform','rotate(-180deg)');
        onOff = true;
    }else{
        $('#esec .aim_on > p').css('display','none');
        $('#esec .aim_on img').css('transform','rotate(180deg)');
        onOff = false;
    }
}
)
// window.addEventListener("wheel", function (e) {
//     e.preventDefault();
//   }, { passive: false });

//   var $html = $("html");
//   var page = 1;
//   var lastPage = $("section").length;

//   var timeScrollAnimation = 50;
//   $html.animate({ scrollTop: 0 }, 10);

//   $(window).on("wheel", function (e) {
//     if ($html.is(":animated")) return;

//     if (e.originalEvent.deltaY > 0) { 
//       if (page == lastPage) return;
//       page++;
//     } else if (e.originalEvent.deltaY < 0) { 
//       if (page == 1) return; 
//       page--;
//     }

//     var posTop = (page - 1) * ($(window).height());
//     $html.animate({ scrollTop: posTop }, timeScrollAnimation);
//   });

$(window).scroll(function(){
    let current_scroll = $(this).scrollTop();
    console.log(current_scroll);
    if(current_scroll > 2700){
        $('aside').stop().animate({left:'0'}, 500, 'swing');
    }
    else{
        $('aside').stop().animate({left:'-130px'}, 500, 'swing');
    }
})