
$(document).ready(function() {
  $('.moreless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.mediterranean-text').find('.moretext');
  
    $moreText.slideToggle();
    if ($this.text() == "Méně čtěte") {
      $this.text("Přečtěte si více");
    } else {
      $this.text("Méně čtěte");
    }
  });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




/*-- Scroll Up/Down add class --*/
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       //âíèç
	   $('.site-header').addClass('scrolling_down');
	   $('.site-header').removeClass('scrolling_up');
   } else {
      // ââåðõ 
	   $('.site-header').addClass('scrolling_up');
	   $('.site-header').removeClass('scrolling_down');
   }
   lastScrollTop = st;
});	








  AOS.init({
    duration: 1200,
  })
  