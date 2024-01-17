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

// 监听每个nav中的li元素
document.querySelectorAll('nav li').forEach(function(everyitem){
    everyitem.addEventListener('click', function(e){
      // 查找这个li元素中的dropdown
      let el = everyitem.querySelector('.dropdown');
      // 如果找到了dropdown，切换它的显示状态
      if(el) {
        e.preventDefault(); // 防止默认的超链接行为
        el.classList.toggle('show'); // 切换show类
      }
    });
  });
  
  // 监听页面点击事件，以便在点击其他地方时关闭下拉菜单
  window.addEventListener('mouseup', function(event){
    let dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown){
      // 如果点击的不是下拉菜单本身，且下拉菜单是显示状态，就隐藏它
      if(event.target.closest('.dropdown') === null && dropdown.classList.contains('show')){
        dropdown.classList.remove('show');
      }
    });
  });
  