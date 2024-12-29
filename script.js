  const video = document.getElementsByClassName("custom-video__video");
      let i;
      for (i = 0; i < video.length; i++) {
        video[i].addEventListener("click", function () {
          const controls = this.nextElementSibling;
          if (controls.innerHTML === "▶") {
            controls.innerHTML = "| |";
            this.play();
          } else {
            controls.innerHTML = "▶";
            this.pause();
          }
        });
        video[i].addEventListener("mouseout", function () {
          const controls = this.nextElementSibling;
          if (!this.paused) {
            controls.style.display = "none";
          }
        });
        video[i].addEventListener("mouseover", function () {
          const controls = this.nextElementSibling;
          controls.style.display = "flex";
        });
        video[i].addEventListener(
          "ended",
          function () {
            const controls = this.nextElementSibling;
            controls.style.display = "flex";
            controls.innerHTML = "▶";
          },
          false
        );
      }

      
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});
// cart-modal---->
// Get elements
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const requestDishButton = document.getElementById('request-dish-button');
const requestDishModal = document.getElementById('request-dish-modal');
const cancelRequest = document.getElementById('cancel-request');
const submitRequest = document.getElementById('submit-request');

// Utility function to toggle modal and body scroll
function toggleModal(modal, show) {
  modal.classList.toggle('hidden', !show);
  document.body.style.overflowY = show ? 'hidden' : 'auto';
}

// Open cart modal
cartIcon.addEventListener('click', () => {
  toggleModal(cartModal, true);
});

// Close cart modal
closeCartModal.addEventListener('click', () => {
  toggleModal(cartModal, false);
});

// Open request dish modal
requestDishButton.addEventListener('click', () => {
  toggleModal(requestDishModal, true);
});

// Close request dish modal on cancel
cancelRequest.addEventListener('click', () => {
  toggleModal(requestDishModal, false);
});

// Close request dish modal on submit
submitRequest.addEventListener('click', () => {
  toggleModal(requestDishModal, false);
});
