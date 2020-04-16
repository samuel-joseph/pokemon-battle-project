import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { getPokemon } from "../services/api_helper";

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
            16,
            13,
            21,
            23,
            27,
            29,
            32,
            37,
            39,
            41,
            43,
            46,
            50,
            54,
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
          arrayPokemons: [25, 108, 26, 111, 106, 107, 134, 135, 136],
          rank: "high",
        },
        {
          image:
            "https://i.pinimg.com/originals/2a/a2/0b/2aa20b2129a6b56fd02eb2d794a1a689.png",
          name: "Route 75-100",
          arrayPokemons: [24, 128, 124, 125, 126, 127, 124, 131, 142, 143, 115],
          rank: "high",
        },
      ],
      pokemons: [],
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
    console.log(data);
    const id = data.arrayPokemons;
    this.resetMap();
    for (let i = 0; i < id.length; i++) {
      const pokemons = await getPokemon(id[i]);
      this.setState({
        pokemons: [...this.state.pokemons, pokemons],
        isClicked: true,
      });
    }
    this.setState({ rank: data.rank });
  };

  battle = () => {
    const arrayPokemons = this.state.pokemons;
    const chosenPokemon = this.state.pokemons[
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
