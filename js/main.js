$(document).ready(function(){
    $(".navbar .bar-icon").on('click', function(){
        $(this).toggleClass('yes')
        if($('.bar-icon').hasClass('yes')){
            $('.bar-1').animate({
                'rotate':'45deg',
                'width':'30px'
            })
            $('.bar-3').animate({
                'rotate':'-45deg',
                'width':'30px'
            })
            $('.bar-2').animate({
                'opacity':'0'
            })
        }else{
            $('.bar-1').animate({
                'rotate':'0deg',
                'width':'20px'
            })
            $('.bar-3').animate({
                'rotate':'0deg',
                'width':'20px'
            })
            $('.bar-2').animate({
                'opacity':'1'
            })
        }
    })
// ############################################################
        
    var nn = $('.home .header')
$(window).on('scroll',function(){
    if($(window).scrollTop() > 200){
        nn.css({'backgroundColor':'#212741'})
        $('.logo').css({'height':'60px'})
        nn.addClass("fixed-top")
        nn.removeClass('position-absolute')
    }else{
        nn.addClass('position-absolute')
        nn.css({'backgroundColor':'transparent'})
        $('.logo').css({'height':'120px'})
    }
})
// ##################################################################
    var offsetNav = $('.header nav').offset().left
    var offsetInfo = $('.info-img-1,.info-img-2,.info-img-3')
    offsetInfo.css({
        'margin': offsetNav
    })
    $(window).on('resize',function(){
        var offsetNav = $('.header nav').offset().left
        var offsetInfo = $('.info-img-1,.info-img-2,.info-img-3')
        offsetInfo.css({
            'margin': offsetNav
        })
    })
// #####################################################################
    var h11 = $('.carousel-item.active h1')
    var p1 = $('.carousel-item.active p')
    var a1 = $('.carousel-item.active a')
    h11.css({
        'transform': 'translateX(0px)'
    })
    p1.css({
        'transform': 'translateX(0px)'
    })
    a1.animate({
        'margin-bottom': '-15px'
    },1000)
// #####################################################################
    
    $('#slide').on('slid.bs.carousel',function(e){
        var currnetSlide = $(e.relatedTarget)
        var nextSlide =$ (e.relatedTarget).siblings()
        if(currnetSlide.hasClass('active')){
            var h12 = currnetSlide.find('h1')
            var p2 = currnetSlide.find('p')
            var a2 = currnetSlide.find('a')
            h12.css({
                'transform': 'translateX(0px)'
            })
            p2.css({
                'transform': 'translateX(0px)'
            })
            a2.animate({
                'margin-bottom': '-15px'
            },1000)
            var h1 = nextSlide.find('h1')
            var p = nextSlide.find('p')
            var a = nextSlide.find('a')
            h1.css({
                'transform': 'translateX(-2000px)'
            })
            p.css({
                'transform': 'translateX(2000px)'
            })
            a.animate({
                'margin-bottom': '-1000px'
            },1000)
            
        }
    })
 // #####################################################################
    var allBtn = $('.about .options .btn')
    allBtn.on("click",function(){
        $(this).addClass("show-it")
        $(this).siblings().removeClass("show-it")
        var dataTable = $(this).data("table")
        $(dataTable).siblings('table').animate({'margin-left':'30px','opacity':"0"},500).hide()
        $(dataTable).animate({'margin-left':'0','opacity':"1"},500).show()
    })
// ###########################################################################

        var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'slide',
        allowTouchMove: true,
        });
        $('.swiper-pagination-bullet').on('click', function() {
        var index = $(this).index();
        swiper.slideTo(index);
        });
        // ##############################################################
        var allBtn = $('.investment .btn')
        allBtn.on("click",function(){
            $(this).addClass("show-it")
            $(this).parent().siblings().children().removeClass("show-it")
            var dataTable = $(this).data("investment")
            $(dataTable).siblings().animate({'margin-left':'70px','opacity':"0"},500).hide()
            $(dataTable).animate({'margin-left':'0px','opacity':"1"},500).show()
        })
        // #################################################################
        $('.btn-toggle').on('click',function(){
            $(this).addClass("active-green")
            $(this).siblings().slideDown()
            $(this).parent().siblings().children('.btn-toggle').removeClass('active-green')
            $(this).parent().siblings().children('.btn-toggle').siblings().slideUp()
            // ####################################################################
        })
        $(window).on('scroll',function(){
            if($(window).scrollTop()> $('#home').offset().top - 1){
                $(".my-list a").removeClass('active-1')
                $('.my-list a[href="#home"]').addClass("active-1")
            }
            if($(window).scrollTop()> $('#servicess').offset().top - 1){
                $(".my-list a").removeClass('active-1')
                $('.my-list a[href="#servicess"]').addClass("active-1")
            }
            if($(window).scrollTop()> $('#about').offset().top - 1){
                $(".my-list a").removeClass('active-1')
                $('.my-list a[href="#about"]').addClass("active-1")
            }
            if($(window).scrollTop()> $('#testimonials').offset().top - 1){
                $(".my-list a").removeClass('active-1')
                $('.my-list a[href="#testimonials"]').addClass("active-1")
            }
            
        })
        // ##############################################################
});