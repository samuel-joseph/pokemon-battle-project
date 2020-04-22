import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {
  update,
  trainerPokemon,
  ownedPokemon,
  getPokemon,
  storePokemon,
  addMoves,
} from "../services/api_helper";

class Pokecenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      pokemon: [],
      formData: {
        current_health: null,
      },
      isClicked: false,
    };
  }

  componentDidMount = async () => {
    this.props.saySomething("Heal your pokemons by pressing HEAL!");
    const user = await trainerPokemon();
    this.setState({ user });
    console.log(user);
  };

  heal = async () => {
    const user = this.state.user;
    this.props.saySomething("All of your pokemons are now ready to battle!");
    for (let i = 0; i < user.length; i++) {
      let id = user[i].id;
      let fullHp = user[i].health;
      let passData = {
        current_health: fullHp,
      };
      const regainHp = await update(id, passData);
    }
    // let postData = {
    //   name: "Greninja",
    //   frontImage:
    //     "https://vignette.wikia.nocookie.net/pokemon/images/f/f7/Greninja-ash.gif/revision/latest/top-crop/width/220/height/220?cb=20170103171951",
    //   backImage:
    //     "https://vignette.wikia.nocookie.net/robloxpokemonbrickbronze/images/3/30/Ash-Greninja-back_SM.gif/revision/latest/top-crop/width/150/height/150?cb=20171206063137",
    //   health: 380,
    //   current_health: 380,
    //   type: "Water",
    //   level: 30,
    //   current_experience: 0,
    //   total_experience: 18000,
    //   fullyEvolved: true,
    // };

    // const moveData = {
    //   name: "Water Shuriken",
    //   attack: "120",
    //   animation: "https://lh3.googleusercontent.com/proxy/gZ5Q0FFCEii9U-jES1N9NYZUMVeXebNZ-nM6GvNLC2pwKlPM_YcaDSVmayKnlIL4OeHIO-CjchQWTesyYYCtQJa7zKjeEvT8",
    //   type: "Water",
    // };

    // const moveData1 = {
    //   name: "Cut",
    //   attack: "100",
    //   animation: "https://images.vexels.com/media/users/3/155299/isolated/preview/1988d1faba4d059eb4461d955af5cf61-x-mark-scribble-by-vexels.png",
    //   type: "Normal",
    // };

    // const moveData2 = {
    //   name: "Air Slash",
    //   attack: "100",
    //   animation: "https://i.ya-webdesign.com/images/slash-effect-png-9.png",
    //   type: "Normal",
    // };

    // const moveData3 = {
    //   name: "Air Slash",
    //   attack: "100",
    //   animation: "https://i.ya-webdesign.com/images/slash-effect-png-9.png",
    //   type: "Normal",
    // };
    // const resp = await storePokemon(postData);
    // const move = await addMoves(220);
    // console.log(resp);
    this.setState({ isClicked: true });
  };

  show = async (id) => {
    const pokemon = [];
    const resp = await getPokemon(id);
    pokemon.push(resp);
    console.log(pokemon);
    this.setState({ pokemon });
  };

  render() {
    return (
      <div>
        {this.state.user && (
          <div className="pokecenter0">
            {this.state.isClicked ? (
              this.state.user.map((data) => (
                <img className="pokeAtCenter" src={data.frontImage} />
              ))
            ) : (
              <div className="pokecenter"></div>
            )}
          </div>
        )}
        {!this.state.isClicked && (
          <button className="register" onClick={() => this.heal()}>
            HEAL
          </button>
        )}
      </div>
    );
  }
}

export default withRouter(Pokecenter);
