import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";

import {
  trainerPokemon,
  getMoves,
  update,
  storePokemon,
  addMoves,
  ownedPokemon,
  getPokemon,
  removeMove,
  getAllPokemon,
  typeAdvantage,
  useAdvantage,
} from "../services/api_helper";

import Level from "./Level";
import Evolution from "./Evolution";
import Pokecenter from "./Pokecenter";
import MaxHealthBar from "./maxHealthBar";
import { FaSketch } from "react-icons/fa";

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      npc: [],
      npcAnimation: null,
      userAnimation: null,
      postData: {
        name: null,
        frontImage: null,
        backImage: null,
        health: null,
        current_health: null,
        type: null,
      },
      postMove: [],
      arrayPostMoves: [],
      npcAttack: null,
      userPokemon: null,
      userPokemonAttacks: null,
      fighterPokemon: null,
      evolveId: null,
      catch: false,
      change: false,
      formData: {
        current_health: null,
      },
      win: false,
      npcTurn: false,
      userTurn: false,
      count: null,
      battle: false,
      evolve: false,
      rip:
        "https://b7.pngbarn.com/png/250/103/headstone-grave-cemetery-rest-in-peace-grave-s-png-clip-art-thumbnail.png",
    };
  }

  componentDidMount = async () => {
    const npc = this.props.pokemonID;
    const userPokemon = await trainerPokemon();
    const fighterPokemon = userPokemon[0];
    const npcAttack = await getMoves(npc.id);
    const userPokemonAttacks = await getMoves(fighterPokemon.id);
    const name = npc.name;
    const current_experience = npc.current_experience;
    const total_experience = npc.total_experience;
    const level = npc.level;
    const frontImage = npc.frontImage;
    const backImage = npc.backImage;
    const health = npc.health;
    const fullyEvolved = npc.fullyEvolved;
    const moveName = npcAttack.name;
    const moveAttack = npcAttack.attack;
    const current_health = npc.current_health;
    const type = npc.type;
    let count = null;
    if (userPokemon.length < 6) {
      count = 3;
    } else {
      count = 0;
    }

    this.setState({
      count,
      npc,
      userPokemon,
      fighterPokemon,
      npcAttack,
      userPokemonAttacks,
      postData: {
        name,
        frontImage,
        backImage,
        health,
        current_health,
        level,
        total_experience,
        current_experience,
        fullyEvolved,
        type,
      },
      formData: {
        current_health,
      },
    });

    for (let i = 0; i < npcAttack.length; i++) {
      const postMoveCopy = {
        name: npcAttack[i].name,
        attack: npcAttack[i].attack,
        animation: npcAttack[i].animation,
        type: npcAttack[i].type,
      };
      this.setState((prevState) => ({
        postMove: [postMoveCopy, ...prevState.postMove],
      }));
    }
  };

  randomFunc(random) {
    let response = random[Math.floor(Math.random() * random.length)];
    return response;
  }

  levelUp = (level) => {
    this.setState({ fighterPokemon: { ...this.state.fighterPokemon, level } });
  };

  evolution = async () => {
    let userHealth = this.state.fighterPokemon.current_health;
    let fullyEvolved = this.state.fighterPokemon.fullyEvolved;
    let id = this.state.fighterPokemon.id;
    let total_experience = this.state.fighterPokemon.total_experience;
    let current_experience = this.state.fighterPokemon.current_experience;
    let level = this.state.fighterPokemon.level;
    let health = this.state.fighterPokemon.health;
    let frontImage = this.state.fighterPokemon.frontImage;
    let backImage = this.state.fighterPokemon.backImage;
    let name = this.state.fighterPokemon.name;
    let type = this.state.fighterPokemon.type;
    let presetXP = 1000;
    let gain = null;

    switch (this.state.npc.level) {
      case 1:
        gain = Math.floor(presetXP * 4 * 1.75);
        break;
      case 15:
        gain = Math.floor(presetXP * 6 * 1.75);
        break;
      case 30:
        gain = gain = Math.floor(presetXP * 8 * 1.75);
        break;
      case "bonus":
        gain = Math.floor(presetXP * 10 * (1.75 + level * 0.075));
        break;
    }

    current_experience += gain;
    setTimeout(
      function () {
        this.props.saySomething(
          `${this.state.fighterPokemon.name} earned ${gain} worth experiece!`
        );
      }.bind(this),
      3900
    );
    if (level < 50) {
      while (current_experience >= total_experience) {
        level++;
        this.levelUp(level);
        setTimeout(
          function () {
            this.props.saySomething(
              `LEVEL UP to LV ${level}! ${this.state.fighterPokemon.name} earned ${gain} worth experiece!`
            );
          }.bind(this),
          4000
        );
        health += 2;
        current_experience = current_experience - total_experience;
        total_experience += 1200;
        if ((level === 15 || level === 30) && fullyEvolved === false) {
          let evolveId = null;
          let pokemons = await getAllPokemon();
          for (let i = 0; i < pokemons.length; i++) {
            if (this.state.fighterPokemon.name === pokemons[i].name) {
              evolveId = pokemons[i].id + 1;
            }
          }
          this.setState({ evolve: true, evolveId });
        }
      }
    }

    const passData = {
      // name,
      health,
      current_health: userHealth,
      level,
      current_experience,
      current_health: health,
      total_experience,
    };
    const resp = await update(id, passData);
  };

  battleSequence = async () => {
    this.setState({ battle: true });
    let formData = this.state.formData;
    let levelUser = this.state.fighterPokemon.level;
    let levelNpc = this.state.npc.level;
    let typeUser = this.state.fighterPokemon.type;
    let typeNpc = this.state.npc.type;
    let id = this.state.fighterPokemon.id;
    let npcHealth = this.state.npc.current_health;
    let halfHp = this.state.npc.health / 2;

    let randomNpcAttack = this.randomFunc(
      useAdvantage(this.state.npcAttack, typeUser)
    );

    let npcAdvantage = typeAdvantage(
      randomNpcAttack.type,
      this.state.fighterPokemon.type
    );
    let npcAttack = Math.floor(
      (randomNpcAttack.attack + randomNpcAttack.attack * levelNpc * 0.01) *
        npcAdvantage
    );
    let npcAnimation = randomNpcAttack.animation;

    let randomUserAttack = this.randomFunc(
      useAdvantage(this.state.userPokemonAttacks, typeNpc)
    );

    let userHealth = this.state.fighterPokemon.current_health;
    let userAdvantage = typeAdvantage(
      randomUserAttack.type,
      this.state.npc.type
    );

    let userAttack = Math.floor(
      (randomUserAttack.attack + randomUserAttack.attack * levelUser * 0.01) *
        userAdvantage
    );
    let userAnimation = randomUserAttack.animation;

    let effective = "";
    if (userAdvantage === 2) effective = "SUPER EFFECTIVE";
    else if (userAdvantage === 0.5) effective = "not effective";

    this.setState({ userAnimation, userTurn: true });
    this.props.saySomething(
      `${this.state.fighterPokemon.name} uses ${randomUserAttack.name}! ${effective} deals ${userAttack}!`
    );

    effective = "";
    if (npcAdvantage === 2) effective = "SUPER EFFECTIVE";
    else if (npcAdvantage === 0.5) effective = "not effective";

    npcHealth = npcHealth - userAttack;
    userHealth = userHealth - npcAttack;

    setTimeout(
      function () {
        this.setState({ userAnimation: null, userTurn: false });
      }.bind(this),
      1000
    );
    setTimeout(
      function () {
        this.setState({ npcAnimation, npcTurn: true });

        this.props.saySomething(
          `${this.state.npc.name} uses ${randomNpcAttack.name}! ${effective} deals ${npcAttack}!`
        );
      }.bind(this),
      1000
    );

    setTimeout(
      function () {
        this.setState({ npcAnimation: null, npcTurn: false });
      }.bind(this),
      2000
    );

    if (formData.current_health !== userHealth) {
      this.setState({
        formData: {
          current_health: userHealth,
        },
      });
    }
    if (npcHealth < 0 || npcHealth === 0) {
      const passData = {
        current_health: userHealth,
      };
      this.setState({
        npc: { ...this.state.npc, current_health: 0 },
        formData: { ...this.state.formData, current_health: userHealth },
      });
      // let dice = Math.floor(Math.random() * 11);

      const resp = await update(id, passData);
      this.evolution();
    } else if (userHealth < 0 || userHealth === 0) {
      let index = null;
      const userPokemon = this.state.userPokemon;
      let fighterPokemon = this.state.fighterPokemon;
      for (let i = 0; i < userPokemon.length; i++) {
        if (userPokemon[i].id === this.state.fighterPokemon.id) {
          index = i;
        }
      }
      userPokemon.splice(index, 1);
      const passData = {
        current_health: 0,
      };

      if (this.state.userPokemon.length === 0) {
        setTimeout(
          function () {
            this.props.saySomething(
              "YOU LOST... Go head to Pokecenter and heal those poor pokemons then try again"
            );
            this.setState({
              battle: true,
              fighterPokemon: {
                ...this.state.fighterPokemon,
                current_health: 0,
              },
            });
          }.bind(this),
          3000
        );
        const resp = await update(this.state.fighterPokemon.id, passData);
      } else {
        fighterPokemon = userPokemon[0];
        let userPokemonAttacks = await getMoves(fighterPokemon.id);
        this.setState({
          fighterPokemon,
          npc: { ...this.state.npc, current_health: npcHealth },
          battle: false,
          userPokemon,
          userPokemonAttacks,
        });
        return;
      }
    } else {
      const passData = {
        current_health: userHealth,
      };
      setTimeout(
        function () {
          this.setState({
            fighterPokemon: {
              ...this.state.fighterPokemon,
              current_health: userHealth,
            },
            formData: { ...this.state.formData, current_health: userHealth },
            npc: { ...this.state.npc, current_health: npcHealth },
            battle: false,
          });
        }.bind(this),
        2500
      );
      const resp = await update(id, passData);
    }
  };

  setToTrue = () => {
    this.setState({ catch: true });
  };

  storePokemon = async () => {
    const postData = this.state.postData;
    const postMove = this.state.postMove;
    const resp = await storePokemon(postData);
    for (let i = 0; i < postMove.length; i++) {
      const resp1 = await addMoves(resp.data.id, postMove[i]);
    }
  };

  readyCatch = async () => {
    let npcHp = this.state.npc.current_health;
    let totalNpcHp = this.state.npc.health;
    if (npcHp >= Math.floor(totalNpcHp / 2)) {
      let count = this.state.count;
      count--;
      this.setState({ catch: true, count });
      setTimeout(
        function () {
          this.props.saySomething("Your pokeball broke! Too early!");
          this.setState({ catch: false });
        }.bind(this),
        2000
      );
    } else {
      let count = this.state.count;
      count--;
      this.setState({ catch: true, count });
      const hp = this.state.npc.current_health;
      const totalHp = this.state.npc.health;
      const chance = totalHp * 0.07;
      const dice = Math.floor(Math.random() * Math.floor(hp));
      this.props.saySomething(
        `Trainer ${localStorage.getItem("name")} throws a pokeball!`
      );

      setTimeout(
        function () {
          if (dice <= chance) {
            this.props.saySomething(`You caught a ${this.state.npc.name}!`);
            this.storePokemon();
            this.setState({ battle: true, userPokemon: null });
            this.props.history.push("/newPokemon");
          } else {
            this.props.saySomething("Your pokeball broke!");
            this.setState({ catch: false });
          }
        }.bind(this),
        2000
      );
    }
  };

  change = async (pokemon) => {
    const fighterPokemonID = this.state.fighterPokemon.id;
    const formData = this.state.formData;
    const id = pokemon.id;
    let randomNpcAttack = this.randomFunc(this.state.npcAttack);
    let npcAttack = randomNpcAttack.attack;
    let npcAnimation = randomNpcAttack.animation;
    setTimeout(
      function () {
        this.setState({ npcAnimation, npcTurn: true });
      }.bind(this),
      1500
    );
    setTimeout(
      function () {
        this.setState({ npcAnimation: null, npcTurn: false });
      }.bind(this),
      2500
    );

    const changedPokemon = await getPokemon(id);
    this.props.saySomething(
      `Trainer ${localStorage.getItem("name")} switches ${
        this.state.fighterPokemon.name
      } with ${changedPokemon.name}`
    );
    let userHealth = changedPokemon.current_health;
    userHealth = userHealth - npcAttack;
    const passData = {
      current_health: userHealth,
    };
    const resp = await update(id, passData);
    const fighterPokemon = await getPokemon(id);

    const resp1 = await update(fighterPokemonID, formData);

    const userPokemonAttacks = await getMoves(id);
    setTimeout(
      function () {
        this.setState({
          fighterPokemon,
          userPokemonAttacks,
          formData: {
            current_health: userHealth,
          },
          battle: false,
        });
      }.bind(this),
      500
    );
  };

  render() {
    return (
      <div>
        {this.state.userPokemon && (
          <>
            {this.state.evolve ? (
              <Evolution
                saySomething={(e) => this.props.saySomething(e)}
                pokemon={this.state.fighterPokemon}
                evolveId={this.state.evolveId}
              />
            ) : (
              <>
                {this.state.userPokemon && (
                  <div>
                    <div className="forestBat">
                      <div className="npc">
                        <div>
                          {this.state.userAnimation && (
                            <img
                              className="userFX"
                              src={this.state.userAnimation}
                            />
                          )}

                          <div>
                            <div className="npcA">
                              <div className="npcB">
                                <span className="pokeName">
                                  LV{this.state.npc.level}
                                  {this.state.npc.name}
                                </span>
                                <div className="hpBar">
                                  <MaxHealthBar
                                    percentage={this.state.npc.current_health}
                                  />
                                  <div>
                                    {this.state.npc.current_health}/
                                    {this.state.npc.health}
                                  </div>
                                </div>
                              </div>
                              <div className="testNpc">
                                {this.state.npc.current_health ? (
                                  <img
                                    className={
                                      this.state.npcTurn
                                        ? "npcMove"
                                        : "npcPokemon"
                                    }
                                    src={
                                      this.state.catch
                                        ? "https://thumbs.gfycat.com/GenerousTimelyBrontosaurus-max-1mb.gif"
                                        : this.state.npc.frontImage
                                    }
                                  />
                                ) : (
                                  <img
                                    className="npcPokemonFade"
                                    src={this.state.npc.frontImage}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {!this.state.battle && (
                        <>
                          {this.state.npc.current_health > 0 &&
                            this.state.fighterPokemon.current_health > 0 && (
                              <button
                                className="register1"
                                onClick={() => this.battleSequence()}
                              >
                                FIGHT
                              </button>
                            )}
                        </>
                      )}
                      {this.state.npc.current_health <= 0 && (
                        <Link className="register" to="/menu">
                          END
                        </Link>
                      )}
                      <div>
                        <div className="userA">
                          <div className="testUser">
                            {this.state.npcAnimation && (
                              <img
                                className="npcFX"
                                src={this.state.npcAnimation}
                              />
                            )}

                            {!this.state.fighterPokemon.current_health <= 0 ? (
                              <img
                                className={
                                  this.state.userTurn
                                    ? "userMove"
                                    : "userPokemon"
                                }
                                src={this.state.fighterPokemon.backImage}
                              />
                            ) : (
                              <img
                                className="userPokemonFade"
                                src={this.state.fighterPokemon.backImage}
                              />
                            )}
                          </div>
                          <div className="userB">
                            <span className="pokeName">
                              LV{this.state.fighterPokemon.level}
                              {this.state.fighterPokemon.name}
                            </span>
                            <div className="hpBar">
                              <MaxHealthBar
                                percentage={
                                  this.state.fighterPokemon.current_health
                                }
                              />
                              <div>
                                {this.state.fighterPokemon.current_health}/
                                {this.state.fighterPokemon.health}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <>
                      {!this.state.battle && (
                        <div className="sparePokemons">
                          {this.state.count !== 0 && (
                            <span>
                              <>
                                <img
                                  className="imagePoke1"
                                  onClick={() => this.readyCatch()}
                                  src="https://i.ya-webdesign.com/images/pokeball-pixel-png-2.png"
                                />
                                x{this.state.count}
                              </>
                            </span>
                          )}
                          {this.state.userPokemon.map((data, index) => (
                            <div key={index}>
                              <img
                                onClick={() => this.change(data)}
                                src={this.state.userPokemon[index].frontImage}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Battle);
