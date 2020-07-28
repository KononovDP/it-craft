$(document).ready(function() {

  $('.dropdown__header').on('click', function(e) {
    e.preventDefault();
    let ariaExp = $('.dropdown__header').attr('aria-expanded');

    $(this).closest('.dropdown').toggleClass('dropdown--active');

    if($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', false);
    }else {
      $(this).attr('aria-expanded', true)
    }

  })

})