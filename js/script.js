
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


const copy_email = document.getElementById('copy_email');

copy_email.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const linkHref = copy_email.href;

    await navigator.clipboard.writeText(linkHref);

    alert('email copied to clipboard');
  } catch (error) {
    alert('Failed to copy link. Please manually copy it.');
    console.error('Clipboard error:', error);
  }
});

let colors = {
  charcoal: "#2e2e2e",
  deep_navy: "#1b263b",
  slate_blue: "#334e68",
  forest_green: "#1f3d2b",
  dusty_blue: "#6c8ead",
  olive: "#6b7d3c",
  burgundy: "#6e1f2f",
  muted_teal: "#2f6f6f",
}

let menu = document.getElementById("dropdown-one")
menu.addEventListener('click', (e) => {
  let action = e.target.dataset.action;

  if (!action) { return };

  e.preventDefault();

  if (colors[action]) {
    document.body.style.backgroundColor = colors[action];
  }
})

const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("click", function(e) {
  const link = e.target.closest("a");
  if (!link) return;
  if (!dropdown.contains(link)) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  e.preventDefault();

  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
});
