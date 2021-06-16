$(document).ready(function(){
    
    $(".banner .slider").slick({
        arrows : false,
        autoplay : true,
        autoplaySpeed : 1500,
        dots : true,
        dotsClass : "dots"
    });
    $(".gnb li").on("click",function(){
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })

    $(".date li").on("click",function(){
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })
    $(".ranking li").on("click",function(){
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })

})