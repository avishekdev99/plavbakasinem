
$(document).ready(function() {
  $('.moreless-button').click(function() {
      $('.moretext').slideToggle();
      if ($(this).text() == "Read more") {
          $(this).text("Read less");
      } else {
          $(this).text("Read more");
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




