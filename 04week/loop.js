for (i = 0; i < 1001; ++i) {
  console.log(i);
}

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "1925",
  age: 10,
  gender: "female"
};

for (let prop in person) {
  if (person.birthDate % 2 != 0) {
    console.log("janes birthday is odd and is the year of", person.birthDate);
  } else {
    console.log("is Even");
  }
}
console.log("======================");

let users = [
  { firstName: "Jane", lastName: "Doe", birthDate: "1925", gender: "female" },

  { firstName: "Alek", lastName: "Doe", birthDate: "1995", gender: "male" },

  { firstName: "John", lastName: "Doe", birthDate: "1945", gender: "male" }
];

var males = users.filter(function(user, index) {
  if (user.gender == "male") {
    return true;
  } else {
    return false;
  }
});
console.log("Male's inormation:", males);

console.log("=========================");

var olderThan = users.filter(function(user, index) {
  if (user.birthDate < "1990") {
    return true;
  } else {
    return false;
  }
});
console.log("people born before 1990", olderThan);
