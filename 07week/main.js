const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class player {
  constructor(name, skillset, hasPaid, isHealthy, yearsExperience) {
    this.name = name;
    this.skillset = skillset;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}
class blueTeammate extends player {
  constructor(mascot, teamColor) {
    super((canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience));
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}
class redTeammate extends player {
  constructor(mascot, teamColor) {
    canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

const makePlayer = id => {
  const playerList = document.getElementById("players");
  //.find() is used to find the closest element that satisfies the test function
  //fat arrow is used to avoid creating a seperate function that returns player.id
  const addPlayer = arrOfPeople.find(player => id === player.id);
  const addedPlayer = new player(
    addPlayer.name,
    addPlayer.skillSet,
    addPlayer.age
  );
  listOfPlayers.push(addedPlayer);
  //creating Buttons and li to later be added
  const li = document.createElement("li");
  const addBlue = document.createElement("button");
  addBlue.innerHTML = "Add Blue Team";
  const addRed = document.createElement("button");
  addRed.innerHTML = "Add Red Team";
  //adding an event listener to watch for the button to be clicked
  //when clicked it will send to a seperate function that adds the player to chosen team
  addBlue.addEventListener("click", function() {
    makeBTeam(person.id);
  });
  addRed.addEventListener("click", function() {
    makeRTeam(person.id);
  });
  li.appendChild(
    document.createTextNode(addedPlayer.name + " - " + addedPlayer.skillset)
  );
  li.appendChild(addRed);
  li.appendChild(addBlue);

  playerList.append(li);

  console.log(addedPlayer);
  console.log(listOfPlayers);
  console.log(`li ${id} was clicked!`);
};
