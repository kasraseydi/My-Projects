/*=============== FINAL POLISHED DROPDOWN JS: CLICK FOR ALL DEVICES ===============*/
const showDropdown = (contentId, buttonId) => {
  const dropdownContent = document.getElementById(contentId);
  const dropdownButton = document.getElementById(buttonId);
  const dropdownParent = dropdownButton.closest('.dropdown');

  // Toggle dropdown on any device via click
  dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownParent.classList.toggle('show-dropdown');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!dropdownParent.contains(e.target)) {
      dropdownParent.classList.remove('show-dropdown');
    }
  });
};

showDropdown('dropdown-content', 'dropdown-button');
