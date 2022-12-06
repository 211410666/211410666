const navbar = document.querySelector('#nav');
const date = document.querySelector('#date');//document 物件(儲存網頁訊息)
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');


console.log('navBtn',navBtn);//印出訊息 主要debug用
console.log('closeBtn',closeBtn);
console.log('sidebar',sidebar);

navBtn.addEventListener('click',function(){
  sidebar.classList.add('show-sidebar');//新增css show-sidebar
});//監聽程式
closeBtn.addEventListener('click',function(){
  sidebar.classList.remove('show-sidebar');//移除css show-sidebar
})

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
