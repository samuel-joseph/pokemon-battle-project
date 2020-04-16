import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { trainerPokemon } from "../services/api_helper";

import {
  getMoves,
  getPokemon,
  addMoves,
  storePokemon,
} from "../services/api_helper";

class Captured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      userPokemon: null,
    };
  }

  componentDidMount = async () => {
    let pokemon = await trainerPokemon();
    let userPokemon = pokemon.pop();
    this.props.saySomething(`You've added a new pokemon into your team!`);
    this.setState({ pokemon, userPokemon });
  };

  firstPokemon = (id) => {
    const user = this.state.pokemon;
    const userPokemon = user[id];
    this.props.saySomething(
      `${userPokemon.name} a ${userPokemon.type} type pokemon!`
    );
    this.setState({ userPokemon });
  };

  render() {
    return (
      <div>
        {this.state.pokemon && (
          <div className="newPokemon">
            <div>
              <img
                className="pokemon"
                src={this.state.userPokemon.frontImage}
              />
            </div>
            <div className="newPokemon1">
              {this.state.pokemon.map((pokemon, index) => (
                <img
                  onClick={() => this.firstPokemon(index)}
                  src={pokemon.frontImage}
                />
              ))}
            </div>
            <p className="tips">
              Click the pokeball menu button to the right when you're ready!
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Captured);
