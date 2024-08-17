const action = document.querySelector(".action"),
  count = document.querySelector(".count"),
  countText = document.querySelector(".countText"),
  button = document.querySelectorAll(".button"),
  articles_card = document.querySelectorAll(".articles-card"),
  likeIcon = document.querySelectorAll(".like-icon"),
  buttonCard = document.querySelectorAll(".card-button"),
  submit = document.querySelector(".submit");

function card(e) {
  articles_card.forEach((item) => {
    item.classList.remove("articles-card_active");
    buttonCard.forEach((item) => {
      item.classList.add("card-button_active");
    });
  });
  buttonCard.forEach((item) => {
    item.classList.remove("card-button_active");
  });
  e.currentTarget.classList.add("articles-card_active");
}

articles_card.forEach((item) => {
  item.addEventListener("click", card);
});
articles_card.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("articles-card_active")) {
      buttonCard[index].classList.toggle("card-button_active");
    } else {
      buttonCard.style = "color:while;";
    }
  });
});

let counter = 0;

button.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("button-active");
    if (item.classList.contains("button-active")) {
      counter++;
    } else {
      counter--;
    }
    countText.innerHTML = counter;
    if (counter >= 1) {
      count.style = "display:flex;";
    } else {
      count.style = "display:none";
    }
  });
});
function rateActive() {
  document.querySelectorAll("#rate").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rate").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });

  document.querySelectorAll("#rateTwo").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateTwo").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });

  document.querySelectorAll("#rateCard-3").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateCard-3").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rateCard-4").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateCard-4").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rate-click").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rate-click").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rate-click-1").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rate-click-1").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rate-click-2").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rate-click-2").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rate-click-3").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rate-click-3").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rateEnd").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateEnd").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rateEnd-1").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateEnd-1").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rateEnd-2").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateEnd-2").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
  document.querySelectorAll("#rateEnd-3").forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#rateEnd-3").forEach((star, ind2) => {
        index >= ind2
          ? star.classList.add("rate-active")
          : star.classList.remove("rate-active");
      });
    });
  });
}
rateActive();
//modal
const modalInput = document.getElementById("modalInput");
modalInput.addEventListener("input", (e) => {
  let key = e.target.value;
  if (key.length == 0 || key.length !== 9) {
    modalInput.nextElementSibling.textContent = "raqam noto'ri kiritildi";
    modalInput.classList.add("inputActive");
  } else if (isNaN(key)) {
    modalInput.nextElementSibling.textContent = "raqam noto'ri kiritildi";
    modalInput.classList.add("inputActive");
  } else {
    modalInput.nextElementSibling.textContent = "";
    modalInput.classList.remove("inputActive");
  }
});
document.querySelector(".user").addEventListener("click", () => {
  document
    .querySelector(".modal-container")
    .classList.add("modal-containerActive");
  document.body.style.overflow = "hidden";
});
document.querySelector("#modalImg").addEventListener("click", () => {
  document
    .querySelector(".modal-container")
    .classList.remove("modal-containerActive");
  document.body.style.overflow = "";
  window.addEventListener("keydown", (e) => {
    console.log(e);
  });
});
window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    document
      .querySelector(".modal-container")
      .classList.remove("modal-containerActive");
  }
});
document.querySelector(".modal-container").addEventListener("click", (e) => {
  e.target = e.target.classList.remove("modal-containerActive");
  document.body.style.overflow = "";
});
submit.addEventListener("click", (e) => {
  if (!isNaN(modalInput.value) && modalInput.value.length == 9) {
    document
      .querySelector(".modal-container")
      .classList.remove("modal-containerActive");
    modalInput.classList.remove("inputActive");
  } else {
    e.target = document.body.style = "overflow:hidden";
    e.target = modalInput.classList.add("inputActive");
  }
});
//modal end

let mapArr = [
  `
  <iframe
              src="https://yandex.uz/map-widget/v1/?ll=50.835894%2C61.669228&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA2NBIr0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQmtC-0LzQuCIKDZ8oW0IVPUCAQg%2C%2C&z=16.47"
              class="maps"
            ></iframe>
  `,
  `
  <iframe
              src="https://yandex.uz/map-widget/v1/?ll=53.204326%2C65.301197&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4MhLGAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINC00LXRgNC10LLQvdGPINCS0LXRgNGC0LXQvyIKDevQVEIVCZmCQg%2C%2C&z=14.19"
              class="maps"
            ></iframe>
  `,
  `
  <iframe
              src="https://yandex.uz/map-widget/v1/?ll=53.279475%2C65.294748&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NBLGAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINGB0LXQu9C-INCa0YDQsNGB0L3QvtCx0L7RgCIKDRokVUIV_ZaCQg%2C%2C&z=14.17"
              class="maps"
            ></iframe>
  `,
  `
  <iframe src="https://yandex.uz/map-widget/v1/?ll=53.357525%2C65.276844&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NRLCAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINC00LXRgNC10LLQvdGPINCU0LjRjtGAIgoNiHBVQhUjjoJC&z=14.42" class="maps"></iframe>
  `,
];
let map_active = document.querySelectorAll(".our");
function mapActive(e) {
  map_active.forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
}
map_active.forEach((item) => {
  item.addEventListener("click", mapActive);
});

map_active.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.querySelector(".map").innerHTML = mapArr[`${index}`];
  });
});
let icon = document.querySelectorAll(".icon");

icon.forEach((item, ind) => {
  item.addEventListener("click", () => {
    likeIcon.forEach((element, index) => {
      if (index == ind) {
        item.classList.add("iconActive");
        element.classList.add("box");
      }
    });
  });
});
likeIcon.forEach((element, index) => {
  element.addEventListener("click", () => {
    icon.forEach((item, ind) => {
      if (index == ind) {
        element.classList.remove("box");
        item.classList.remove("iconActive");
      }
    });
  });
});
