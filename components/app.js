/**
 * @jsx React.DOM
 */

var React = require('../public/vendor/react'),
    MonsterForm = require('./monsterForm'),
    MonsterList = require('./monsterList');

var monsters = [
  {name: 'Goblin', hp: '8', ac: '15', damage: '1d6+2'},
  {name: 'Bug Bear', hp: '15', ac: '18', damage: '1d10+4'},
];

var App = React.createClass({

  getInitialState: function () {
    return {
      monsters: monsters
    }
  },

  addMonster: function (monster) {
    monsters.push(monster);
    this.setState({
      monsters: monsters
    });
  },

  render: function() {
    return (
      <div className="app">
        <h1>{this.props.title}</h1>
        <div className="form-container">
          <h2>Create a Monster</h2>
          <MonsterForm addMonster={this.addMonster}/>
        </div>
        <div className="list-container">
          <h2>Current Monsters</h2>
          <MonsterList monsters={this.state.monsters}/>
        </div>
      </div>
    )
  }
});

React.renderComponent(
  <App title="Monster Vault" />,
  document.getElementById('wrapper')
);
