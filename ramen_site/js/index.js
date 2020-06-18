// ページトップボタンのJavaScript
$(function(){
    var show =false;
    var top = $('#page-top');
    top.css('bottom','-100px');

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            if(show == false){
                show = true;
                top.stop().animate({'bottom':'50px'},200);
            }
        }
        else{
            if(show){
                show = false;
                top.stop().animate({'bottom':'-100px'},200);
            }
        }
    });

    top.click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});
// ページトップボタンのJavaScriptここまで


// mainImage,.headのScrollReavel
ScrollReveal().reveal('#mainImage',
    {delay:600,duration:3000,opacity:0.1,viewFactor:0.2,reset:false
    });
ScrollReveal().reveal('.head-icon',
    {delay:800,duration:3000,opacity:0,viewFactor:0.2,reset:false
    });
ScrollReveal().reveal('.head',
    {delay:800,duration:6000,opacity:0,viewFactor:0.2,reset:false
    });

// ハンバーガーメニューボタン
$(function(){
    var duration = 300;
    $show = $('#show');
    $showButton = $('#show').find('i');
    $menu = $('#menu');
    $show.on('click', function(){
        $menu.toggleClass('open');
        if($menu.hasClass('open')){
            $menu.stop(true).animate({
                right:'0px'
            },duration);
            $showButton.removeClass('fa fa-bars');
            $showButton.addClass('fa fa-times');
        }
        else{
            $menu.stop(true).animate({
                right:'-180px'
            },duration);
            $showButton.removeClass('fa fa-times');
            $showButton.addClass('fa fa-bars');
        };
    });
});
// ハンバーガーメニューボタンここまで
