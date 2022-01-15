console.log('動け');
const loadAnime = $('#load-animation');


// ローディングアニメーション
$(window).on('load',function(){
    loadAnime.delay(3500).fadeOut(1000);
});
// 3秒待つ　→　1秒かけて消える

function stopload(){
    loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);
// 10秒待ってもローディングアニメーションが消えなかった場合に強制的に消去する


// スムーズスクロール
$('#js-nav a').on('click', function () {
    // クリックされた要素のhrefの中身を取得
    let hrefElement = $(this).attr('href');
    // 高さを取得
    let headerHeight = $('#header').outerHeight(true);
    // #headerの高さの上の値を取得
    let position = $(hrefElement).offset().top - headerHeight ;
    $('body,html').animate({
        scrollTop: position
    }, 500);
    return false;
});

// animate()メソッド
//  $(function() {
//      $('動かす要素名').animate({
//          CSSプロパティ: プロパティ値
//      },第二引数)
//  });


// スライドショー
$('.slideShow').slick({
    autoplaySpeed: 2500, // 自動再生の速度
    speed: 1200, //スライド自体の速度
    autoplay: true, //自動再生の設定
    infinite: true, //永続化
    slideToShow: 1, //スライド数
    slideToScroll: 1, //スライドのスクロール数
    arrows: true, //矢印の表示
    prevArrow: '<div class="slick_prew"></div>', //矢印部分のHTML変更
    nextArrow: '<div class="slick_next"></div>', //矢印部分のHTML変更
    dots: true, //下部のドットナビゲーション
    pauseOnFocus: false, //フォーカス時の一時停止の設定
    pauseOnHover: false, //マウスホバー時の一時停止の設定
    pauseOnDotsHover: false, //ドットマウスホバー時の一時停止の設定
})



// フェードイン
function fadeIn(){
    // フェードアップ
    $('.fadeUpTrigger').each(function(){// fadeUpTriggerクラスの各要素に対して
      let scroll = $(window).scrollTop();// スクロール位置を取得する
      let triTop = $(this).offset().top + 100;// 要素の上部より100px下の位置を取得
      let winHeight = $(window).height();// ウィンドウの高さを取得
      if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
        $(this).addClass('fadeUp');// fadeUpクラスを付与
      }else{
        $(this).removeClass('fadeUp');// fadeUpクラスを削除
      }
    });
  
    // フェードレフト
    $('.fadeLeftTrigger').each(function(){
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight){
        $(this).addClass('fadeLeft');
      }else{
        $(this).removeClass('fadeLeft');
      }
    });
  
    // フェードライト
    $('.fadeRightTrigger').each(function(){
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight){
        $(this).addClass('fadeRight');
      }else{
        $(this).removeClass('fadeRight');
      }
    });
}
  
$(window).scroll(function () {// スクロールしたら
    fadeIn();// 関数を実行
});