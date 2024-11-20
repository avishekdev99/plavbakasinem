
$(document).ready(function() {
  $('.moreless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.mediterranean-text').find('.moretext');
  
    $moreText.slideToggle();
    if ($this.text() == "Read less") {
      $this.text("Read More");
    } else {
      $this.text("Read less");
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



