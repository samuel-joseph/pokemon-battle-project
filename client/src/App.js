import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {
  loginUser,
  getAllPokemon,
  userData,
  verifyUser,
  registerUser,
} from "./services/api_helper";
import { Link, Route, withRouter } from "react-router-dom";

import { IoMdLogOut } from "react-icons/fa";

import Forest from "./components/Forest";
import Pokedex from "./components/Pokedex";
import Pvp from "./components/Pvp";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import StartGame from "./components/StartGame";
import Trainer from "./components/Trainer";
import Pokecenter from "./components/Pokecenter";
import League from "./components/League";
import Menu from "./components/Menu";
import Captured from "./components/Captured";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainername: null,
      id: null,
      currentUser: null,
      formData: {
        username: null,
        password: null,
      },
      pokemons: null,
      isClicked: false,
      instruction: null,
    };
  }

  componentDidMount = async () => {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const username = localStorage.getItem("username");
      const user = { username };
      const id = localStorage.getItem("id");
      user &&
        this.setState({
          currentUser: user,
          id,
        });
    }
  };


  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const regData = await registerUser(registerData);
    const currentUser = regData;
    this.setState({
      currentUser,
      trainername: currentUser.username,
    });

    this.props.history.push("/start");
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    const id = currentUser.id;
    const trainername = currentUser.username;
    this.setState({ currentUser, trainername, id });
    this.props.history.push("/start");
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    this.props.history.push("/");
  };

  handleMenu = () => {
    this.props.history.push("/menu");
  };

  turnOn = () => {
    this.setState({ isClicked: true });
  };

  saySomething = (instruction) => {
    this.setState({ instruction });
  };

  render() {
    return (
      <div className="App">
        <div>
          {!this.state.currentUser && (
            <div className="opening">
              <div className="buttonsOpenning">
                <Link className="register" to="/users/register">
                  REGISTER
                </Link>
                <Route
                  path="/users/register"
                  render={() => (
                    <RegisterForm
                      handleRegister={this.handleRegister}
                      isClicked={this.state.isClicked}
                    />
                  )}
                />
                <Link className="register" to="/users/login">
                  LOGIN
                </Link>
                <Route
                  path="/users/login"
                  render={() => (
                    <LoginForm
                      isClicked={this.state.isClicked}
                      handleLogin={this.handleLogin}
                    />
                  )}
                />
              </div>
            </div>
          )}
          {this.state.currentUser && (
            <div className="header">
              <img
                className="home"
                src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png"
                onClick={() => this.handleMenu()}
              />
              <p className="title">POKEMON LEAGUE</p>
              <img
                className="logout"
                src="https://static.thenounproject.com/png/639965-200.png"
                onClick={() => this.handleLogout()}
              />
            </div>
          )}
        </div>

        <div className="main">
          <Route
            path="/pvp"
            render={() => <Pvp saySomething={(e) => this.saySomething(e)} />}
          />
          <Route
            path="/league"
            render={() => <League saySomething={(e) => this.saySomething(e)} />}
          />
          <Route
            path="/forest"
            render={() => <Forest saySomething={(e) => this.saySomething(e)} />}
          />
          <Route
            path="/start"
            render={() => (
              <StartGame
                saySomething={(e) => this.saySomething(e)}
                instruction={this.state.instruction}
              />
            )}
          />
          <Route
            path="/menu"
            render={() => <Menu saySomething={(e) => this.saySomething(e)} />}
          />
          <Route
            path="/trainer"
            render={() => (
              <Trainer
                trainername={this.state.trainername}
                saySomething={(e) => this.saySomething(e)}
              />
            )}
          />
          <Route
            path="/newPokemon"
            render={() => (
              <Captured saySomething={(e) => this.saySomething(e)} />
            )}
          />
          <Route
            path="/pokecenter"
            render={() => (
              <Pokecenter saySomething={(e) => this.saySomething(e)} />
            )}
          />
        </div>
        <>
          {this.state.currentUser && (
            <>
              {this.state.instruction && (
                <div className="footer">
                  <p>{this.state.instruction}</p>
                </div>
              )}
            </>
          )}
        </>
      </div>
    );
  }
}

export default withRouter(App);
