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