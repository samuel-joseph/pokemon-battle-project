import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {
  getPokemon,
  storePokemon,
  getMoves,
  addMoves,
} from "../services/api_helper";

class ChooseStarter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: [1, 4, 7, 92, 152, 154],
      ownPokemon: null,
      chosenPokemonId: null,
      starters: [],
      riolu: null,
      rioluMoves: null,
      starterMoves: [],
      arrayMoveData: [],
      moveData1: {
        name: null,
        attack: null,
        animation: null,
        type: null,
      },
      moveData2: {
        name: null,
        attack: null,
        animation: null,
        type: null,
      },
      formData: {
        name: null,
        frontImage: null,
        backImage: null,
        health: null,
        current_health: null,
        level: 1,
        total_experience: 300,
        current_experience: 0,
        fullyEvolved: null,
        type: null,
      },
      isClicked: false,
    };
  }

  componentDidMount = async () => {
    const starters = [];
    const starterMoves = [];
    const num = this.state.num;
    let id = [];
    for (let i = 0; i < 3; i++) {
      let index = Math.floor(Math.random() * Math.floor(num.length));
      id.push(num.splice(index, 1));
    }

    for (let i = 0; i < 3; i++) {
      const resp = await getPokemon(id[i]);
      const resp1 = await getMoves(id[i]);
      starters.push(resp);
      starterMoves.push(resp1);
    }
    const riolu = await getPokemon(152);
    const rioluMoves = await getMoves(152);
    this.props.saySomething("Choose a starter pokemon");
    this.setState({ starters, starterMoves, riolu, rioluMoves });
  };

  chosenPokemon = (pokemon, moves) => {
    const chosenPokemonId = pokemon.id;
    const starterMoves = [];

    this.props.saySomething(`${pokemon.name} a ${pokemon.type} pokemon!`);

    this.setState({
      moveData1: {
        ...this.state.moveData,
        name: moves[0].name,
        attack: moves[0].attack,
        animation: moves[0].animation,
        type: moves[0].type,
      },
    });
    this.setState({
      moveData2: {
        ...this.state.moveData,
        name: moves[1].name,
        attack: moves[1].attack,
        animation: moves[1].animation,
        type: moves[1].type,
      },
    });
    this.setState({
      formData: {
        ...this.state.formData,
        name: pokemon.name,
        frontImage: pokemon.frontImage,
        backImage: pokemon.backImage,
        health: pokemon.health,
        current_health: pokemon.current_health,
        fullyEvolved: pokemon.fullyEvolved,
        type: pokemon.type,
      },
    });
    this.passMoves(moves);

    this.setState({
      isClicked: true,
      chosenPokemonId,
    });
  };

  passMoves = (moves) => {
    this.setState({
      moveData1: {
        ...this.state.moveData1,
        name: moves[0].name,
        attack: moves[0].attack,
        animation: moves[0].animation,
        type: moves[0].type,
      },
      moveData2: {
        ...this.state.moveData2,
        name: moves[1].name,
        attack: moves[1].attack,
        animation: moves[1].animation,
        type: moves[1].type,
      },
    });
  };

  savePokemon = async () => {
    const pokemon = await storePokemon(this.state.formData);
    // const resp = await getPokemon(25);
    // const respMove = await getMoves(25);
    // const data = {
    //   name: resp.name,
    //   frontImage: resp.frontImage,
    //   backImage: resp.backImage,
    //   level: resp.level,
    //   health: resp.health,
    //   current_health: resp.current_health,
    //   current_experience: resp.current_experience,
    //   total_experience: resp.total_experience,
    //   fullyEvolved: resp.fullyEvolved,
    //   type: resp.type,
    // };
    // const getPika = await storePokemon(data);
    // for (let i = 0; i < respMove.length; i++) {
    //   let dataMove = {
    //     name: respMove[i].name,
    //     attack: respMove[i].attack,
    //     animation: respMove[i].animation,
    //     type: respMove[i].type,
    //   };
    //   await addMoves(getPika.id, dataMove);
    // }
    const id = pokemon.data.id;
    const move1 = await addMoves(id, this.state.moveData1);
    const move2 = await addMoves(id, this.state.moveData2);
    this.props.history.push("/newPokemon");
  };

  render() {
    return (
      <div>
        {this.state.starters && (
          <div>
            {this.state.isClicked && (
              <div className="choose">
                <img className="pokemon" src={this.state.formData.frontImage} />
                <p className="name">{this.state.formData.name}</p>
              </div>
            )}
            <div className="setPokeball">
              {this.state.starters.map((pokemon, index) => (
                <div key={index}>
                  <img
                    className="pokeball"
                    onClick={() =>
                      this.chosenPokemon(
                        pokemon,
                        this.state.starterMoves[index]
                      )
                    }
                    src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795vtfp2.png"
                  />
                </div>
              ))}
            </div>
            {this.state.isClicked && (
              <button className="register" onClick={() => this.savePokemon()}>
                CONFIRM
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ChooseStarter);
