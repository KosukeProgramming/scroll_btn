window.onload = function() {

// スクロールボタンの表示・非表示
let windowHeight = window.outerHeight;
const body = document.querySelector('body');
const scrollBtn = document.querySelector('.scrollTop-btn');
const abc = document.getElementById('btn');
const h_btn = document.querySelector('.h-btn');
const modal = document.querySelector('.modal-bg');
const h_trigger = [h_btn,modal];
window.addEventListener('scroll', function() {

    if(window.scrollY < windowHeight ) {
        scrollBtn.classList.remove('active');
    } else {
        
        scrollBtn.classList.add('active');
    }
})
// ハンバーガーボタンを開閉した時の表示、非表示（ページトップの時は非表示にする）
h_trigger.forEach(element => {
    element.addEventListener('click',function(){
        if(!abc.checked) {
            body.classList.add('fixed');
        } else {
            body.classList.remove('fixed');
    
        }
    
        if(abc.checked && window.scrollY >= windowHeight) {
            scrollBtn.classList.add('active');
        } else {
            scrollBtn.classList.remove('active');
        }
    });    
});

}