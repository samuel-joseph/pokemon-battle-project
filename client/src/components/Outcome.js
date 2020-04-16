import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";

class Outcomes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="winner">
        <h1 className="headChamp">CONGRATULATIONS</h1>
        <img className="trophy" src="https://i.gifer.com/6x6G.gif" />
        <h1 className="name">CHAMPION {localStorage.getItem("name")}</h1>
        <div className="champPokemon">
          {this.props.pokemon &&
            this.props.pokemon.map((data) => (
              <>
                <img className="champImg" src={data.frontImage} />
              </>
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Outcomes);
