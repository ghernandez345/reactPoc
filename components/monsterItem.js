/**
 * @jsx React.DOM
 */

var React = require('../public/vendor/react');

var MonsterList = React.createClass({
  render: function() {

    return (
      <li className="monster">
        <h3 className="monster-name">{this.props.name}</h3>
        <div className="monster-stats">
          <div className="monster-hp stat">
            <h4>HP</h4>
            <p>{this.props.hp}</p>
          </div>
          <div className="monster-ac stat">
            <h4>AC</h4>
            <p>{this.props.ac}</p>
          </div>
          <div className="monster-damage stat">
            <h4>Damage</h4>
            <p>{this.props.damage}</p>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = MonsterList;
