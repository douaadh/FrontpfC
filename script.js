// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
  };
  // Close all open dropdowns
  const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
      toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    });
  };
  // Attach click event to all dropdown toggles
  document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const dropdown = dropdownToggle.closest(".dropdown-container");
      const menu = dropdown.querySelector(".dropdown-menu");
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns(); // Close all open dropdowns
      toggleDropdown(dropdown, menu, !isOpen); // Toggle current dropdown visibility
    });
  });
  
  



 // Dans script.js
function markAsRead(element) {
  if (element.classList.contains('unread')) {
    element.classList.remove('unread');
    element.classList.add('read');
    element.querySelector('.unread-dot').remove();
   
    
    // Mettre à jour le compteur
    updateUnreadCount();
  }
}

function updateUnreadCount() {
  const count = document.querySelectorAll('.unread').length;
  const counterBadge = document.querySelector('.notification-icon .badge');
  if (counterBadge) counterBadge.textContent = count;
}

// Initialisation
document.querySelectorAll('.notification-item').forEach(item => {
  item.addEventListener('click', function() {
    markAsRead(this);
  });
});




//