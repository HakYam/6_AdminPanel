document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.js-tab-link');
    var tabAreas = document.querySelectorAll('.js-tab-area');
  
    function deactivateAllTabs() {
      tabs.forEach(function(tab) {
        tab.classList.remove('is-active');
      });
    }
  
    function hideAllTabAreas() {
      tabAreas.forEach(function(tabArea) {
        tabArea.classList.remove('is-active');
      });
    }
  
    function activateTab(tab) {
      deactivateAllTabs();
      hideAllTabAreas();
      tab.classList.add('is-active');
      var index = tab.dataset.index;
      var activeTabArea = document.querySelector('.js-tab-area[data-indexed="' + index + '"]');
      if (activeTabArea) {
        activeTabArea.classList.add('is-active');
      }
    }
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        activateTab(tab);
      });
    });
  
    // Activate the first tab by default
    if (tabs.length > 0) {
      activateTab(tabs[0]);
    }
  });
  