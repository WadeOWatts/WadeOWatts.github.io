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

document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdownToggle');
    var dropdownMenu = document.getElementById('dropdownMenu');

    // 滑鼠移入和移出事件
    dropdownToggle.addEventListener('mouseenter', function() {
        dropdownMenu.classList.add('active');
    });
    dropdownToggle.addEventListener('mouseleave', function() {
        dropdownMenu.classList.remove('active');
    });

    // 點擊事件
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止連結的預設行為
        dropdownMenu.classList.toggle('active');
    });
});

  