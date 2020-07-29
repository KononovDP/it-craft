$(document).ready(function() {

  // DROPDOWN HEADER
  $('.dropdown__header').on('click', function(e) {
    e.preventDefault();
    let ariaExp = $('.dropdown__header').attr('aria-expanded');

    $(this).closest('.dropdown').toggleClass('dropdown--active');

    if($(this).attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', false);
    }else {
      $(this).attr('aria-expanded', true)
    }
  });

  $(document).click(function(event) { 
    var $target = $(event.target);
    if(!$target.closest('.dropdown').length) {
      $('.dropdown').removeClass('dropdown--active');
    }        
  });

  // SET OFFSETS
  const setOffsets = function() {
    const headerHeight = $('.header').height();
    $('.sidebar').css('top', headerHeight + 'px');
    $('.main').css('paddingTop', headerHeight + 'px');
  };

  $(window).on('load resize', function() {
    setOffsets();
  })

  // SIDEBAR BURGER
  $('.sidebar__burger').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.sidebar').toggleClass('sidebar--active');
  })

  $(document).click(function(event) { 
    var $target = $(event.target);
    if(!$target.closest('.sidebar').length) {
      $('.sidebar').removeClass('sidebar--active');
    }        
  });

  // FORM INPUT 
  $('.form__input').keyup(function() {
    if($(this).val()) {
      $(this).closest('.form__group').addClass('form__group--dirty');
    }else{
      $(this).closest('.form__group').removeClass('form__group--dirty');
    }
  })

  // FORM SELECT
  $(".form__select").prop("selectedIndex", -1);
  $('.form__select').on('click change', function() {
    console.log('change');
    $(this).closest('.form__group').addClass('form__group--dirty');
  })
})