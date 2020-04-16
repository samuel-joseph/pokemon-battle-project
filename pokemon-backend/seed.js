const { Pokemon, Move, User } = require("./models");

const main = async () => {
  // Delete everything in the database.
  await Pokemon.destroy({
    where: {},
  });
  await Move.destroy({
    where: {},
  });
  await User.destroy({
    where: {},
  });

  const admin = await User.create({
    username: "admin",
    password_digest:
      "$2b$11$J/T6HO7/IHF7TXgu4elqfO.YW6PJIOS9lQdmTQ789Sg7GUPkIer.O",
    rank: "padawan",
  });

  const pokemon1 = await Pokemon.create({
    name: "Bulbasaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon2 = await Pokemon.create({
    name: "Ivysaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    health: 325,
    current_health: 325,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon3 = await Pokemon.create({
    name: "Venusaur",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    health: 400,
    current_health: 400,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon4 = await Pokemon.create({
    name: "Charmander",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fire",
  });

  const pokemon5 = await Pokemon.create({
    name: "Charmeleon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
    health: 325,
    current_health: 325,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fire",
  });

  const pokemon6 = await Pokemon.create({
    name: "Charizard",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    health: 400,
    current_health: 400,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fire",
  });

  const pokemon7 = await Pokemon.create({
    name: "Squirtle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon8 = await Pokemon.create({
    name: "Wartortle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
    health: 325,
    current_health: 325,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon9 = await Pokemon.create({
    name: "Blastoise",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
    health: 400,
    current_health: 400,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon10 = await Pokemon.create({
    name: "Caterpie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon11 = await Pokemon.create({
    name: "Metapod",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
    health: 330,
    current_health: 330,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon12 = await Pokemon.create({
    name: "Butterfree",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
    health: 370,
    current_health: 370,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon13 = await Pokemon.create({
    name: "Weedie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon14 = await Pokemon.create({
    name: "Kakuna",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
    health: 320,
    current_health: 320,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon15 = await Pokemon.create({
    name: "Beedrill",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Poison",
  });

  const pokemon16 = await Pokemon.create({
    name: "Pidgey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Flying",
  });

  const pokemon17 = await Pokemon.create({
    name: "Pidgeotto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
    health: 320,
    current_health: 320,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Flying",
  });

  const pokemon18 = await Pokemon.create({
    name: "Pidgeot",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
    health: 360,
    current_health: 360,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Flying",
  });

  const pokemon19 = await Pokemon.create({
    name: "Rattata",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Normal",
  });

  const pokemon20 = await Pokemon.create({
    name: "Raticate",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon21 = await Pokemon.create({
    name: "Spearow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Flying",
  });

  const pokemon22 = await Pokemon.create({
    name: "Fearow",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Flying",
  });

  const pokemon23 = await Pokemon.create({
    name: "Ekans",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon24 = await Pokemon.create({
    name: "Arbok",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
    health: 350,
    current_health: 350,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Poison",
  });

  const pokemon25 = await Pokemon.create({
    name: "Pikachu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon26 = await Pokemon.create({
    name: "Raichu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
    health: 375,
    current_health: 375,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon27 = await Pokemon.create({
    name: "Sandshrew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ground",
  });

  const pokemon28 = await Pokemon.create({
    name: "Sandslash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ground",
  });

  const pokemon29 = await Pokemon.create({
    name: "Nidoran",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon30 = await Pokemon.create({
    name: "Nidorina",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
    health: 325,
    current_health: 325,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon31 = await Pokemon.create({
    name: "Nidoqueen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
    health: 380,
    current_health: 380,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Poison",
  });

  const pokemon32 = await Pokemon.create({
    name: "Nidoran",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon33 = await Pokemon.create({
    name: "Nidorino",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
    health: 325,
    current_health: 325,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon34 = await Pokemon.create({
    name: "Nidoking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
    health: 380,
    current_health: 380,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Poison",
  });

  const pokemon35 = await Pokemon.create({
    name: "Clefairy",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Normal",
  });

  const pokemon36 = await Pokemon.create({
    name: "Clefable",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
    health: 370,
    current_health: 370,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon37 = await Pokemon.create({
    name: "Vulpix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fire",
  });

  const pokemon38 = await Pokemon.create({
    name: "Ninetales",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
    health: 370,
    current_health: 370,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fire",
  });

  const pokemon39 = await Pokemon.create({
    name: "Jigglypuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Normal",
  });

  const pokemon40 = await Pokemon.create({
    name: "Wigglypuff",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
    health: 380,
    current_health: 380,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon41 = await Pokemon.create({
    name: "Zubat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Flying",
  });

  const pokemon42 = await Pokemon.create({
    name: "Golbat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Flying",
  });

  const pokemon43 = await Pokemon.create({
    name: "Oddish",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon44 = await Pokemon.create({
    name: "Gloom",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
    health: 320,
    current_health: 320,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon45 = await Pokemon.create({
    name: "Vileplume",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
    health: 380,
    current_health: 380,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon46 = await Pokemon.create({
    name: "Paras",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Bug",
  });

  const pokemon47 = await Pokemon.create({
    name: "Parasect",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Bug",
  });

  const pokemon48 = await Pokemon.create({
    name: "Venonat",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Bug",
  });

  const pokemon49 = await Pokemon.create({
    name: "Venomoth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Bug",
  });

  const pokemon50 = await Pokemon.create({
    name: "Diglett",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ground",
  });

  const pokemon51 = await Pokemon.create({
    name: "Dugtrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ground",
  });

  const pokemon52 = await Pokemon.create({
    name: "Meowth",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Normal",
  });

  const pokemon53 = await Pokemon.create({
    name: "Persian",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon54 = await Pokemon.create({
    name: "Psyduck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon55 = await Pokemon.create({
    name: "Golduck",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon56 = await Pokemon.create({
    name: "Mankey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon57 = await Pokemon.create({
    name: "Primeape",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fighting",
  });

  const pokemon58 = await Pokemon.create({
    name: "Growlithe",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png",
    health: 310,
    current_health: 310,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fire",
  });

  const pokemon59 = await Pokemon.create({
    name: "Arcanine",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
    health: 410,
    current_health: 410,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fire",
  });

  const pokemon60 = await Pokemon.create({
    name: "Poliwag",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon61 = await Pokemon.create({
    name: "Poliwhirl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/61.png",
    health: 310,
    current_health: 310,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon62 = await Pokemon.create({
    name: "Poliwrath",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png",
    health: 370,
    current_health: 370,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon63 = await Pokemon.create({
    name: "Abra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Psychic",
  });

  const pokemon64 = await Pokemon.create({
    name: "Kadabra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png",
    health: 330,
    current_health: 330,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Psychic",
  });

  const pokemon65 = await Pokemon.create({
    name: "Alakazam",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Psychic",
  });

  const pokemon66 = await Pokemon.create({
    name: "Machop",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fighting",
  });

  const pokemon67 = await Pokemon.create({
    name: "Machoke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png",
    health: 330,
    current_health: 330,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fighting",
  });

  const pokemon68 = await Pokemon.create({
    name: "Machamp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/68.png",
    health: 380,
    current_health: 380,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fighting",
  });

  const pokemon69 = await Pokemon.create({
    name: "Bellsprout",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon70 = await Pokemon.create({
    name: "Weepinbell",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png",
    health: 320,
    current_health: 320,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon71 = await Pokemon.create({
    name: "Victreebel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/71.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon72 = await Pokemon.create({
    name: "Tentacool",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon73 = await Pokemon.create({
    name: "Tentacruel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/73.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon74 = await Pokemon.create({
    name: "Geodude",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Rock",
  });

  const pokemon75 = await Pokemon.create({
    name: "Graveler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/75.png",
    health: 320,
    current_health: 320,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Rock",
  });

  const pokemon76 = await Pokemon.create({
    name: "Golem",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png",
    health: 390,
    current_health: 390,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Rock",
  });

  const pokemon77 = await Pokemon.create({
    name: "Ponyta",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fire",
  });

  const pokemon78 = await Pokemon.create({
    name: "Rapidash",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fire",
  });

  const pokemon79 = await Pokemon.create({
    name: "Slowpoke",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon80 = await Pokemon.create({
    name: "Slowbro",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/80.png",
    health: 390,
    current_health: 390,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon81 = await Pokemon.create({
    name: "Magnemite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Electric",
  });

  const pokemon82 = await Pokemon.create({
    name: "Magneton",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png",
    health: 350,
    current_health: 350,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon83 = await Pokemon.create({
    name: "Farfetch'd",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png",
    health: 320,
    current_health: 320,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Flying",
  });

  const pokemon84 = await Pokemon.create({
    name: "Doduo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/84.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Flying",
  });

  const pokemon85 = await Pokemon.create({
    name: "Dodrio",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Flying",
  });

  const pokemon86 = await Pokemon.create({
    name: "Seel",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/86.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon87 = await Pokemon.create({
    name: "Dewgong",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/87.png",
    health: 370,
    current_health: 370,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon88 = await Pokemon.create({
    name: "Grimer",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon89 = await Pokemon.create({
    name: "Muk",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png",
    health: 370,
    current_health: 370,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Poison",
  });

  const pokemon90 = await Pokemon.create({
    name: "Shellder",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/90.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ice",
  });

  const pokemon91 = await Pokemon.create({
    name: "Cloyster",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png",
    health: 370,
    current_health: 370,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ice",
  });

  const pokemon92 = await Pokemon.create({
    name: "Gastly",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ghost",
  });

  const pokemon93 = await Pokemon.create({
    name: "Haunter",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png",
    health: 330,
    current_health: 330,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ghost",
  });

  const pokemon94 = await Pokemon.create({
    name: "Gengar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ghost",
  });

  const pokemon95 = await Pokemon.create({
    name: "Onix",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/95.png",
    health: 390,
    current_health: 390,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Rock",
  });

  const pokemon96 = await Pokemon.create({
    name: "Drowzee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Psychic",
  });

  const pokemon97 = await Pokemon.create({
    name: "Hypno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png",
    health: 380,
    current_health: 380,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Psychic",
  });

  const pokemon98 = await Pokemon.create({
    name: "Krabby",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/98.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon99 = await Pokemon.create({
    name: "Kingler",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon100 = await Pokemon.create({
    name: "Voltorb",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Electric",
  });

  const pokemon101 = await Pokemon.create({
    name: "Electrode",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png",
    health: 350,
    current_health: 350,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon102 = await Pokemon.create({
    name: "Exeggcute",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon103 = await Pokemon.create({
    name: "Exeggutor",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png",
    health: 410,
    current_health: 410,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon104 = await Pokemon.create({
    name: "Cubone",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ground",
  });

  const pokemon105 = await Pokemon.create({
    name: "Marowak",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/105.png",
    health: 350,
    current_health: 350,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ground",
  });

  const pokemon106 = await Pokemon.create({
    name: "Hitmonlee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/106.png",
    health: 330,
    current_health: 330,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fighting",
  });

  const pokemon107 = await Pokemon.create({
    name: "Hitmonchan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/107.png",
    health: 330,
    current_health: 330,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fighting",
  });

  const pokemon108 = await Pokemon.create({
    name: "Lickitung",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/108.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon109 = await Pokemon.create({
    name: "Koffing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/109.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Poison",
  });

  const pokemon110 = await Pokemon.create({
    name: "Weezing",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/110.png",
    health: 350,
    current_health: 350,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Poison",
  });

  const pokemon111 = await Pokemon.create({
    name: "Rhyhorn",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/111.png",
    health: 320,
    current_health: 320,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ground",
  });

  const pokemon112 = await Pokemon.create({
    name: "Rhydon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/112.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ground",
  });

  const pokemon113 = await Pokemon.create({
    name: "Chansey",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon114 = await Pokemon.create({
    name: "Tangela",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png",
    health: 350,
    current_health: 350,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon115 = await Pokemon.create({
    name: "Kangaskhan",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png",
    health: 390,
    current_health: 390,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon116 = await Pokemon.create({
    name: "Horsea",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon117 = await Pokemon.create({
    name: "Seadra",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png",
    health: 360,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon118 = await Pokemon.create({
    name: "Goldeen",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon119 = await Pokemon.create({
    name: "Seaking",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png",
    health: 350,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon120 = await Pokemon.create({
    name: "Staryu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon121 = await Pokemon.create({
    name: "Starmie",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png",
    health: 370,
    current_health: 370,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon122 = await Pokemon.create({
    name: "Mr.Mime",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png",
    health: 350,
    current_health: 300,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Psychic",
  });

  const pokemon123 = await Pokemon.create({
    name: "Scyther",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png",
    health: 360,
    current_health: 360,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Bug",
  });

  const pokemon124 = await Pokemon.create({
    name: "Jynx",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png",
    health: 350,
    current_health: 350,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ice",
  });

  const pokemon125 = await Pokemon.create({
    name: "Electabuzz",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png",
    health: 370,
    current_health: 300,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon126 = await Pokemon.create({
    name: "Magmar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png",
    health: 370,
    current_health: 300,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fire",
  });

  const pokemon127 = await Pokemon.create({
    name: "Pinsir",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/127.png",
    health: 350,
    current_health: 300,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Bug",
  });

  const pokemon128 = await Pokemon.create({
    name: "Tauros",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/128.png",
    health: 380,
    current_health: 380,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon129 = await Pokemon.create({
    name: "Magikarp",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon130 = await Pokemon.create({
    name: "Gyarados",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png",
    health: 360,
    current_health: 360,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon131 = await Pokemon.create({
    name: "Lapras",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png",
    health: 420,
    current_health: 420,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ice",
  });

  const pokemon132 = await Pokemon.create({
    name: "Ditto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon133 = await Pokemon.create({
    name: "Eevee",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon134 = await Pokemon.create({
    name: "Vaporeon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon135 = await Pokemon.create({
    name: "Jolteon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon136 = await Pokemon.create({
    name: "Flareon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fire",
  });

  const pokemon137 = await Pokemon.create({
    name: "Porygon",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png",
    health: 350,
    current_health: 300,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon138 = await Pokemon.create({
    name: "Omanyte",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Water",
  });

  const pokemon139 = await Pokemon.create({
    name: "Omastar",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/139.png",
    health: 380,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Water",
  });

  const pokemon140 = await Pokemon.create({
    name: "Kabuto",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/140.png",
    health: 315,
    current_health: 315,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Ground",
  });

  const pokemon141 = await Pokemon.create({
    name: "Kabutops",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/141.png",
    health: 400,
    current_health: 400,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ground",
  });

  const pokemon142 = await Pokemon.create({
    name: "Aerodactyl",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Flying",
  });

  const pokemon143 = await Pokemon.create({
    name: "Snorlax",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
    health: 500,
    current_health: 500,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Normal",
  });

  const pokemon144 = await Pokemon.create({
    name: "Articuno",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png",
    health: 450,
    current_health: 450,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Ice",
  });

  const pokemon145 = await Pokemon.create({
    name: "Zapdos",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/145.png",
    health: 450,
    current_health: 450,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Electric",
  });

  const pokemon146 = await Pokemon.create({
    name: "Moltres",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png",
    health: 450,
    current_health: 450,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fire",
  });

  const pokemon147 = await Pokemon.create({
    name: "Dratini",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png",
    health: 315,
    current_health: 315,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Dragon",
  });

  const pokemon148 = await Pokemon.create({
    name: "Dragonair",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/148.png",
    health: 330,
    current_health: 330,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Dragon",
  });

  const pokemon149 = await Pokemon.create({
    name: "Dragonite",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Dragon",
  });

  const pokemon150 = await Pokemon.create({
    name: "Mewtwo",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
    health: 500,
    current_health: 500,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Psychic",
  });

  const pokemon151 = await Pokemon.create({
    name: "Mew",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png",
    health: 500,
    current_health: 500,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Psychic",
  });

  const pokemon447 = await Pokemon.create({
    name: "Riolu",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/447.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Fighting",
  });

  const pokemon448 = await Pokemon.create({
    name: "Lucario",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Fighting",
  });

  const pokemon252 = await Pokemon.create({
    name: "Treecko",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/252.png",
    health: 300,
    current_health: 300,
    level: 1,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon253 = await Pokemon.create({
    name: "Grovyle",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/253.png",
    health: 350,
    current_health: 350,
    level: 15,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: false,
    type: "Grass",
  });

  const pokemon254 = await Pokemon.create({
    name: "Sceptile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/254.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const pokemon255 = await Pokemon.create({
    name: "Sceptile",
    frontImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    backImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/254.png",
    health: 400,
    current_health: 400,
    level: 30,
    total_experience: 300,
    current_experience: 0,
    fullyEvolved: true,
    type: "Grass",
  });

  const tackle = [];
  const ember = [];
  const flameThrower = [];
  const razorLeaf = [];
  const vineWhip = [];
  const waterGun = [];
  const surf = [];
  const takeDown = [];
  const thunderBolt = [];
  const quickAttack = [];
  const swift = [];
  const psywave = [];
  const rockThrow = [];
  const wingAttack = [];
  const toxic = [];
  const acid = [];
  const confusion = [];

  for (let i = 0; i <= 150; i++) {
    const j = await Move.create({
      name: "Tackle",
      attack: 35,
      animation:
        "https://i.ya-webdesign.com/images/transparent-laser-animated-16.gif",
      type: "Normal",
    });

    tackle.push(j);
  }
  for (let i = 0; i <= 50; i++) {
    const s = await Move.create({
      name: "Quick Attack",
      attack: 45,
      animation:
        "https://i.ya-webdesign.com/images/transparent-laser-animated-16.gif",
      type: "Normal",
    });

    quickAttack.push(s);
  }

  for (let i = 0; i < 26; i++) {
    const o = await Move.create({
      name: "Water Gun",
      attack: 55,
      animation:
        "https://thumbs.gfycat.com/InformalWellwornCockroach-small.gif",
      type: "Water",
    });
    waterGun.push(o);
  }

  for (let i = 0; i < 30; i++) {
    const k = await Move.create({
      name: "ember",
      attack: 55,
      animation:
        "https://i.pinimg.com/originals/29/ca/76/29ca767e0d917e541cd18eb97f4825dc.gif",
      type: "Fire",
    });

    const l = await Move.create({
      name: "Flame Thrower",
      attack: 65,
      animation: "https://i.gifer.com/3q62.gif",
      type: "Fire",
    });

    const m = await Move.create({
      name: "Razor Leaf",
      attack: 65,
      animation:
        "https://thumbs.gfycat.com/PlumpKnobbyArmednylonshrimp-size_restricted.gif",
      type: "Grass",
    });

    const n = await Move.create({
      name: "Vine Whip",
      attack: 55,
      animation: "https://i.imgur.com/uDJiGRk.gif",
      type: "Grass",
    });

    const p = await Move.create({
      name: "Surf",
      attack: 65,
      animation:
        "https://webstockreview.net/images/clipart-mountain-ocean-1.gif",
      type: "Water",
    });

    const q = await Move.create({
      name: "Take Down",
      attack: 55,
      animation:
        "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
      type: "Normal",
    });

    const r = await Move.create({
      name: "Thunder Bolt",
      attack: 65,
      animation: "https://media3.giphy.com/media/ebQMQkzmJNT7G/source.gif",
      type: "Electric",
    });

    const t = await Move.create({
      name: "Swift",
      attack: 60,
      animation: "https://media.giphy.com/media/SqBY4RuIlJAHTZ2Sp0/giphy.gif",
      type: "Normal",
    });

    const u = await Move.create({
      name: "Psywave",
      attack: 60,
      animation:
        "https://i.ya-webdesign.com/images/projectile-sprite-png-15.gif",
      type: "Psychic",
    });

    const v = await Move.create({
      name: "Rock Throw",
      attack: 55,
      animation:
        "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
      type: "Rock",
    });

    const w = await Move.create({
      name: "Wing Attack",
      attack: 60,
      animation: "https://i.gifer.com/Yrhh.gif",
      type: "Flying",
    });

    const x = await Move.create({
      name: "Toxic",
      attack: 75,
      animation: "https://i.gifer.com/OupZ.gif",
      type: "Poison",
    });

    const y = await Move.create({
      name: "Acid",
      attack: 55,
      animation: "https://i.gifer.com/OupZ.gif",
      type: "Poison",
    });

    const z = await Move.create({
      name: "Confusion",
      attack: 55,
      animation: "https://i.gifer.com/OupZ.gif",
      type: "Psychic",
    });

    ember.push(k);
    flameThrower.push(l);
    razorLeaf.push(m);
    vineWhip.push(n);
    surf.push(p);
    takeDown.push(q);
    thunderBolt.push(r);
    swift.push(t);
    psywave.push(u);
    rockThrow.push(v);
    wingAttack.push(w);
    toxic.push(x);
    acid.push(y);
    confusion.push(z);
  }

  const overHeat = await Move.create({
    name: "Over Heat",
    attack: 600,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fire",
  });

  const fireBlast = await Move.create({
    name: "Fire Blast",
    attack: 120,
    animation:
      "https://i.ya-webdesign.com/images/transparent-explosions-animated-gif-4.gif",
    type: "Fire",
  });

  const fireBlast1 = await Move.create({
    name: "Fire Blast",
    attack: 120,
    animation:
      "https://i.ya-webdesign.com/images/transparent-explosions-animated-gif-4.gif",
    type: "Fire",
  });

  const solarBeam = await Move.create({
    name: "Solar Beam",
    attack: 120,
    animation: "https://media3.giphy.com/media/11XU8sAwhvwjok/source.gif",
    type: "Grass",
  });

  const solarBeam1 = await Move.create({
    name: "Solar Beam",
    attack: 120,
    animation: "https://media3.giphy.com/media/11XU8sAwhvwjok/source.gif",
    type: "Grass",
  });

  const solarBeam2 = await Move.create({
    name: "Solar Beam",
    attack: 120,
    animation: "https://media3.giphy.com/media/11XU8sAwhvwjok/source.gif",
    type: "Grass",
  });

  const hydroPump = await Move.create({
    name: "Hydro Pump",
    attack: 120,
    animation:
      "https://gifimage.net/wp-content/uploads/2018/10/aura-gif-transparent-6.gif",
    type: "Water",
  });

  const hydroPump1 = await Move.create({
    name: "Hydro Pump",
    attack: 120,
    animation:
      "https://gifimage.net/wp-content/uploads/2018/10/aura-gif-transparent-6.gif",
    type: "Water",
  });

  const hydroPump2 = await Move.create({
    name: "Hydro Pump",
    attack: 120,
    animation:
      "https://gifimage.net/wp-content/uploads/2018/10/aura-gif-transparent-6.gif",
    type: "Water",
  });

  const seismicToss = await Move.create({
    name: "Seismic Toss",
    attack: 55,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const seismicToss1 = await Move.create({
    name: "Seismic Toss",
    attack: 55,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const seismicToss2 = await Move.create({
    name: "Seismic Toss",
    attack: 55,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const seismicToss3 = await Move.create({
    name: "Seismic Toss",
    attack: 55,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const seismicToss4 = await Move.create({
    name: "Seismic Toss",
    attack: 75,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const seismicToss5 = await Move.create({
    name: "Seismic Toss",
    attack: 55,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const thunder = await Move.create({
    name: "Thunder",
    attack: 120,
    animation: "https://i.gifer.com/4bXG.gif",
    type: "Electric",
  });

  const thunder1 = await Move.create({
    name: "Thunder",
    attack: 120,
    animation: "https://i.gifer.com/4bXG.gif",
    type: "Electric",
  });

  const skyAttack = await Move.create({
    name: "Sky Attack",
    attack: 100,
    animation:
      "https://thumbs.gfycat.com/OffbeatEqualAlligatorgar-size_restricted.gif",
    type: "Flying",
  });

  const skyAttack1 = await Move.create({
    name: "Sky Attack",
    attack: 100,
    animation:
      "https://thumbs.gfycat.com/OffbeatEqualAlligatorgar-size_restricted.gif",
    type: "Flying",
  });

  const skyAttack2 = await Move.create({
    name: "Sky Attack",
    attack: 100,
    animation:
      "https://thumbs.gfycat.com/OffbeatEqualAlligatorgar-size_restricted.gif",
    type: "Flying",
  });

  const skyAttack3 = await Move.create({
    name: "Sky Attack",
    attack: 100,
    animation:
      "https://thumbs.gfycat.com/OffbeatEqualAlligatorgar-size_restricted.gif",
    type: "Flying",
  });

  const iceBeam1 = await Move.create({
    name: "Ice Beam",
    attack: 100,
    animation:
      "https://gifimage.net/wp-content/uploads/2017/11/fiocchi-di-neve-gif.gif",
    type: "Ice",
  });

  const iceBeam2 = await Move.create({
    name: "Ice Beam",
    attack: 100,
    animation:
      "https://gifimage.net/wp-content/uploads/2017/11/fiocchi-di-neve-gif.gif",
    type: "Ice",
  });

  const iceBeam3 = await Move.create({
    name: "Ice Beam",
    attack: 100,
    animation:
      "https://gifimage.net/wp-content/uploads/2017/11/fiocchi-di-neve-gif.gif",
    type: "Ice",
  });

  const iceBeam4 = await Move.create({
    name: "Ice Beam",
    attack: 100,
    animation:
      "https://gifimage.net/wp-content/uploads/2017/11/fiocchi-di-neve-gif.gif",
    type: "Ice",
  });

  const iceBeam5 = await Move.create({
    name: "Ice Beam",
    attack: 100,
    animation:
      "https://gifimage.net/wp-content/uploads/2017/11/fiocchi-di-neve-gif.gif",
    type: "Ice",
  });

  const blizzard = await Move.create({
    name: "Blizzard",
    attack: 120,
    animation:
      "https://gifimage.net/wp-content/uploads/2018/10/aura-gif-transparent-6.gif",
    type: "Ice",
  });

  const blizzard1 = await Move.create({
    name: "Blizzard",
    attack: 120,
    animation:
      "https://gifimage.net/wp-content/uploads/2018/10/aura-gif-transparent-6.gif",
    type: "Ice",
  });

  const icePunch = await Move.create({
    name: "Ice Punch",
    attack: 55,
    animation: "https://i.ya-webdesign.com/images/anime-effects-png-11.png",
    type: "Ice",
  });

  const icePunch1 = await Move.create({
    name: "Ice Punch",
    attack: 55,
    animation: "https://i.ya-webdesign.com/images/anime-effects-png-11.png",
    type: "Ice",
  });

  const icePunch2 = await Move.create({
    name: "Ice Punch",
    attack: 55,
    animation: "https://i.ya-webdesign.com/images/anime-effects-png-11.png",
    type: "Ice",
  });

  const icePunch3 = await Move.create({
    name: "Ice Punch",
    attack: 55,
    animation: "https://i.ya-webdesign.com/images/anime-effects-png-11.png",
    type: "Ice",
  });

  const icePunch4 = await Move.create({
    name: "Ice Punch",
    attack: 75,
    animation: "https://i.ya-webdesign.com/images/anime-effects-png-11.png",
    type: "Ice",
  });

  const icePunch5 = await Move.create({
    name: "Ice Punch",
    attack: 65,
    animation: "https://i.ya-webdesign.com/images/anime-effects-png-11.png",
    type: "Ice",
  });

  const thunderPunch = await Move.create({
    name: "Thunder Punch",
    attack: 55,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const thunderPunch1 = await Move.create({
    name: "Thunder Punch",
    attack: 55,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const thunderPunch2 = await Move.create({
    name: "Thunder Punch",
    attack: 55,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const thunderPunch3 = await Move.create({
    name: "Thunder Punch",
    attack: 55,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const thunderPunch4 = await Move.create({
    name: "Thunder Punch",
    attack: 65,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const thunderPunch5 = await Move.create({
    name: "Thunder Punch",
    attack: 55,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const thunderPunch6 = await Move.create({
    name: "Thunder Punch",
    attack: 55,
    animation:
      "https://cdn.clipart.email/93f1b9a2daec43c858e53c182ea1c85a_blast-vector-gif-animation-transparent-png-clipart-free-download-_933-633.gif",
    type: "Electric",
  });

  const highJumpKick = await Move.create({
    name: "High Jump Kick",
    attack: 90,
    animation:
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110",
    type: "Fighting",
  });

  const psychic = await Move.create({
    name: "Psychic",
    attack: 120,
    animation:
      "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif",
    type: "Psychic",
  });

  const psychic1 = await Move.create({
    name: "Psychic",
    attack: 120,
    animation:
      "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif",
    type: "Psychic",
  });

  const psychic2 = await Move.create({
    name: "Psychic",
    attack: 120,
    animation:
      "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif",
    type: "Psychic",
  });

  const psychic3 = await Move.create({
    name: "Psychic",
    attack: 300,
    animation:
      "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif",
    type: "Psychic",
  });

  const shadowBall = await Move.create({
    name: "Shadow Ball",
    attack: 75,
    animation:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/96269ce8-4a07-4702-936a-6860e1b5594f/dc62zhb-097d58db-0e51-4e7e-b3b4-8cee199d08a4.png/v1/fit/w_150,h_150,strp/shadow_ball__redesign__by_venjix5_dc62zhb-150.png",
    type: "Ghost",
  });

  const shadowBall1 = await Move.create({
    name: "Shadow Ball",
    attack: 90,
    animation:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/96269ce8-4a07-4702-936a-6860e1b5594f/dc62zhb-097d58db-0e51-4e7e-b3b4-8cee199d08a4.png/v1/fit/w_150,h_150,strp/shadow_ball__redesign__by_venjix5_dc62zhb-150.png",
    type: "Ghost",
  });

  const slash = await Move.create({
    name: "Slash",
    attack: 90,
    animation: "https://i.ya-webdesign.com/images/slash-effect-png-9.png",
    type: "Normal",
  });

  const slash1 = await Move.create({
    name: "Slash",
    attack: 90,
    animation:
      "https://66.media.tumblr.com/ed6d6a2f4d43803c8b5224aa1504a094/tumblr_inline_nw7vgi8EQy1s7k44n_540.gifv",
    type: "Normal",
  });

  const slash2 = await Move.create({
    name: "Slash",
    attack: 90,
    animation:
      "https://66.media.tumblr.com/ed6d6a2f4d43803c8b5224aa1504a094/tumblr_inline_nw7vgi8EQy1s7k44n_540.gifv",
    type: "Normal",
  });

  const slash4 = await Move.create({
    name: "Slash",
    attack: 90,
    animation:
      "https://66.media.tumblr.com/ed6d6a2f4d43803c8b5224aa1504a094/tumblr_inline_nw7vgi8EQy1s7k44n_540.gifv",
    type: "Normal",
  });

  const slash3 = await Move.create({
    name: "Slash",
    attack: 90,
    animation:
      "https://66.media.tumblr.com/ed6d6a2f4d43803c8b5224aa1504a094/tumblr_inline_nw7vgi8EQy1s7k44n_540.gifv",
    type: "Normal",
  });

  const slash6 = await Move.create({
    name: "Slash",
    attack: 90,
    animation:
      "https://66.media.tumblr.com/ed6d6a2f4d43803c8b5224aa1504a094/tumblr_inline_nw7vgi8EQy1s7k44n_540.gifv",
    type: "Normal",
  });

  const slash7 = await Move.create({
    name: "Slash",
    attack: 90,
    animation:
      "https://66.media.tumblr.com/ed6d6a2f4d43803c8b5224aa1504a094/tumblr_inline_nw7vgi8EQy1s7k44n_540.gifv",
    type: "Normal",
  });

  const gust = await Move.create({
    name: "Gust",
    attack: 65,
    animation: "https://thumbs.gfycat.com/RaggedMixedBlackfly-max-1mb.gif",
    type: "Flying",
  });

  const gust1 = await Move.create({
    name: "Gust",
    attack: 65,
    animation: "https://thumbs.gfycat.com/RaggedMixedBlackfly-max-1mb.gif",
    type: "Flying",
  });

  const gust2 = await Move.create({
    name: "Gust",
    attack: 65,
    animation: "https://thumbs.gfycat.com/RaggedMixedBlackfly-max-1mb.gif",
    type: "Flying",
  });

  const gust3 = await Move.create({
    name: "Gust",
    attack: 65,
    animation: "https://thumbs.gfycat.com/RaggedMixedBlackfly-max-1mb.gif",
    type: "Flying",
  });

  const gust4 = await Move.create({
    name: "Gust",
    attack: 50,
    animation: "https://thumbs.gfycat.com/RaggedMixedBlackfly-max-1mb.gif",
    type: "Flying",
  });

  const peck = await Move.create({
    name: "Peck",
    attack: 35,
    animation: "https://i.imgur.com/C2TBZZE.gif",
    type: "Flying",
  });

  const peck1 = await Move.create({
    name: "Peck",
    attack: 35,
    animation: "https://i.imgur.com/C2TBZZE.gif",
    type: "Flying",
  });

  const earthQuake = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const mudSlap1 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap2 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap3 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap4 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap5 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap6 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap7 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap8 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const mudSlap9 = await Move.create({
    name: "Mud Slap",
    attack: 55,
    animation:
      "https://cdn.clipart.email/6509a46f26db40f00ce876df17758083_free-png-mud-transparent-mudpng-images-pluspng_299-243.png",
    type: "Ground",
  });

  const earthQuake1 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake2 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake3 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake4 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake5 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake6 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake7 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const earthQuake8 = await Move.create({
    name: "Earth Quake",
    attack: 120,
    animation:
      "https://cdn.clipart.email/2bb6cad1e3152775c39760e8f4999e64_explosion-animated-gif-clipart-best-transparent-explosion-gif-lowgif_2000-2000.gif",
    type: "Ground",
  });

  const rockSlide = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide1 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide2 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide3 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide4 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide5 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide6 = await Move.create({
    name: "Rock Slide",
    attack: 75,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide7 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const rockSlide8 = await Move.create({
    name: "Rock Slide",
    attack: 65,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const stoneEdge1 = await Move.create({
    name: "Stone Edge",
    attack: 100,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const stoneEdge2 = await Move.create({
    name: "Stone Edge",
    attack: 100,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const stoneEdge3 = await Move.create({
    name: "Stone Edge",
    attack: 100,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const stoneEdge4 = await Move.create({
    name: "Stone Edge",
    attack: 100,
    animation:
      "https://i.ya-webdesign.com/images/boulder-drawing-broken-rock-6.gif",
    type: "Rock",
  });

  const hyperBeam = await Move.create({
    name: "Hyper Beam",
    attack: 150,
    animation: "https://media2.giphy.com/media/dphDDCpGfzJPq/source.gif",
    type: "Normal",
  });

  const hyperBeam1 = await Move.create({
    name: "Hyper Beam",
    attack: 150,
    animation: "https://media2.giphy.com/media/dphDDCpGfzJPq/source.gif",
    type: "Normal",
  });

  const dragonRage = await Move.create({
    name: "Dragon Rage",
    attack: 55,
    animation:
      "https://orangemushroom.files.wordpress.com/2016/07/demon-awakening-effect-slash-1.gif?w=400",
    type: "Dragon",
  });

  const dragonRage1 = await Move.create({
    name: "Dragon Rage",
    attack: 55,
    animation:
      "https://orangemushroom.files.wordpress.com/2016/07/demon-awakening-effect-slash-1.gif?w=400",
    type: "Dragon",
  });

  const dragonRage2 = await Move.create({
    name: "Dragon Rage",
    attack: 55,
    animation:
      "https://orangemushroom.files.wordpress.com/2016/07/demon-awakening-effect-slash-1.gif?w=400",
    type: "Dragon",
  });

  const dragonClaw = await Move.create({
    name: "Dragon Claw",
    attack: 90,
    animation: "https://i.dlpng.com/static/png/201045_preview.png",
    type: "Dragon",
  });

  const dragonClaw1 = await Move.create({
    name: "Dragon Claw",
    attack: 90,
    animation: "https://i.dlpng.com/static/png/201045_preview.png",
    type: "Dragon",
  });

  const dragonClaw2 = await Move.create({
    name: "Dragon Claw",
    attack: 90,
    animation: "https://i.ya-webdesign.com/images/slash-effect-png-9.png",
    type: "Dragon",
  });

  const dragonClaw3 = await Move.create({
    name: "Dragon Claw",
    attack: 90,
    animation: "https://i.dlpng.com/static/png/201045_preview.png",
    type: "Dragon",
  });

  const dragonClaw4 = await Move.create({
    name: "Dragon Claw",
    attack: 90,
    animation: "https://i.dlpng.com/static/png/201045_preview.png",
    type: "Dragon",
  });

  const dragonClaw5 = await Move.create({
    name: "Dragon Claw",
    attack: 90,
    animation: "https://i.dlpng.com/static/png/201045_preview.png",
    type: "Dragon",
  });

  const dragonRush = await Move.create({
    name: "Dragon Rush",
    attack: 100,
    animation:
      "https://pa1.narvii.com/6881/3e2030d2b7d2ffe47e7fd0fa6fea2b7ce27f43fdr1-350-500_hq.gif",
    type: "Dragon",
  });

  const dragonRush1 = await Move.create({
    name: "Dragon Rush",
    attack: 100,
    animation:
      "https://pa1.narvii.com/6881/3e2030d2b7d2ffe47e7fd0fa6fea2b7ce27f43fdr1-350-500_hq.gif",
    type: "Dragon",
  });

  const nightShade = await Move.create({
    name: "Night Shade",
    attack: 100,
    animation:
      "https://thumbs.gfycat.com/SickEnchantingAdamsstaghornedbeetle-small.gif",
    type: "Ghost",
  });

  const auraSphere = await Move.create({
    name: "Aura Sphere",
    attack: 80,
    animation: "https://i.ya-webdesign.com/images/transparent-orb-magic-11.gif",
    type: "Fighting",
  });

  const forcePalm = await Move.create({
    name: "Force Palm",
    attack: 120,
    animation: "https://media0.giphy.com/media/1msyF7j2886WrEV1mR/source.gif",
    type: "Fighting",
  });

  const boneRush = await Move.create({
    name: "Bone Rush",
    attack: 90,
    animation: "https://i.ya-webdesign.com/images/slash-effect-png-9.png",
    type: "Ground",
  });

  const leafStorm = await Move.create({
    name: "Leaf Storm",
    attack: 120,
    animation:
      "https://thumbs.gfycat.com/PlumpKnobbyArmednylonshrimp-size_restricted.gif",
    type: "Grass",
  });

  const leafBlade = await Move.create({
    name: "Leaf Blade",
    attack: 90,
    animation: "https://i.ya-webdesign.com/images/transparent-laser-shot-6.gif",
    type: "Grass",
  });

  const leafBlade1 = await Move.create({
    name: "Leaf Blade",
    attack: 90,
    animation: "https://i.ya-webdesign.com/images/transparent-laser-shot-6.gif",
    type: "Grass",
  });

  const xScissor = await Move.create({
    name: "X-Scissor",
    attack: 90,
    animation:
      "https://images.vexels.com/media/users/3/155299/isolated/preview/1988d1faba4d059eb4461d955af5cf61-x-mark-scribble-by-vexels.png",
    type: "Bug",
  });

  const xScissor1 = await Move.create({
    name: "X-Scissor",
    attack: 90,
    animation:
      "https://images.vexels.com/media/users/3/155299/isolated/preview/1988d1faba4d059eb4461d955af5cf61-x-mark-scribble-by-vexels.png",
    type: "Bug",
  });

  const dreamEater = await Move.create({
    name: "Dream Eater",
    attack: 100,
    animation:
      "https://i.pinimg.com/originals/55/f0/c0/55f0c002c2627af58ccaaf11d3bc4c41.gif",
    type: "Psychic",
  });

  const dummy = await Move.create({
    name: "Dummy",
    attack: 1200,
    animation: "",
    type: "Fire",
  });

  await pokemon1.addMove(tackle[0]);
  await pokemon1.addMove(vineWhip[0]);

  await pokemon2.addMove(tackle[1]);
  await pokemon2.addMove(razorLeaf[1]);
  await pokemon2.addMove(vineWhip[1]);

  await pokemon3.addMove(tackle[2]);
  await pokemon3.addMove(razorLeaf[2]);
  await pokemon3.addMove(vineWhip[2]);
  await pokemon3.addMove(solarBeam1);
  await pokemon3.addMove(stoneEdge1);
  await pokemon3.addMove(earthQuake5);

  await pokemon4.addMove(tackle[3]);
  await pokemon4.addMove(ember[1]);

  await pokemon5.addMove(tackle[4]);
  await pokemon5.addMove(ember[2]);
  await pokemon5.addMove(flameThrower[1]);

  await pokemon6.addMove(tackle[5]);
  await pokemon6.addMove(ember[3]);
  await pokemon6.addMove(flameThrower[2]);
  await pokemon6.addMove(fireBlast);
  await pokemon6.addMove(dragonClaw5);
  await pokemon6.addMove(thunderPunch4);
  await pokemon6.addMove(slash1);
  await pokemon6.addMove(dragonRush1);

  await pokemon7.addMove(tackle[6]);
  await pokemon7.addMove(waterGun[0]);

  await pokemon8.addMove(tackle[7]);
  await pokemon8.addMove(waterGun[1]);
  await pokemon8.addMove(surf[0]);

  await pokemon9.addMove(tackle[8]);
  await pokemon9.addMove(waterGun[2]);
  await pokemon9.addMove(surf[1]);
  await pokemon9.addMove(hydroPump);
  await pokemon9.addMove(icePunch4);
  await pokemon9.addMove(takeDown[16]);

  await pokemon54.addMove(tackle[9]);
  await pokemon54.addMove(waterGun[3]);

  await pokemon55.addMove(tackle[10]);
  await pokemon55.addMove(waterGun[4]);
  await pokemon55.addMove(confusion[0]);
  await pokemon55.addMove(surf[2]);

  await pokemon60.addMove(tackle[11]);
  await pokemon60.addMove(waterGun[5]);

  await pokemon60.addMove(tackle[12]);
  await pokemon60.addMove(waterGun[6]);
  await pokemon60.addMove(quickAttack[0]);

  await pokemon61.addMove(tackle[13]);
  await pokemon61.addMove(waterGun[7]);
  await pokemon61.addMove(icePunch);
  await pokemon61.addMove(hydroPump1);

  await pokemon72.addMove(tackle[14]);
  await pokemon72.addMove(acid[0]);

  await pokemon73.addMove(tackle[15]);
  await pokemon73.addMove(waterGun[8]);
  await pokemon73.addMove(acid[1]);
  await pokemon73.addMove(surf[3]);

  await pokemon79.addMove(tackle[16]);
  await pokemon79.addMove(confusion[1]);

  await pokemon80.addMove(tackle[17]);
  await pokemon80.addMove(confusion[2]);
  await pokemon80.addMove(surf[4]);

  await pokemon90.addMove(tackle[18]);
  await pokemon90.addMove(waterGun[9]);

  await pokemon91.addMove(tackle[19]);
  await pokemon91.addMove(waterGun[10]);
  await pokemon91.addMove(iceBeam1);

  await pokemon98.addMove(tackle[20]);
  await pokemon98.addMove(waterGun[11]);

  await pokemon99.addMove(tackle[21]);
  await pokemon99.addMove(waterGun[12]);
  await pokemon99.addMove(quickAttack[1]);

  await pokemon117.addMove(tackle[22]);
  await pokemon117.addMove(waterGun[13]);
  await pokemon117.addMove(surf[5]);

  await pokemon116.addMove(tackle[23]);
  await pokemon116.addMove(waterGun[14]);

  await pokemon118.addMove(tackle[24]);
  await pokemon118.addMove(waterGun[15]);

  await pokemon119.addMove(tackle[25]);
  await pokemon119.addMove(waterGun[16]);
  await pokemon119.addMove(surf[6]);

  await pokemon120.addMove(tackle[26]);
  await pokemon120.addMove(waterGun[17]);

  await pokemon121.addMove(tackle[27]);
  await pokemon121.addMove(waterGun[18]);
  await pokemon121.addMove(quickAttack[2]);

  await pokemon129.addMove(tackle[28]);

  await pokemon130.addMove(tackle[29]);
  await pokemon130.addMove(surf[7]);
  await pokemon130.addMove(takeDown[0]);
  await pokemon130.addMove(hyperBeam);
  await pokemon130.addMove(hydroPump2);

  await pokemon131.addMove(tackle[30]);
  await pokemon131.addMove(waterGun[19]);
  await pokemon131.addMove(iceBeam2);
  await pokemon131.addMove(blizzard);

  await pokemon134.addMove(quickAttack[3]);
  await pokemon134.addMove(waterGun[20]);
  await pokemon134.addMove(tackle[31]);
  await pokemon134.addMove(iceBeam3);

  await pokemon138.addMove(tackle[32]);
  await pokemon138.addMove(waterGun[21]);

  await pokemon139.addMove(tackle[33]);
  await pokemon139.addMove(waterGun[22]);
  await pokemon139.addMove(rockThrow[0]);

  await pokemon140.addMove(tackle[34]);
  await pokemon140.addMove(waterGun[23]);

  await pokemon141.addMove(tackle[35]);
  await pokemon141.addMove(waterGun[24]);
  await pokemon141.addMove(rockSlide);

  await pokemon10.addMove(tackle[140]);

  await pokemon11.addMove(tackle[36]);

  await pokemon12.addMove(tackle[37]);
  await pokemon12.addMove(gust);
  await pokemon12.addMove(solarBeam);

  await pokemon13.addMove(tackle[38]);

  await pokemon14.addMove(tackle[39]);

  await pokemon15.addMove(tackle[40]);
  await pokemon15.addMove(toxic[0]);
  await pokemon15.addMove(quickAttack[4]);

  await pokemon16.addMove(tackle[41]);

  await pokemon17.addMove(tackle[42]);
  await pokemon17.addMove(gust1);

  await pokemon18.addMove(quickAttack[46]);
  await pokemon18.addMove(gust2);
  await pokemon18.addMove(wingAttack);

  await pokemon19.addMove(tackle[44]);

  await pokemon20.addMove(tackle[45]);
  await pokemon20.addMove(quickAttack[5]);
  await pokemon20.addMove(takeDown[1]);

  await pokemon21.addMove(peck);

  await pokemon22.addMove(quickAttack[6]);
  await pokemon22.addMove(peck1);
  await pokemon22.addMove(wingAttack);

  await pokemon23.addMove(tackle[46]);

  await pokemon24.addMove(tackle[47]);
  await pokemon24.addMove(toxic[1]);
  await pokemon24.addMove(acid[2]);

  await pokemon25.addMove(quickAttack[7]);
  await pokemon25.addMove(thunder);
  await pokemon25.addMove(thunderBolt[0]);
  await pokemon25.addMove(swift[10]);

  await pokemon26.addMove(quickAttack[8]);
  await pokemon26.addMove(thunderBolt[1]);
  await pokemon26.addMove(thunder1);

  await pokemon27.addMove(tackle[48]);
  await pokemon27.addMove(mudSlap1);

  await pokemon28.addMove(tackle[49]);
  await pokemon28.addMove(rockThrow[2]);
  await pokemon28.addMove(earthQuake);

  await pokemon29.addMove(tackle[50]);
  await pokemon29.addMove(mudSlap4);

  await pokemon30.addMove(tackle[51]);
  await pokemon30.addMove(toxic[2]);
  await pokemon29.addMove(mudSlap5);

  await pokemon31.addMove(tackle[52]);
  await pokemon31.addMove(toxic[3]);
  await pokemon31.addMove(acid[3]);
  await pokemon31.addMove(earthQuake1);
  await pokemon31.addMove(rockSlide6);

  await pokemon32.addMove(tackle[55]);
  await pokemon32.addMove(mudSlap7);

  await pokemon33.addMove(tackle[54]);
  await pokemon33.addMove(acid[4]);
  await pokemon33.addMove(mudSlap8);

  await pokemon34.addMove(toxic[4]);
  await pokemon34.addMove(acid[5]);
  await pokemon34.addMove(earthQuake2);
  await pokemon34.addMove(rockSlide8);
  await pokemon34.addMove(mudSlap9);

  await pokemon35.addMove(tackle[56]);
  await pokemon35.addMove(quickAttack[39]);

  await pokemon36.addMove(tackle[57]);
  await pokemon36.addMove(swift[0]);
  await pokemon36.addMove(takeDown[2]);

  await pokemon37.addMove(quickAttack[9]);
  await pokemon37.addMove(ember[4]);

  await pokemon38.addMove(quickAttack[10]);
  await pokemon38.addMove(ember[5]);
  await pokemon38.addMove(flameThrower[3]);

  await pokemon39.addMove(tackle[58]);
  await pokemon39.addMove(quickAttack[40]);

  await pokemon40.addMove(tackle[59]);
  await pokemon40.addMove(swift[1]);
  await pokemon40.addMove(takeDown[3]);

  await pokemon41.addMove(tackle[60]);
  await pokemon41.addMove(gust3);

  await pokemon42.addMove(tackle[61]);
  await pokemon42.addMove(gust4);
  await pokemon42.addMove(toxic[5]);

  await pokemon43.addMove(tackle[62]);
  await pokemon43.addMove(vineWhip[7]);

  await pokemon44.addMove(tackle[63]);
  await pokemon44.addMove(toxic[6]);

  await pokemon45.addMove(tackle[64]);
  await pokemon45.addMove(toxic[7]);
  await pokemon45.addMove(razorLeaf[3]);
  await pokemon45.addMove(solarBeam2);

  await pokemon46.addMove(tackle[65]);

  await pokemon47.addMove(tackle[66]);
  await pokemon47.addMove(razorLeaf[4]);
  await pokemon47.addMove(vineWhip[8]);

  await pokemon48.addMove(tackle[67]);
  await pokemon49.addMove(quickAttack[37]);

  await pokemon49.addMove(tackle[68]);
  await pokemon49.addMove(toxic[8]);
  await pokemon49.addMove(quickAttack[11]);

  await pokemon50.addMove(tackle[69]);
  await pokemon50.addMove(mudSlap2);

  await pokemon51.addMove(tackle[70]);
  await pokemon51.addMove(rockThrow[4]);
  await pokemon51.addMove(rockSlide1);

  await pokemon52.addMove(tackle[71]);
  await pokemon52.addMove(quickAttack[41]);

  await pokemon53.addMove(tackle[72]);
  await pokemon53.addMove(slash2);
  await pokemon53.addMove(quickAttack[12]);

  await pokemon56.addMove(tackle[73]);
  await pokemon56.addMove(quickAttack[38]);

  await pokemon57.addMove(tackle[74]);
  await pokemon57.addMove(seismicToss);
  await pokemon57.addMove(quickAttack[13]);
  await pokemon57.addMove(slash3);

  await pokemon58.addMove(quickAttack[14]);
  await pokemon58.addMove(ember[6]);

  await pokemon59.addMove(quickAttack[15]);
  await pokemon59.addMove(ember[7]);
  await pokemon59.addMove(flameThrower[4]);
  await pokemon59.addMove(fireBlast1);

  await pokemon63.addMove(tackle[75]);

  await pokemon64.addMove(tackle[76]);
  await pokemon64.addMove(psywave[0]);
  await pokemon64.addMove(swift[2]);

  await pokemon65.addMove(tackle[77]);
  await pokemon65.addMove(psywave[1]);
  await pokemon65.addMove(swift[3]);
  await pokemon65.addMove(psychic);

  await pokemon66.addMove(tackle[78]);

  await pokemon67.addMove(tackle[79]);
  await pokemon67.addMove(takeDown[4]);
  await pokemon67.addMove(quickAttack[16]);

  await pokemon68.addMove(tackle[80]);
  await pokemon68.addMove(takeDown[5]);
  await pokemon68.addMove(quickAttack[17]);
  await pokemon68.addMove(seismicToss1);

  await pokemon69.addMove(tackle[81]);

  await pokemon70.addMove(tackle[82]);
  await pokemon70.addMove(vineWhip[3]);

  await pokemon71.addMove(tackle[83]);
  await pokemon71.addMove(vineWhip[4]);
  await pokemon71.addMove(toxic[9]);
  await pokemon71.addMove(razorLeaf[5]);
  await pokemon71.addMove(leafBlade1);

  await pokemon74.addMove(rockThrow[19]);

  await pokemon75.addMove(tackle[85]);
  await pokemon75.addMove(rockThrow[5]);

  await pokemon76.addMove(tackle[86]);
  await pokemon76.addMove(rockThrow[6]);
  await pokemon76.addMove(rockSlide2);
  await pokemon76.addMove(earthQuake6);

  await pokemon77.addMove(tackle[87]);
  await pokemon77.addMove(ember[8]);

  await pokemon78.addMove(tackle[88]);
  await pokemon78.addMove(quickAttack[18]);
  await pokemon78.addMove(flameThrower[5]);

  await pokemon81.addMove(tackle[89]);

  await pokemon82.addMove(tackle[90]);
  await pokemon82.addMove(thunderBolt[2]);
  await pokemon82.addMove(quickAttack[42]);

  await pokemon83.addMove(tackle[91]);
  await pokemon83.addMove(quickAttack[19]);
  await pokemon83.addMove(wingAttack);

  await pokemon84.addMove(tackle[92]);
  await pokemon84.addMove(quickAttack[20]);

  await pokemon85.addMove(tackle[93]);
  await pokemon85.addMove(quickAttack[21]);
  await pokemon85.addMove(wingAttack);

  await pokemon86.addMove(tackle[94]);
  await pokemon86.addMove(surf[8]);

  await pokemon87.addMove(tackle[95]);
  await pokemon87.addMove(waterGun[25]);
  await pokemon87.addMove(blizzard1);
  await pokemon87.addMove(iceBeam4);

  await pokemon88.addMove(tackle[96]);
  await pokemon88.addMove(acid[6]);

  await pokemon89.addMove(tackle[97]);
  await pokemon89.addMove(acid[7]);
  await pokemon89.addMove(toxic[10]);

  await pokemon92.addMove(tackle[98]);
  await pokemon92.addMove(acid[10]);

  await pokemon93.addMove(quickAttack[22]);
  await pokemon93.addMove(acid[11]);
  await pokemon93.addMove(shadowBall);

  await pokemon94.addMove(toxic[11]);
  await pokemon93.addMove(acid[12]);
  await pokemon94.addMove(shadowBall1);
  await pokemon94.addMove(nightShade);
  await pokemon94.addMove(thunderPunch6);
  await pokemon94.addMove(dreamEater);

  await pokemon95.addMove(tackle[100]);
  await pokemon95.addMove(rockSlide3);
  await pokemon95.addMove(rockThrow[7]);
  await pokemon95.addMove(earthQuake7);
  await pokemon95.addMove(mudSlap6);

  await pokemon96.addMove(tackle[101]);
  await pokemon96.addMove(confusion[3]);

  await pokemon97.addMove(tackle[102]);
  await pokemon97.addMove(confusion[4]);
  await pokemon97.addMove(psychic1);

  await pokemon100.addMove(tackle[103]);
  await pokemon100.addMove(swift[4]);

  await pokemon101.addMove(tackle[104]);
  await pokemon101.addMove(swift[5]);
  await pokemon101.addMove(thunderBolt[3]);

  await pokemon102.addMove(tackle[105]);

  await pokemon103.addMove(tackle[106]);
  await pokemon103.addMove(vineWhip[5]);
  await pokemon103.addMove(confusion[5]);
  await pokemon103.addMove(psywave[2]);

  await pokemon104.addMove(tackle[107]);
  await pokemon104.addMove(mudSlap3);

  await pokemon105.addMove(tackle[108]);
  await pokemon105.addMove(takeDown[6]);
  await pokemon105.addMove(rockSlide4);

  await pokemon106.addMove(takeDown[19]);
  await pokemon106.addMove(quickAttack[24]);
  await pokemon106.addMove(highJumpKick);

  await pokemon107.addMove(seismicToss4);
  await pokemon107.addMove(thunderPunch);
  await pokemon107.addMove(icePunch1);

  await pokemon108.addMove(tackle[111]);
  await pokemon108.addMove(takeDown[7]);

  await pokemon109.addMove(tackle[112]);
  await pokemon109.addMove(acid[8]);

  await pokemon110.addMove(tackle[113]);
  await pokemon110.addMove(acid[9]);
  await pokemon110.addMove(toxic[12]);

  await pokemon111.addMove(tackle[114]);
  await pokemon111.addMove(rockThrow[8]);

  await pokemon112.addMove(stoneEdge3);
  await pokemon112.addMove(quickAttack[25]);
  await pokemon112.addMove(rockThrow[9]);
  await pokemon112.addMove(earthQuake3);
  await pokemon112.addMove(thunderPunch5);

  await pokemon113.addMove(tackle[116]);
  await pokemon113.addMove(takeDown[8]);

  await pokemon114.addMove(tackle[117]);
  await pokemon114.addMove(vineWhip[6]);
  await pokemon114.addMove(razorLeaf[6]);

  await pokemon115.addMove(tackle[118]);
  await pokemon115.addMove(takeDown[41]);
  await pokemon115.addMove(quickAttack[26]);
  await pokemon115.addMove(icePunch2);

  await pokemon122.addMove(tackle[119]);
  await pokemon122.addMove(swift[6]);
  await pokemon122.addMove(psywave[3]);

  await pokemon123.addMove(quickAttack[27]);
  await pokemon123.addMove(wingAttack);
  await pokemon123.addMove(slash);
  await pokemon123.addMove(xScissor1);

  await pokemon124.addMove(tackle[120]);
  await pokemon124.addMove(psywave[4]);
  await pokemon124.addMove(icePunch3);

  await pokemon125.addMove(tackle[121]);
  await pokemon125.addMove(thunderBolt[4]);
  await pokemon125.addMove(thunderPunch1);

  await pokemon126.addMove(tackle[122]);
  await pokemon126.addMove(ember[9]);
  await pokemon126.addMove(flameThrower[6]);

  await pokemon127.addMove(tackle[123]);
  await pokemon127.addMove(swift[7]);
  await pokemon127.addMove(takeDown[9]);

  await pokemon128.addMove(quickAttack[28]);
  await pokemon128.addMove(tackle[124]);
  await pokemon128.addMove(seismicToss2);
  await pokemon128.addMove(thunderBolt[15]);

  await pokemon132.addMove(tackle[125]);
  await pokemon132.addMove(swift[8]);
  await pokemon132.addMove(takeDown[10]);

  await pokemon133.addMove(tackle[126]);
  await pokemon133.addMove(quickAttack[29]);

  await pokemon135.addMove(tackle[127]);
  await pokemon135.addMove(quickAttack[30]);
  await pokemon135.addMove(thunderBolt[5]);

  await pokemon136.addMove(tackle[128]);
  await pokemon136.addMove(quickAttack[31]);
  await pokemon136.addMove(flameThrower[7]);

  await pokemon137.addMove(tackle[129]);
  await pokemon137.addMove(swift[9]);
  await pokemon137.addMove(quickAttack[39]);

  await pokemon142.addMove(tackle[130]);
  await pokemon142.addMove(wingAttack);
  await pokemon142.addMove(rockSlide5);
  await pokemon142.addMove(stoneEdge2);

  await pokemon143.addMove(takeDown[40]);
  await pokemon143.addMove(quickAttack[32]);
  await pokemon143.addMove(seismicToss3);
  await pokemon143.addMove(earthQuake4);

  await pokemon144.addMove(quickAttack[33]);
  await pokemon144.addMove(wingAttack);
  await pokemon144.addMove(iceBeam5);
  await pokemon144.addMove(skyAttack);

  await pokemon145.addMove(quickAttack[34]);
  await pokemon145.addMove(wingAttack);
  await pokemon145.addMove(thunderBolt[6]);
  await pokemon145.addMove(skyAttack1);

  await pokemon146.addMove(quickAttack[35]);
  await pokemon146.addMove(wingAttack);
  await pokemon146.addMove(flameThrower[8]);
  await pokemon146.addMove(skyAttack2);

  await pokemon147.addMove(tackle[132]);
  await pokemon147.addMove(dragonRage);

  await pokemon148.addMove(tackle[133]);
  await pokemon148.addMove(dragonRage1);
  await pokemon148.addMove(dragonClaw);

  await pokemon149.addMove(dragonRage2);
  await pokemon149.addMove(dragonClaw1);
  await pokemon149.addMove(skyAttack3);
  await pokemon149.addMove(hyperBeam1);
  await pokemon149.addMove(dragonRush);

  await pokemon150.addMove(swift[10]);
  await pokemon150.addMove(slash4);
  await pokemon150.addMove(psywave[5]);
  await pokemon150.addMove(psychic2);

  await pokemon151.addMove(quickAttack[36]);
  await pokemon151.addMove(takeDown[11]);
  await pokemon151.addMove(dragonClaw3);
  await pokemon151.addMove(psywave[6]);
  await pokemon151.addMove(psychic3);

  await pokemon447.addMove(tackle[140]);
  await pokemon447.addMove(seismicToss5);

  await pokemon448.addMove(auraSphere);
  await pokemon448.addMove(thunderPunch2);
  await pokemon448.addMove(forcePalm);
  await pokemon448.addMove(boneRush);
  await pokemon448.addMove(rockSlide6);
  await pokemon448.addMove(icePunch5);
  await pokemon448.addMove(stoneEdge4);

  await pokemon252.addMove(tackle[141]);
  await pokemon252.addMove(razorLeaf[15]);

  await pokemon253.addMove(tackle[142]);
  await pokemon253.addMove(razorLeaf[16]);
  await pokemon253.addMove(slash6);

  await pokemon254.addMove(razorLeaf[17]);
  await pokemon254.addMove(slash7);
  await pokemon254.addMove(dragonClaw2);
  await pokemon254.addMove(leafBlade);
  await pokemon254.addMove(leafStorm);
  await pokemon254.addMove(xScissor);

  await pokemon255.addMove(dummy);

  // await admin.addPokemon(poke);

  // await ted.addQuote(quote2);
  // await ted.addQuote(quote3);
  // await ted.addQuote(quote3);

  process.exit();
};

main();
