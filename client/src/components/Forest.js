import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { getPokemon, trainerPokemon } from "../services/api_helper";

import Battle from "./Battle";

class Forest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routeMaps: [
        {
          image:
            "https://i.pinimg.com/originals/2a/a2/0b/2aa20b2129a6b56fd02eb2d794a1a689.png",
          name: "Route 1-35",
          arrayPokemons: [
            19,
            41,
            39,
            16,
            46,
            54,
            43,
            13,
            50,
            21,
            23,
            27,
            29,
            32,
            37,
            58,
            60,
            63,
            66,
            69,
            77,
            81,
            100,
            74,
            129,
            147,
          ],
          rank: "high",
        },
        {
          image:
            "https://i.pinimg.com/originals/2a/a2/0b/2aa20b2129a6b56fd02eb2d794a1a689.png",
          name: "Route 36-75",
          arrayPokemons: [108, 26, 111, 106, 107, 134, 135, 136, 25],
          rank: "high",
        },
        {
          image:
            "https://i.pinimg.com/originals/2a/a2/0b/2aa20b2129a6b56fd02eb2d794a1a689.png",
          name: "Route 75-100",
          arrayPokemons: [24, 115, 124, 125, 126, 127, 124, 128, 131, 142, 143],
          rank: "high",
        },
      ],
      pokemons: [],
      picked: null,
      chosenPokemon: null,
      isClicked: false,
      proceed: false,
      rank: null,
    };
  }

  componentDidMount = () => {
    this.props.saySomething(
      " Choose any of the forest then press HUNT button to either catch a pokemon or just battle! HAPPY HUNTING!"
    );
    console.log(this.state.win);
  };

  resetMap = () => {
    const pokemons = "";
    this.setState({ pokemons });
  };

  forestPokemons = async (data) => {
    this.props.saySomething("WAIT FOR IT!!!");
    const id = data.arrayPokemons;
    console.log(id.length);
    this.resetMap();
    for (let i = 0; i < id.length; i++) {
      const pokemons = await getPokemon(id[i]);
      this.setState({
        pokemons: [...this.state.pokemons, pokemons],
        isClicked: true,
      });
    }

    this.props.saySomething("Try Hunting NOW!");

    this.setState({ rank: data.rank });
  };

  battle = async () => {
    let resp = await trainerPokemon();
    let level = resp.pop().level;
    let arrayPokemons = this.state.pokemons;
    let chance = Math.floor(arrayPokemons.length * 0.5);
    if (level > 15) {
      for (let i = 0; i < chance; i++) {
        arrayPokemons.shift();
      }
    }
    console.log(arrayPokemons);
    const chosenPokemon =
      arrayPokemons[
        Math.floor(Math.random() * Math.floor(arrayPokemons.length - 1))
      ];

    this.setState({ proceed: true, chosenPokemon });
  };

  render() {
    return (
      <div>
        {this.state.proceed ? (
          <Battle
            rank={this.state.rank}
            saySomething={(e) => this.props.saySomething(e)}
            pokemonID={this.state.chosenPokemon}
          />
        ) : (
          <>
            <div>
              <div className="forest">
                {this.state.routeMaps.map((data) => (
                  <div className=".grass">
                    <img
                      className="grassImg"
                      onClick={() => this.forestPokemons(data)}
                      src={data.image}
                    />
                    <h5>{data.name}</h5>
                  </div>
                ))}
              </div>
            </div>
            {this.state.isClicked && (
              <div className="possible">
                <button className="registerHunt" onClick={() => this.battle()}>
                  HUNT
                </button>
                <p className="woods">
                  These are your possible pokemons to catch. Scroll up the
                  pokemons to view!
                </p>
              </div>
            )}
            {this.state.pokemons && (
              <div className="pokemonContainer">
                {this.state.pokemons.map((data) => (
                  <div>
                    <img className="pokemon" src={data.frontImage} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Forest);
