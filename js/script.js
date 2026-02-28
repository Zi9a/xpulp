// hide navbar while scrolling
let pervious_scroll_position = window.pageYOffset;
window.onscroll = function() {
  let current_scroll_position = window.pageYOffset;

  if (current_scroll_position < pervious_scroll_position) {
    document.querySelector('header').style.top = "0";
  }
  else if (current_scroll_position > pervious_scroll_position) {
    document.querySelector('header').style.top = "-10%";
  }
  pervious_scroll_position = current_scroll_position;
}
