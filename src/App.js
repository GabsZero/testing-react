import React, { Component } from 'react';
import './Bootstrap.css';
import Game from './Game/Game';
import Jumbotron from './Nav/Jumbotron';
import { throwStatement } from '@babel/types';

class App extends Component {
  state = {
    games: [
      {id: 1, name: "Resident Evil 6", platform: "PC"},
      {id: 2, name: "Borderlands 2", platform: "PC"},
      {id: 3, name: "Orwel", platform: "PC"}
    ],
    showGames: false
  }

  nameChangeHandler = (event, id) => {
    const gameIndex = this.state.games.findIndex( p => {
      return p.id === id;
    });

    const game = {
      ...this.state.games[gameIndex]
    };

    game.name = event.target.value
    const games = [...this.state.games];
    games[gameIndex] = game;

    this.setState({games: games});
  }

  toggleGamesHandler = () => {
    const doesShow = this.state.showGames;
    this.setState({showGames: !doesShow})
  }

  deleteGameHandler = (gameId) => {
    const games = [...this.state.games];
    games.splice(gameId, 1);
    this.setState({games: games});
  }

  showGames(){
    let games = null;

    if(this.state.showGames){
      games = (
        <div className="row">
          {
              this.state.games.map((game, key) => {
              return <Game 
                  click={ () => this.deleteGameHandler(key)}
                  name={game.name}
                  platform={game.platform}
                  changed={(event) => this.nameChangeHandler(event, game.id)}
                  key={game.id} />
            })
          }
        </div>
      );
    }

    return games;
  }

  render(){
    let games = this.showGames();
    return (
      <div className="container">
        <Jumbotron gamesCount={this.state.games.length} />
        <button className={this.state.showGames ? "btn btn-danger" : "btn btn-success"} onClick={ this.toggleGamesHandler }>Toggle Games</button>
        {games}
      </div>
    );
  }
}

export default App;

// state = {
//   games: [
//     {name: "Resident Evil 6", platform: "PC"},
//     {name: "Borderlands 2", platform: "PC"},
//     {name: "Orwel", platform: "PC"}
//   ]
// }


