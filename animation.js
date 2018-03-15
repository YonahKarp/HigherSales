$(document).ready(function(){
    
    var selectButtons = $('.select');
    var slideContent = $('.slideContent');



    //slideshow
    var blurInterval = setInterval(runBlurAnimation, 8000);
      var index = 1;
      var flag = true;
      var blur1 = $("#blur1");
      var blur2 = $("#blur2");

      function runBlurAnimation(){
        index = (index % 5) + 1 ; // 1-4

        selectButtons.removeClass('active');
        $(selectButtons[(index-1)]).addClass("active");
        slideContent.removeClass('active');
        $(slideContent[(index-1)]).addClass("active");


        if(flag){
            blur2.css("opacity", 1);
            blur2.css({"background": "url(./img/slide"+index+".jpg) center center no-repeat", "background-size" : "cover", "position":"absolute"});
        }else{
            blur2.css("opacity", 0);
            blur1.css({"background": "url(./img/slide"+index+".jpg) center center no-repeat", "background-size" : "cover", "position":"absolute"});
        }
        flag = !flag;
      } 

    selectButtons.click(function(){
        index = $(this).index();
        clearInterval(blurInterval);
        runBlurAnimation();
        blurInterval = setInterval(runBlurAnimation, 8000);
    });

    //collapsed links
    var menu = $('.menu');
    var links = $('.links ul');
    var shortcuts = $('a.unStyle');

    menu.click(function(){
        if($(this).hasClass('open')){
            menu.removeClass('open');
            links.css({'right': '-550px'});
        }else{
            menu.addClass('open');
            links.css({'right': '0'});
        }
    });

    shortcuts.click(function(e){
        e.preventDefault();

        menu.removeClass('open');
        links.css({'right': '-550px'});

        $('html, body').animate({
            scrollTop: $(e.currentTarget.hash).offset().top
        });
        
    })

    $(window).on("load", function() {
        $("#clients").lightSlider({
            item: 3,
            autoWidth: true,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 60,
     
            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'ease-in-out', //'for jquery animation',////
     
            speed: 1200, //ms'
            auto: true,
            loop: true,
            slideEndAnimation: false,
            pause: 3000,
     
            pager: true,
            currentPagerPosition: 'middle',
     
            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,
     
            responsive : [
                
            ]
        }); 
    });

    //contactUS button
    $("#contactUs .rplButton").click(function(e){
    
        var _this = $(this)
        
        var x = (e.pageX - _this.offset().left)  -15;
        var y = (e.pageY - _this.offset().top)   -15;
        
            $(this).next().css({
            backgroundColor: "rgba(63, 175, 239, 0.8)", 
            left: x, 
            top: y, 
            height: "30px", 
            width:"30px"});
        $(this).next().animate({
            backgroundColor: "rgba(63, 175, 239,0.15)",  
            height: "+=400", 
            width:"+=400",
            top: "-=200", 
            left: "-=200"
            },
            {
            duration: 400,
            complete: function(){
                $(this).css({
                backgroundColor: "rgb(32,178,0)", 
                height: "0px", 
                width:"0px"});
                
                
                //document.forms[0].submit();
                //message sent!
            }
            })
        });   
})