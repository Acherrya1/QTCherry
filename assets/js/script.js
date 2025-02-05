const profilLogo = document.querySelectorAll(".profil-logo");
const roleAdd = document.querySelectorAll(".role-add");
const input = document.querySelectorAll(".message input");
const modal = document.querySelector(".modal-container");
const helpBtn = document.querySelector(".help-btn");
const feedbackInput = document.querySelector("#feedback-input");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const ramdomWord = () => {
  const words = [
    "Cute",
    "CopiCopi",
    "Nice",
    "Blublu",
    "QT",
    "❤",
    "Wonderful",
    "Amazing",
    "1+",
    "Wooooooooooooooooooooooooooooooow",
    "Berry",
    "Gorgeous",
    "Pretty",
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const addRole = (card) => {
  const role = document.createElement("div");
  const roleColor = document.createElement("div");
  const roleText = document.createElement("p");
  role.classList.add("role");
  roleColor.classList.add("role-color");
  roleColor.style.backgroundColor = randomHexColor();
  roleText.innerText = ramdomWord();
  role.append(roleColor, roleText);
  card.parentElement.append(role, card);
  removeRole();
};

const removeRole = () => {
  const roles = document.querySelectorAll(".role-color");
  roles.forEach((role) => {
    role.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
};

const toggleModal = () => {
  modal.classList.toggle("active");
};

profilLogo.forEach((logo) => {
  logo.addEventListener("click", toggleModal);
});

roleAdd.forEach((add) => {
  add.addEventListener("click", () => {
    addRole(add);
  });
});

input.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      input.value = "";
      input.blur();

    }
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});

helpBtn.addEventListener("click", () => {
  toggleModal();
});

feedbackInput.addEventListener("keyup", (e) => {
  const feedbackState = document.querySelector(".feedback-state");
  if (e.key === "Enter") {
    feedbackInput.blur();

    feedbackState.classList.add("error");
    feedbackState.innerText = "Api is not available for the moment, try later.";
  }
});

removeRole();
