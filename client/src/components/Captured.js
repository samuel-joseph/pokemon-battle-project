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
      totalPokemon: null,
    };
  }

  componentDidMount = async () => {
    console.log("AM I HERE");
    let lastPokemon = await trainerPokemon();
    let pokemon = lastPokemon.pop();
    this.props.saySomething(`${pokemon.name} joined your team!`);
    this.setState({ pokemon, totalPokemon: lastPokemon });
  };

  render() {
    return (
      <div className="newPokemon">
        {this.state.pokemon && (
          <div>
            <img className="pokemon1" src={this.state.pokemon.frontImage} />

            <Link className="register" to="/menu">
              CONFIRM
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Captured);
