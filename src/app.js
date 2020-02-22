const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo"
];

// initialize players with image and strength
const initPlayers = players => {
  var detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  let position = 0,
    size = players.length;
  for (position, size; size > 0; size--, position++) {
    detailedPlayers[position] = {
      name: players[position],
      strength: getRandomStrength(),
      image: "images/super-" + (position + 1) + ".png"
    };

    if ((position) % 2 == 0) {
      detailedPlayers[position].type = "hero";
    } else {
      detailedPlayers[position].type = "villan";
    }
  }
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.ceil(Math.random() * 100);
};

const buildPlayers = (players, type) => {
  let fragment = '';

  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here
  for (i = 0; i < players.length; i++) {
    player = `
        <div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
        </div>`;
    if (players[i].type == type)
      fragment += player;
  }

  return fragment;
}

// for (var i = 0; i < PLAYERS.length; i++) {
//   fragment = `
//     <div class="player">
//     <img src="${detailedPlayers[i].image}" alt = "characters">
//     <h4> ${detailedPlayers[i].name}</h4>
//     <h1>${detailedPlayers[i].strength}</h1>
//     </div>
//      `;
//   return fragment;
//   //Where did you add the alternate name for the image? (Note: Use alt inside the image tag)
// }



// Display players in HTML
const viewPlayers = players => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(players, "villain");
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};