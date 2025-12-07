//--- script.js ---
// Basic interactivity using jQuery for small UI touches
$(function(){
  $('#menu-toggle, #menu-toggle-2, #menu-toggle-3').on('click', function(){
    $('.main-nav').toggle();
  });

  $('#download-pdf').on('click', function(){
    // Simple print dialog; user can save as PDF
    window.print();
  });
});