let spelers = [
  { name: "Speler",
   scoreMystery: 0,
   scoreEmanuelle: 1,
   scoreSven: 5,
   scoreUma: 1,
   scoreYens: 5,
   scorePhilippe: 0,
   scoreGretel: 0,
   scoreJens: 0,
   scoreToon: 0,
   scoreNele: 0,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMystery: 1,
   scoreEmanuelle: 1,
   scoreSven: 1,
   scoreUma: 1,
   scoreYens: 1,
   scorePhilippe: 1,
   scoreGretel: 1,
   scoreJens: 1,
   scoreToon: 1,
   scoreNele: 1,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMystery: 1,
   scoreEmanuelle: 1,
   scoreSven: 1,
   scoreUma: 1,
   scoreYens: 1,
   scorePhilippe: 1,
   scoreGretel: 1,
   scoreJens: 1,
   scoreToon: 1,
   scoreNele: 1,
  }, // voor als er geen stemmen zijn op een speler
  { name: "/",
   scoreMystery: 1,
   scoreEmanuelle: 1,
   scoreSven: 1,
   scoreUma: 1,
   scoreYens: 1,
   scorePhilippe: 1,
   scoreGretel: 1,
   scoreJens: 1,
   scoreToon: 1,
   scoreNele: 1,
  },
];

// dit bepaalt de volgorde van de cards
let kandidaten = [
  { name: "Sven" },
  { name: "Uma" },
  { name: "Yens" },
  { name: "Emanuelle", status:"afgevallen" },
  { name: "Mystery", status:"afgevallen" },
  { name: "Philippe", status:"afgevallen" },
  { name: "Nele", status:"afgevallen" },
  { name: "Jens", status:"afgevallen" },
  { name: "Toon", status:"afgevallen" },
  { name: "Gretel", status:"afgevallen" },
];


let emanuelleScore = [];
let svenScore = [];
let umaScore = [];
let yensScore = [];
let mysteryScore = [];
let philippeScore = [];
let neleScore = [];
let jensScore = [];
let toonScore = [];
let gretelScore = [];

// Emanuelle
spelers.sort((a, b) => {
  return b.scoreEmanuelle - a.scoreEmanuelle;
});

emanuelleScore.push(spelers[0], spelers[1], spelers[2])

// Sven
spelers.sort((a, b) => {
  return b.scoreSven - a.scoreSven;
});

svenScore.push(spelers[0], spelers[1], spelers[2])

// Uma
spelers.sort((a, b) => {
  return b.scoreUma - a.scoreUma;
});

umaScore.push(spelers[0], spelers[1], spelers[2])

// Yens
spelers.sort((a, b) => {
  return b.scoreYens - a.scoreYens;
});

yensScore.push(spelers[0], spelers[1], spelers[2])

// Mystery
spelers.sort((a, b) => {
  return b.scoreMystery - a.scoreMystery;
});

mysteryScore.push(spelers[0], spelers[1], spelers[2])

// Philippe
spelers.sort((a, b) => {
  return b.scorePhilippe - a.scorePhilippe;
});

philippeScore.push(spelers[0], spelers[1], spelers[2])

// Nele
spelers.sort((a, b) => {
  return b.scoreNele - a.scoreNele;
});

neleScore.push(spelers[0], spelers[1], spelers[2])

// Jens
spelers.sort((a, b) => {
  return b.scoreJens - a.scoreJens;
});

jensScore.push(spelers[0], spelers[1], spelers[2])

// Toon
spelers.sort((a, b) => {
  return b.scoreToon - a.scoreToon;
});

toonScore.push(spelers[0], spelers[1], spelers[2])

// Gretel
spelers.sort((a, b) => {
  return b.scoreGretel - a.scoreGretel;
});

gretelScore.push(spelers[0], spelers[1], spelers[2])




let main = document.querySelector("main");


// kandidaten
kandidaten.forEach((item, i) => {

  // section kandidaat
  let box = document.createElement("section");

  // h1 kandidaat
  let naam = document.createElement("h2");
  naam.classList.add(item.name + "naam");
  naam.textContent = item.name;
  box.appendChild(naam);

  box.classList.add(item.name + "box");
  box.classList.add(item.status);
  // Emanuelle
  if (item.name === "Emanuelle"){
    emanuelleScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreEmanuelle;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Sven
  if (item.name === "Sven"){
    svenScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreSven;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Uma
  if (item.name === "Uma"){
    umaScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreUma;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Yens
  if (item.name === "Yens"){
    yensScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreYens;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Mystery
  if (item.name === "Mystery"){
    mysteryScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreMystery;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Philippe
  if (item.name === "Philippe"){
    philippeScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scorePhilippe;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Nele
  if (item.name === "Nele"){
    neleScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreNele;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Jens
  if (item.name === "Jens"){
    jensScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreJens;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Toon
  if (item.name === "Toon"){
    toonScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreToon;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }
  // Gretel
  if (item.name === "Gretel"){
    gretelScore.forEach((speler, j) => {
        // 2 1 3
      let nummers = document.createElement("div");
      nummers.innerText = speler.scoreGretel;
      box.appendChild(nummers);
        // top 3
      let spelerbox = document.createElement("p");
      spelerbox.innerText = speler.name;
      box.appendChild(spelerbox);
    });
  }

  main.appendChild(box);
});
