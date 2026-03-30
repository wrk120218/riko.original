// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', () => {
    const sunburst = document.getElementById('sunburst');

    // 例：クリックするたびに回転の向きを逆にする機能
    let isReverse = false;

    document.addEventListener('click', () => {
        isReverse = !isReverse;

        if (isReverse) {
            sunburst.style.animationDirection = 'reverse';
        } else {
            sunburst.style.animationDirection = 'normal';
        }

        console.log("回転方向を切り替えました");
    });


    // ===hamburger===
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    const navLinks = document.querySelectorAll('.header-list2 a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active'); // ボタンの×を三本線に戻す
            nav.classList.remove('is-active');       // メニューを横に引っ込める
        });
    });
});

// const btn = document.querySelector('.hamburger');
// const body = document.body;

// btn.addEventListener('click', () => {
//     body.classList.toggle('is-open')
// });