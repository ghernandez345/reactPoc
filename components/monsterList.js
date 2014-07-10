/**
 * @jsx React.DOM
 */

var React = require('../public/vendor/react');
var MonsterItem = require('./monsterItem');

var MonsterList = React.createClass({

  render: function () {
    var monsterNodes = this.props.monsters.map(function (monster) {
      return (
        <MonsterItem key={monster.name} name={monster.name} hp={monster.hp}
         ac={monster.ac} damage={monster.damage} />
      );
    })

    return (
      <div className="monster-list">
        <p>{this.props.monsters.length} monster(s) left</p>
        <ul>
          {monsterNodes}
        </ul>
      </div>
    )

  }
});

module.exports = MonsterList;
