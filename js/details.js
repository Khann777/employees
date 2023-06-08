const users = document.querySelector("#user");

const loadCards = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user: ", user);

  loadMainInfo(user);
  loadAdditionalInfo(user);
  loadAddressData(user);
  loadPhysicalData(user);
  loadPassportData(user);
  loadUserData(user);
  loadNetworkData(user);
  loadBankData(user);
  loadCompanyData(user);
};

const loadMainInfo = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Main Info";

  const avatar = document.createElement("img");
  avatar.setAttribute("class", "avatar");
  avatar.setAttribute("src", `${user.image}`);

  const firstName = document.createElement("span");
  firstName.setAttribute("class", "fistName");
  firstName.textContent = `First Name: ${user.firstName}`;

  const maidenName = document.createElement("span");
  maidenName.setAttribute("class", "maidenName");
  maidenName.textContent = `Maiden Name: ${user.maidenName}`;

  const lastName = document.createElement("span");
  lastName.setAttribute("class", "lastName");
  lastName.textContent = `Last Name: ${user.lastName}`;

  const age = document.createElement("span");
  age.setAttribute("class", "age");
  age.textContent = `Age: ${user.age} years`;

  const birthDate = document.createElement("span");
  birthDate.setAttribute("class", "birthDate");
  birthDate.textContent = `Birth Date: ${user.birthDate}`;

  const height = document.createElement("span");
  height.setAttribute("class", "height");
  height.textContent = `Height: ${user.height} cm`;

  const gender = document.createElement("span");
  gender.classList.add("gender");
  gender.textContent = `Gender: ${user.gender}`;

  userCard.appendChild(title);
  userCard.appendChild(avatar);
  userCard.appendChild(firstName);
  userCard.appendChild(maidenName);
  userCard.appendChild(lastName);
  userCard.appendChild(age);
  userCard.appendChild(birthDate);
  userCard.appendChild(gender);
};

const loadPhysicalData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard physical");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Physical Data";

  const height = document.createElement("span");
  height.setAttribute("class", "height");
  height.textContent = `Height: ${user.height} cm`;

  const weight = document.createElement("span");
  weight.setAttribute("class", "weight");
  weight.textContent = `Weight: ${user.weight} kg`;

  const bloodGroup = document.createElement("span");
  bloodGroup.setAttribute("class", "bloodGroup");
  bloodGroup.textContent = `Blood Group: ${user.bloodGroup}`;

  const eyeColor = document.createElement("span");
  eyeColor.setAttribute("class", "eyeColor");
  eyeColor.textContent = `Eye Color: ${user.eyeColor}`;

  const hairColor = document.createElement("span");
  hairColor.setAttribute("class", "hairColor");
  hairColor.innerHTML = `<strong>Hairs:</strong><br> Color: ${user.hair.color} <br> Type: ${user.hair.type}`;

  userCard.appendChild(title);
  userCard.appendChild(height);
  userCard.appendChild(weight);
  userCard.appendChild(bloodGroup);
  userCard.appendChild(eyeColor);
  userCard.appendChild(hairColor);
};

const loadPassportData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard passport");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Passport Data";

  const ein = document.createElement("span");
  ein.setAttribute("class", "userAgent");
  ein.textContent = `EIN: ${user.ein}`;

  const ssn = document.createElement("span");
  ssn.setAttribute("class", "ssn");
  ssn.textContent = `SSN: ${user.ssn}`;

  userCard.appendChild(title);
  userCard.appendChild(ein);
  userCard.appendChild(ssn);
};

const loadUserData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard userData");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "User Data";

  const username = document.createElement("span");
  username.setAttribute("class", "userAgent");
  username.textContent = `User Name: ${user.username}`;

  const userAgent = document.createElement("span");
  userAgent.setAttribute("class", "userAgent");
  userAgent.textContent = `User Agent: ${user.userAgent}`;

  const password = document.createElement("span");
  password.setAttribute("class", "password");
  password.textContent = `Password: ${user.password}`;

  userCard.appendChild(title);
  userCard.appendChild(username);
  userCard.appendChild(password);
  userCard.appendChild(userAgent);
};

const loadNetworkData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard network");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Network Data";

  const domain = document.createElement("span");
  domain.setAttribute("class", "domain");
  domain.textContent = `Domain: ${user.domain}`;

  const ip = document.createElement("span");
  ip.setAttribute("class", "ip");
  ip.textContent = `IP: ${user.ip}`;

  const macAddress = document.createElement("span");
  macAddress.setAttribute("class", "macAddress");
  macAddress.textContent = `MAC Address: ${user.macAddress}`;

  userCard.appendChild(title);
  userCard.appendChild(domain);
  userCard.appendChild(ip);
  userCard.appendChild(macAddress);
};

const loadAdditionalInfo = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard additional");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Additional Info";

  const email = document.createElement("span");
  email.setAttribute("class", "email");
  email.textContent = `Email: ${user.email}`;

  const phone = document.createElement("span");
  phone.setAttribute("class", "phone");
  phone.textContent = `Phone Number: ${user.phone}`;

  const university = document.createElement("span");
  university.setAttribute("class", "university");
  university.textContent = `University: ${user.university}`;

  userCard.appendChild(title);
  userCard.appendChild(email);
  userCard.appendChild(phone);
  userCard.appendChild(university);
};

const loadAddressData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard address");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Address";

  const address = document.createElement("span");
  address.setAttribute("class", "address");
  address.textContent = `Address: ${user.address.address}`;

  const city = document.createElement("span");
  city.setAttribute("class", "city");
  city.textContent = `City: ${user.address.city}`;

  const coordinates = document.createElement("span");
  coordinates.setAttribute("class", "coordinates");
  coordinates.innerHTML = `<strong>Coordinates:</strong> <br>Latitude: ${user.address.coordinates.lat}<br>Longitude: ${user.address.coordinates.lng}`;

  const postalCode = document.createElement("span");
  postalCode.setAttribute("class", "postalCode");
  postalCode.textContent = `Postal Code: ${user.address.postalCode}`;

  const state = document.createElement("span");
  state.setAttribute("class", "state");
  state.textContent = `State: ${user.address.state}`;

  userCard.appendChild(title);
  userCard.appendChild(address);
  userCard.appendChild(city);
  userCard.appendChild(coordinates);
  userCard.appendChild(postalCode);
  userCard.appendChild(state);
};

const loadBankData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard bank");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Bank Info";

  const cardType = document.createElement("span");
  cardType.setAttribute("class", "cardType");
  cardType.textContent = `Card Type: ${user.bank.cardType}`;

  const cardNumber = document.createElement("span");
  cardNumber.setAttribute("class", "cardNumber");
  cardNumber.textContent = `Card Number: ${user.bank.cardNumber}`;

  const cardExpire = document.createElement("span");
  cardExpire.setAttribute("class", "cardExpire");
  cardExpire.textContent = `Expires: ${user.bank.cardExpire}`;

  const currency = document.createElement("span");
  currency.setAttribute("class", "currency");
  currency.textContent = `Currency: ${user.bank.currency}`;

  const iban = document.createElement("span");
  iban.setAttribute("class", "iban");
  iban.textContent = `IBAN: ${user.bank.iban}`;

  userCard.appendChild(title);
  userCard.appendChild(cardType);
  userCard.appendChild(cardNumber);
  userCard.appendChild(cardExpire);
  userCard.appendChild(currency);
  userCard.appendChild(iban);
};

const loadCompanyData = (user) => {
  const userCard = document.createElement("div");
  userCard.setAttribute("class", "userCard company");
  users.appendChild(userCard);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Company Info";

  const address = document.createElement("span");
  address.setAttribute("class", "address");
  address.innerHTML = `<strong>Company Address:</strong><br>Address:${user.company.address.address}<br>City:${user.company.address.city}<br><strong>Coordinates:</strong><br>Latitute: ${user.company.address.coordinates.lat}<br>Longitude: ${user.company.address.coordinates.lng}<br>Postal Code: ${user.company.address.postalCode}<br>State: ${user.company.address.state}`;

  const department = document.createElement("span");
  department.setAttribute("class", "department");
  department.textContent = `Department: ${user.company.department}`;

  const name = document.createElement("span");
  name.setAttribute("class", "name");
  name.textContent = `Name: ${user.company.name}`;

  const companyTitle = document.createElement("span");
  companyTitle.setAttribute("class", "companyTitle");
  companyTitle.textContent = `Title: ${user.company.title}`;

  userCard.appendChild(title);
  userCard.appendChild(address);
  userCard.appendChild(department);
  userCard.appendChild(name);
  userCard.appendChild(companyTitle);
};

loadCards();

const back = () => {
  window.open(
    "http://127.0.0.1:5500/Projects/UsersList/index.html",
    "name",
    "noopener=yes"
  );
};
