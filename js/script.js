$(document).ready(function () {
   $('#hide-toggle').hide();
   $('#nav-link-toggle').hide();
   $('#search-bar').hide();
   $('#nav-toggle').click(function () {
      $('#show-toggle').toggle();
      $('#hide-toggle').toggle();
      $('#nav-link-toggle').toggle();
   });
   $('#search-toggle').click(function () {
      $('#search-bar').toggle(200);
   });
   $('html').addClass('scroll-smooth');
});
