$(document).ready(function(){
    let gnb = $('#h_bottom .gnb');
    gnb.hover(function(){
        $('#h_bottom').stop().animate({'height':'320px'},300);
        $('.sub').stop().fadeIn();
    },function(){
        $('#h_bottom').stop().animate({'height':'46px'},300);
        $('.sub').stop().fadeOut();
    });

    // 메인슬라이드 구현
    let mslide = $('.m_slide ul');
    let s_img = $('.m_slide img').width(); // 이미지 크기를 변수에 저장한다.

    // 마지막 슬라이드를 맨 처음 슬라이드 앞으로 옮긴다.
    $('.m_slide ul > li:last-child').insertBefore('.m_slide ul > li:first-child');
    mslide.css('margin-left',-s_img)
    // 함수 - 왼쪽방향으로 움직이는 슬라이드
    function move_left(){
        mslide.animate({'margin-left':-(s_img*2)},500,function(){
            $('.m_slide ul > li:first-child').insertAfter('.m_slide ul > li:last-child');
            mslide.css('margin-left',-s_img);
        });
    }
    // 함수 - 오른쪽방향으로 움직이는 슬라이드
    function move_right(){
        mslide.animate({'margin-left':'0px'},500,function(){
              $('.m_slide ul > li:last-child').insertBefore('.m_slide ul > li:first-child');
              mslide.css('margin-left',-s_img);//원래 위치로 오게
        });
    }
    let Timer = setInterval(move_left, 3000);

    l_btn = $('.m_slide i.fa-angle-left');
    r_btn = $('.m_slide i.fa-angle-right');

    stat_btn = $('.m_slide .start_btn');
    stp_btn = $('.m_slide .stop_btn');
    stat_btn.click(function(){
        Timer = setInterval(move_left, 3000);
        console.log('asd');
    });
    stp_btn.click(function(){
        clearInterval(Timer);
    });

    l_btn.click(function(){
        move_right();
    });
    r_btn.click(function(){
        move_left();
    });

    $('.m_slide i.fas').hover(function(){
        clearInterval(Timer);
    },function(){
        Timer = setInterval(move_left, 3000);
    });

    $(window).resize(function(){
        s_img = $('.m_slide img').width();
    })
    // 1. 내비게이션 마우스 오버시 슬라이드 이미지와 겹치게 하기
    // 2. 가로폭을 줄이면 이미지 가로크기 다시 새로 맞추기
    // 3. '정지', '플레이' 아이콘 추가하여 클릭시 슬라이드 멈추기
});