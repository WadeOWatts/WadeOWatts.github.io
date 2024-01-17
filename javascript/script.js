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

// This script toggles the dropdown menus on click
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown triggers
    var dropdowns = document.querySelectorAll('.nav-item.dropdown > a');
  
    // Add click listeners to each dropdown
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function(event) {
        // Prevent the link from navigating
        event.preventDefault();
        
        // Get the associated dropdown content
        var dropdownContent = this.nextElementSibling;
        
        // Close all dropdowns
        var openDropdowns = document.querySelectorAll('.dropdown-content');
        openDropdowns.forEach(function(openDropdown) {
          // If this is not the dropdownContent we want to toggle, close it
          if (openDropdown !== dropdownContent) {
            openDropdown.classList.remove('show');
          }
        });
        
        // Toggle the clicked dropdown content
        dropdownContent.classList.toggle('show');
      });
    });
  
    // Close all dropdowns if user clicks outside of any dropdown
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown > a')) {
        var openDropdowns = document.querySelectorAll('.dropdown-content');
        openDropdowns.forEach(function(openDropdown) {
          openDropdown.classList.remove('show');
        });
      }
    });
  });

