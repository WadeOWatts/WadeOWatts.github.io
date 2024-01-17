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

// 獲取所有的下拉選單開關和對應的下拉選單
const dropdownToggles = document.querySelectorAll('.dropdownToggle');
const dropdownMenus = document.querySelectorAll('.dropdown');

// 為每個下拉選單開關添加點擊事件監聽器
dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault(); // 防止默認鏈接行為
        // 對應的下拉選單
        const dropdownMenu = toggle.nextElementSibling;

        // 判斷該下拉選單是否已經顯示
        if (dropdownMenu.classList.contains('show')) {
            // 如果已顯示，則隱藏
            dropdownMenu.classList.remove('show');
        } else {
            // 隱藏所有其他下拉選單
            dropdownMenus.forEach(function(menu) {
                menu.classList.remove('show');
            });
            // 顯示當前的下拉選單
            dropdownMenu.classList.add('show');
        }
    });
});

// 當點擊其他地方時，隱藏所有下拉選單
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.matches('.dropdownToggle')) {
        dropdownMenus.forEach(function(menu) {
            menu.classList.remove('show');
        });
    }
});


  