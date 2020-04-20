import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaxHealthBar from "./maxHealthBar";
import {
  getAllTrainer,
  ownedPokemon,
  trainerPokemon,
  getMoves,
} from "../services/api_helper";

class Pvp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenPlayer: null,
      player: null,
      npc: null,
      user: null,
      userPokemon: null,
      start: false,
      userMoves: null,
      npcMoves: null,
    };
  }

  componentDidMount = async () => {
    const resp = await getAllTrainer();
    const user = await trainerPokemon();
    const userPokemon = user[0];

    let player = [];

    for (let i = 0; i < resp.length; i++) {
      let pokemon = await ownedPokemon(resp[i].id);
      if (
        pokemon.data.pokemon.length > 2 &&
        resp[i].id !== localStorage.getItem("id")
      ) {
        let playerN = {
          name: resp[i].username,
          id: resp[i].id,
          pokemon: pokemon.data.pokemon,
        };
        player.push(playerN);
      }
    }
    let index = player[Math.floor(Math.random() * player.length)];

    const test = player.splice(index, 1);
    const chosenPlayer = test.pop();
    const npc = chosenPlayer.pokemon;
    const npcPokemon = npc.shift();
    const npcMoves = await getMoves(npc.id);
    const userMoves = await getMoves(userPokemon.id);
    this.setState({
      player,
      user,
      userPokemon,
      chosenPlayer,
      npc,
      npcPokemon,
      userMoves,
      npcMoves,
    });
  };

  render() {
    return (
      <div>
        <div className="tips">
          {this.state.chosenPlayer && <>{console.log(this.state.npc)}</>}
          <h1>TRAINER {localStorage.getItem("name")}</h1>
          <h2>VERSUS</h2>
          <h1>
            TRAINER
            {this.state.chosenPlayer && <>{this.state.chosenPlayer.name}</>}
          </h1>
        </div>
        {this.state.start && (
          <div className="npc">
            <div>
              {this.state.userAnimation && (
                <img className="userFX" src={this.state.userAnimation} />
              )}

              <div>
                <div className="npcA">
                  <div className="npcB">
                    <span>
                      LV{this.state.npcPokemon.level}
                      {this.state.npcPokemon.name}
                    </span>
                    <div className="hpBar">
                      {!this.state.introChamp && (
                        <MaxHealthBar
                          percentage={this.state.npcPokemon.current_health}
                        />
                      )}
                      <div>
                        {this.state.npcPokemon.current_health}/
                        {this.state.npcPokemon.health}
                      </div>
                      <div className="npcPokeball">
                        {this.state.npc.map((data, index) => (
                          <div key={index}>
                            <img
                              className="gymBall"
                              onClick={() => this.change(data)}
                              src="https://i.ya-webdesign.com/images/pokeball-pixel-png-2.png"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="testNpc">
                    {this.state.npcPokemon.current_health !== 0 ? (
                      <img
                        className={
                          this.state.npcTurn ? "npcMove" : "npcPokemon"
                        }
                        src={this.state.npcPokemon.frontImage}
                      />
                    ) : (
                      <img
                        className="npcPokemonFade"
                        src={this.state.npcPokemon.frontImage}
                      />
                    )}
                  </div>
                </div>

                <div className="space">
                  {!this.state.battle && (
                    <button
                      className="register1"
                      onClick={() => this.battleSequence()}
                    >
                      FIGHT
                    </button>
                  )}
                </div>
                <div>
                  <div className="userA">
                    <div className="testUser">
                      {this.state.npcAnimation && (
                        <img className="npcFX" src={this.state.npcAnimation} />
                      )}

                      {this.state.userPokemon.current_health > 0 ? (
                        <img
                          className={
                            this.state.userTurn ? "userMove" : "userPokemon"
                          }
                          src={this.state.userPokemon.backImage}
                        />
                      ) : (
                        <img
                          className="userPokemonFade"
                          src={this.state.userPokemon.backImage}
                        />
                      )}
                    </div>
                    {this.state.userPokemon && (
                      <div className="userB">
                        {console.log(this.state.userPokemon)}
                        <span>
                          LV{this.state.userPokemon.level}
                          {this.state.userPokemon.name}
                        </span>
                        {!this.state.introChamp && (
                          <>
                            <div className="hpBar">
                              <MaxHealthBar
                                percentage={
                                  this.state.userPokemon.current_health
                                }
                              />
                              <div>
                                {this.state.userPokemon.current_health}/
                                {this.state.userPokemon.health}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {!this.state.introChamp && (
                  <div className="sparePokemons">
                    {this.state.userPokemon.current_health > 0 && (
                      <>
                        {this.state.user.map((data, index) => (
                          <div key={index}>
                            <img
                              onClick={() => this.change(data)}
                              src={this.state.user[index].frontImage}
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Pvp;
