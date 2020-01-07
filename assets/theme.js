$(document).ready(function(e){
   $("#product-video").click(function(){
    this.paused ? this.play() : this.pause();
  });
  $('#ResetSuccess').hide();
  $('#RecoverPasswordForm').hide();
  $('#RecoverPassword').click(function(){
    $('#RecoverPasswordForm').show();
    $('#CustomerLoginForm').hide();
  });
  $('#HideRecoverPasswordLink').on(
    'click',
    function(evt) {
      evt.preventDefault();
      hideRecoverPasswordForm();
      history.back();
      location.reload(true);
      return false;
    }.bind(this)
  );
  function hideRecoverPasswordForm() {
    $('#RecoverPasswordForm').addClass('hide');
    $('#CustomerLoginForm').removeClass('hide');
  }
  $('#recoversubmit').click(function(){
    $.ajax({
      type:"GET",
      url:this.method,
      data: $(this).serialize(),
      success: function() {
        $('#ResetSuccess').show();
      }
    });
  });
  
//=================================== Tab Collection ==============================================
  
  $(".demo").champ();
  $('ul.tabbutton').each(function(){
    var active, content, links = $(this).find('a');
    active = links.first().addClass('active');
    content = $(active.attr('href'));
    links.not(':first').each(function () {
      $($(this).attr('href')).hide();
    });
    $(this).find('a').click(function(e){
      active.removeClass('active');
      content.hide();
      active = $(this);
      content = $($(this).attr('href'));
      active.addClass('active');
      content.show();
      return false;
    });
  });
    
  $('.slider-tab').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="icon iconright"><i class="fas fa-chevron-right"></i></a>',
    nextArrow: '<a href="#" class="icon iconleft"><i class="fas fa-chevron-left"></i></a>'
  });
  $('.tabselect').on('click', function (e){
    e.preventDefault();
    var tabLink = $(this);
    var target = $(this.hash);
    $('.slider-tabs:visible').fadeOut("200", function (){
      target.fadeIn("200", function(){
      	$('.slider-tab').slick("setPosition", 0);
      });
    });
  });
  
//==============================================================================
  
  $('.image-zoom')
  .wrap('<span style="display:inline-block"></span>')
  .css('display', 'block')
  .parent()
  .zoom({
    url: $(this).find('img').attr('data-zoom')
  });
//   $('.imagelist').slick({
//   	slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: '<a href="#" class="icon iconright"><i class="fas fa-chevron-right"></i></a>',
//     nextArrow: '<a href="#" class="icon iconleft"><i class="fas fa-chevron-left"></i></a>'
//   });
});
// $('.slider-for').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    infinite: true,
//    fade: true,
//    asNavFor: '.slider-nav'
//  });
//  $('.slider-nav').slick({
//    slidesToShow: 3,
//    slidesToScroll: 1,
//    infinite: true,
//    asNavFor: '.slider-for',
//    dots: false,
//    focusOnSelect: true
//  });






//  $('.imagelist').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: '<a href="#" class="icon iconright"><i class="fas fa-chevron-right"></i></a>',
//     nextArrow: '<a href="#" class="icon iconleft"><i class="fas fa-chevron-left"></i></a>'
//   });