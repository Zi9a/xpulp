
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

function toggle_dropdown(id) {
  document.getElementById(id).classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; ++i) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
}


let modal = document.getElementById('modal');
let modal_image = document.getElementById('modal_image');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('clickable')) {
    modal_image.src = e.target.src;
    modal.classList.add('show_modal');
  }

  if (e.target === modal) {
    modal.classList.remove('show_modal');
  }
})










