// $('.my_filter').on('click',function(e){
//   var url = $(this).attr('href');
//   $.get( url, function(data){
//     var filter = $(data).find(".filteroption").html();
//     $('.filteroption').html(filter);
//   });
//    e.preventDefault();
// });



//=================================================================

var switchImage = function(newImageSrc, newImage, mainImageDomEl) {
  jQuery(mainImageDomEl).attr('src', newImageSrc);

  if ($(window).width() > 782) {jQuery(mainImageDomEl).parent().trigger('zoom.destroy').zoom( { url: newImageSrc.replace('_master', '') } );}

  $(mainImageDomEl).parents('a').attr('href', newImageSrc);
}  

$(document).ready(function(){
  
//========================QuickView Jquery========================
  
  $('#quickview').hide();
  function openpopup()
  {
    $('#quickview').fadeIn("3000"); 
    BOLD.recurring_orders.app.reboot();
  }
  function closepopup()
  {
     $('.quickviewpopup').fadeOut("slow"); 
  }
  $('#popupBoxClosebutton').click(function(){
  	closepopup();
  });
 $(document).mouseup(function (e) {
     var popup = $("#quickview");
     if (!$('.quick-btn').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
         popup.hide(500);
     }
 	});
  $('.quick-btn').click(function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $.get( url, function(data){
    	$('#view').html(data);
      	openpopup();
    });
  });
  
//==================================================================
  
    $('.product-slider a').on('click', function(e) {
      $('.product-slider a.active').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
      switchImage($(this).attr('href'), null, $('.product-gallery img')[0]);
    });
  
//==================================================================
  
    $("input[name$='radio']").click(function(){
        var test = $(this).val();
        $("div.selectoption").hide();
        var t=$("#select" + test).show();
    });
  
//================================================================
  
  $(".donation").click(function(e){
    e.preventDefault();
    $(".btndonation").trigger("click");
  });
  $('btndonation').click(function(){
  	e.preventDefault();
  });
  
//==========================instafeed=============================
  
  
//=========================multiple filter===========================

  $('.btnsearch').click(function(){
    var gender=$("input[name='gender']:checked").val();
    var size=$('#findsize').val();
    var width=$('#findwidth').val();
    var check=true;
    var q='';
    if(width.length){
      	//q+= width+'+'; 
    }else{
      var error="select width";
      check=false;
    }
    if(size.length){
      //q+=size+'+';
    }else{
      var error="select size";
      check=false;
    }
    if(size.length && width.length) {
      q += 'fil_'+size.replace('Size-','')+'_'+width+'+';
    }
    if(gender){
      q+= 'Gender_'+gender;
    }else{
      var error="select gender";
      check=false;
    }
    if(check == false)
    {
      $('.error').text(error);
    }else{
      window.location='https://mital-dev.myshopify.com/collections/all_product/'+q;
    }
  });
  
//=========================================== Accordian ====================================================
  
    function close_accordion_section() {
      jQuery('.accordion .accordion-section-title').removeClass('active');
      jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    jQuery('.accordion-section-title').click(function(e) {
      var currentAttrValue = jQuery(this).attr('href');
      if(jQuery(e.target).is('.active')) {
        close_accordion_section();
      }else {
        close_accordion_section();
        jQuery(this).addClass('active');
        jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
      }
      e.preventDefault();
    });
 
//======================= selector(javascript) ============================
  
//   var list = document.querySelector('.ul');
//   list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === 'LI') {
//       ev.target.classList.toggle('done'); 
//     }
//   }, false);
});

//======================== prodduct desc popup in collection page =====================================================

function openpopup()
{
  $('#desc_popup').fadeIn("3000"); 
}
function closepopup()
{
  $('#desc_popup').fadeOut("slow");
  $("#overlay").css({"display":"none"});
}
$('#desc_popup').hide();

var popup = $("#desc_popup");
$('.linkcls').click(function(e){
  e.preventDefault();
  $("#overlay").css({"display":"block"});
  var url = $(this).attr('href');
  console.log(url);
  $.get( url, function(data){
    $('#popup-view').html(data);
    openpopup();
  });
});

//========================================= add product without add cart  =======================================================

for(i=0;i<12;i++){
  $('.grid').append('<div class="grids grid-'+ i +'" pos='+ i +'><div class="title title-'+ i +'"></div><div class="newclass"></div></div>');
}

var arr = [];
var i = 0;
var l = [];
var total = 0;
var savings = 0;
var outarray = [];
$('.btnclass').each(function(e){
  $(this).on("click", function(e){
    var atr=$(this).attr("data-variant-id");
    var price=$(this).parent(".product-image").attr("data-price");
    var img=$(this).closest("div").find('img').attr("src");
    var title=$(this).closest("div").find('.second-title').text();
    if( l.length < 1){
      if( arr.length < 10)
      {
        total = total + Number($(this).parent(".product-image").attr("data-price"));
      }
      if(total > 0)
      {
        $('.cartbutton').closest('div').find('.product-price').css('display','block');
      }
      $('.grid-'+ i +'').closest("div").find(".newclass").addClass("cartcount");
      $('.grid-'+ i +'').closest("div").find(".newclass").attr("data-variant-id",atr);
      $(this).parent(".product-image").addClass('is-active');
      $('.grid-'+ i +'').attr("data-price",price);
      $('.grid-'+ i +'').addClass("imageAdded");
      var dataprice=$('.grid-'+ i +'').attr("data-price"); 
      var one;
      var Two;
      if(arr.length<12){
        arr.push(dataprice);
        console.log(arr);
      }
      if(arr.length==11){
        $('.btnaddcart').removeAttr("disabled");
        arr.sort();
        $(".imageAdded[data-price="+arr[0]+"]").last().addClass("free");
      }
      else{
      	 $(".imageAdded[data-price="+arr[0]+"]").removeClass("free");
      }
      if(arr.length==12){
        $('.btnaddcart').removeAttr("disabled");
        arr.sort();
        $(".imageAdded[data-price="+arr[0]+"]").last().addClass("free");
        $(".imageAdded[data-price="+arr[1]+"]").first().addClass("free");
      }
      e.preventDefault();
      $('.grid-'+ i +'').css('background-image', 'url('+img+')');
      $('.grid-'+ i +'').append('<div class="remove-icon"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M18.7 13V8c0-1-1-2-2-2h-1.2c-1 0-2 1-2 2v5H8c-1 0-2 1-2 2v1c0 1 1 2 2 2h5.5v5c0 1 1 2 2 2h1.2c1 0 2-1 2-2v-5h5c1.2 0 2-1 2-2v-1c0-1-.8-2-2-2h-5zM16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16z"></path></svg></div>');
      $('.title-'+ i +'').append(title);
      if(arr.length > 10 && arr.length <= 12)
      {
        savings = savings + Number($('.free').attr("data-price"));
      }
      $('.cartbutton').closest('div').find('.product-price').html('<span>Total:'+ Shopify.formatMoney(total) +'</span><br><span>Savings:'+ Shopify.formatMoney(savings) +'</span>');
      i=i+1;
    }
    else{
      if( arr.length < 10)
      {
        total = total + Number($(this).parent(".product-image").attr("data-price"));
      }
      if(total > 0)
      {
        $('.cartbutton').closest('div').find('.product-price').css('display','block');
      }
      h=l[0];
      $('.grid-'+ h +'').closest("div").find(".newclass").addClass("cartcount");
      $('.grid-'+ h +'').closest("div").find(".newclass").attr("data-variant-id",atr);
      $('.grid-'+ h +'').attr("data-price", price);
      var dataprice=$('.grid-'+ h +'').attr("data-price");
      var one;
      var Two;
      if(arr.length<12){
        arr.push(dataprice);
        console.log(arr);
        console.log(dataprice);
      }
      $('.grid-'+ h +'').css('background-image', 'url('+img+')');
      $('.grid-'+ h +'').append('<div class="remove-icon"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M18.7 13V8c0-1-1-2-2-2h-1.2c-1 0-2 1-2 2v5H8c-1 0-2 1-2 2v1c0 1 1 2 2 2h5.5v5c0 1 1 2 2 2h1.2c1 0 2-1 2-2v-5h5c1.2 0 2-1 2-2v-1c0-1-.8-2-2-2h-5zM16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16z"></path></svg></div>');
      $('.grid-'+ h +'').addClass("imageAdded");
      $('.title-'+ h +'').append(title);
      if(arr.length == 11){
        arr.sort();
        $(".imageAdded[data-price="+arr[0]+"]").last().addClass("free");
      }
      else{
      	 $(".imageAdded").removeClass("free");
      }
      if(arr.length == 12){
        $('.btnaddcart').removeAttr("disabled");
        arr.sort();
        $(".imageAdded[data-price="+arr[0]+"]").last().addClass("free");
        $(".imageAdded[data-price="+arr[1]+"]").first().addClass("free");
      }
      if( arr.length > 10 && arr.length <= 12)
      {
        savings = savings + Number($('.free').attr("data-price"));
        console.log(savings);
      }
      $('.cartbutton').closest('div').find('.product-price').html('<span>Total:'+ Shopify.formatMoney(total) +'</span><br><span>Savings:'+ Shopify.formatMoney(savings) +'</span>');
      l.shift();
    }
  }); 
});
// function loader(){
//   $(document).ajaxSend(function(){
//     $("#overlay1").fadeIn(500);　
//   });
// }
$('.btnaddcart').click(function(e){
  $('.cartcount').each(function(){
    var data_variant = $(this).attr('data-variant-id');
    console.log(data_variant);
    var ss = $(this).parent(".free").attr("data-price",0);
    var isFree = $(this).parent().hasClass("free") ? "Yes" : "No";
    if($('.imageAdded').length == 12){        
      var propType = 'Bundle_12 (Free)';
    }
    $.ajax({
      url: '/cart/add.js',
      type: 'POST',
      dataType: 'json',
      data: { id: data_variant , quantity: 1 , properties: { 'Free': isFree }},
      async: false,
      success: function(item){
        console.log("add data");
      },
      error: function(err){
        console.log(err);
      }
    });
  });
  window.location.href = '/cart';
});
j=0;
$(document).on('click', ".grids.imageAdded", function(){
  var price=$(this).attr('data-price');
  $(this).css('background-image', 'none');
  $(this).closest('div').find('.remove-icon').remove();
  $(this).closest('div').find('.title').empty();
  $(this).closest('div').find('.newclass').removeClass('cartcount');
  $(this).closest('div').find('.newclass').removeAttr('data-variant-id');
  $(this).removeClass('imageAdded');
  $(this).removeClass('free');
  if( arr.length <= 10 )
  {
    total = total - Number($(this).attr('data-price'));
  }
  if(total == 0)
  {
    $('.cartbutton').closest('div').find('.product-price').css('display','none');
  }
  var k = $(this).attr('pos');
  l.push(k);
  l.sort(function(a, b){return a-b});
  console.log(l);
  arr.splice(arr.indexOf(price), 1);
  console.log(arr);
  if(arr.length >= 10 && arr.length < 12){
    var h=$('.free').attr('data-price');
    savings = savings - Number($('.free').attr('data-price'));
  }
  $('.cartbutton').closest('div').find('.product-price').html('<span>Total:'+ Shopify.formatMoney(total) +'</span><br><span>Savings:'+ Shopify.formatMoney(savings) +'</span>');
  $(this).removeAttr('data-price');
  if(arr.length < 12){
    $('.btnaddcart').attr("disabled","disabled");
  }
  if(arr.length == 11){
    $(".imageAdded").removeClass("free");
    //$(".imageAdded[data-price="+arr[0]+"]").last().addClass("free");
  }
  else{
    $(".imageAdded").removeClass("free");
  }
  if(arr.length == 11){
    $(".imageAdded[data-price="+arr[0]+"]").last().addClass("free");
  }
});
var desc=[1,2,3,4,5,6,7,8,9,10]
var cnt=0;
$('#loopingbtn').click(function(){
  for(var i=0;i<7;i++ )
  {
    if(cnt<7){
      $('.numbers').append('number:'+desc[cnt]+'<br>');
      cnt++;
    }
    else
    {
      if(cnt < desc.length){
        $('.numbers').append('number:'+desc[cnt]+'<br>');
        cnt++;
      }
      else{
        cnt=0;
        $('.numbers').append('number:'+desc[cnt]+'<br>');
        cnt++;
      }
    }
  }
});
$('.btn-mail').click(function(){
	$('.right-side').css("display","block");
  	$(".right-side").fadeIn("slow");
});
$('#closebtn1').click(function(){
  $(".right-side").fadeOut("slow");
  $(".right-side").css("display","none");
});

//============Scrolltop=============

$(window).scroll(function() {
  var topPos = $(this).scrollTop();
  if (topPos > 400) {
    $('#slidetop').css("display", "block");

  } else {
    $('#slidetop').css("display", "none");
  }
});
$('#slidetop').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500);
  return false;
});       

//================Group Filter Using Ajax========================

$('body').on('click', '.advanced-filter',function(e){
  e.preventDefault();
  var _s = $(this);
  $('body').addClass('loading');
  console.log(_s);
  var m = $(this).addClass('site-nav--active');
  console.log(m);
  var href = window.location.href;
  var elGroup = _s.data('group');
  var elHandle = _s.data('handle');
  var activeTagInGroup = $('.site-nav--active[data-group="'+ elGroup +'"]');
  console.log(elHandle);
  if ( !_s.hasClass('site-nav--active') && activeTagInGroup.size() ){
    e.preventDefault();
    var link  = $('#pageUrl').val().replace(activeTagInGroup.data('handle'), elHandle).replace(/(&page=\d+)|(page=\d+&)|(\?page=\d+$)/, '');
  } else {
    var link = $(this).find('a').attr('href');
  }
  console.log('link---'+link);
  if($(window).width() > 767){
    $.get( link, function( data ){
      var sidebar = $(data).find(".filterbysize").html();
      var all_product = $(data).find(".shop-list").html();
      $('.filterbysize').html(sidebar);
      $('.shop-list').html(all_product);
    }).done(function(){
      $('body').removeClass('loading');
      var href1 = $('.active').data('src');
      console.log(href1);
      $.getJSON(href1+'.json',function(response){
        console.log("Filter Data");
      });
      $('#pageUrl').val(link);
    });
  }
});