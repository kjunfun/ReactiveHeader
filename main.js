const toggle = document.querySelector('.navbar_toggle'); //햄버거
const menu = document.querySelector('.navbar_menu'); //메뉴
const icons = document.querySelector('.navbar_icons'); //페북,트윗아이콘

// 얘는 갑자기 뭐지??
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});