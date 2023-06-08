const API = "https://dummyjson.com/users";

const users = document.querySelector(".users");
const userList = document.createElement("ul");
userList.setAttribute("class", "userList");
users.appendChild(userList);

const loadCards = async () => {
  const response = await fetch(API);
  const { users } = await response.json();

  users.forEach((item) => {
    createCard(item);
  });
};

loadCards();

const createCard = (item) => {
  const userCard = document.createElement("li");
  userCard.setAttribute("class", "userCard");
  userList.appendChild(userCard);

  const avatar = document.createElement("img");
  avatar.setAttribute("class", "avatar");
  avatar.setAttribute("src", `${item.image}`);

  const name = document.createElement("span");
  name.setAttribute("class", "userName");
  name.textContent = `Full Name: ${item.firstName} ${item.maidenName} ${item.lastName}`;

  const email = document.createElement("span");
  email.setAttribute("class", "email");
  email.textContent = `Email: ${item.email}`;

  const a = document.createElement("a");
  a.href = "details.html";

  const buttonMore = document.createElement("button");
  buttonMore.setAttribute("class", "button");
  buttonMore.addEventListener("click", () =>
    localStorage.setItem("user", JSON.stringify(item))
  );
  buttonMore.textContent = "More";
  a.appendChild(buttonMore);

  userCard.appendChild(avatar);
  userCard.appendChild(name);
  userCard.appendChild(email);
  userCard.appendChild(a);
};
