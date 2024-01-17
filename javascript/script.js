document.addEventListener('DOMContentLoaded', function() {
    var searchBar = document.getElementById('search-bar');
    var searchIcon = document.getElementById('search-icon');

    searchIcon.onclick = function() {
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'block';
            searchIcon.src = 'https://e7.pngegg.com/pngimages/666/635/png-clipart-computer-icons-cancel-angle-logo-thumbnail.png'; // URL of the 'X' icon
        } else {
            searchBar.style.display = 'none';
            searchIcon.src = 'https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png'; // URL of the search icon
        }
    };
});

document.querySelectorAll('nav li').forEach(function(everyitem){
    everyitem.addEventListener('click', function(e){
      let el = everyitem.querySelector('.dropdown');
      if(el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
    });
  });
    window.addEventListener('mouseup', function(event){
        let box = document.querySelectorAll('.dropdown');
        box.forEach(function(element){
        if(event.target != element){
            element.style.display = 'none';
        }
        });
    });  

// 獲取下拉選單開關和選單本身的元素
var dropdownToggle = document.getElementById('dropdownToggle');
var dropdownMenu = document.getElementById('dropdownMenu');

// 設置點擊事件監聽器
dropdownToggle.addEventListener('click', function(event) {
  // 防止默認的超連結行為
  event.preventDefault();
  
  // 切換選單的顯示狀態
  dropdownMenu.classList.toggle('show');
});


