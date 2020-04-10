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
            19,
            19,
            19,
            19,
            43,
            43,
            129,
            29,
            32,
            77,
            60,
            60,
            100,
            66,
            123,
            128,
            111,
            134,
            63,
          ],
          rank: "high",
        },
        {
          image:
            "https://i.pinimg.com/originals/2a/a2/0b/2aa20b2129a6b56fd02eb2d794a1a689.png",
          name: "Route 36-75",
          arrayPokemons: [
            21,
            21,
            21,
            21,
            21,
            69,
            69,
            29,
            37,
            77,
            116,
            116,
            25,
            106,
            124,
            143,
            50,
            135,
            147,
          ],
          rank: "high",
        },
        {
          image:
            "https://i.pinimg.com/originals/2a/a2/0b/2aa20b2129a6b56fd02eb2d794a1a689.png",
          name: "Route 75-100",
          arrayPokemons: [
            13,
            13,
            13,
            13,
            13,
            102,
            102,
            58,
            29,
            32,
            37,
            77,
            120,
            120,
            125,
            107,
            126,
            131,
            114,
            136,
            92,
          ],
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
            {this.state.pokemons && (
              <div className="pokemonContainer">
                {this.state.pokemons.map((data) => (
                  <div>
                    <img className="pokemon" src={data.frontImage} />
                  </div>
                ))}
              </div>
            )}
            {this.state.isClicked && (
              <div className="possible">
                <p>
                  These are your possible pokemons to catch. Scroll up the
                  pokemons to view!
                </p>
                <button className="register" onClick={() => this.battle()}>
                  HUNT
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Forest);
