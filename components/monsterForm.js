/**
 * @jsx React.DOM
 */

var React = require('../public/vendor/react');

var MonsterForm = React.createClass({

  handleSubmit: function () {
    var monster = {
      name: this.refs.name.getDOMNode().value.trim(),
      hp: this.refs.hp.getDOMNode().value.trim(),
      ac: this.refs.ac.getDOMNode().value.trim(),
      damage: this.refs.damage.getDOMNode().value.trim()
    };

    // validation
    if (!monster.name || !monster.hp || !monster.ac || !monster.damage) {
      return false;
    }

    this.props.addMonster(monster);

    this.refs.name.getDOMNode().value = '';
    this.refs.hp.getDOMNode().value = '';
    this.refs.ac.getDOMNode().value = '';
    this.refs.damage.getDOMNode().value = '';

    return false;
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" name="name" ref="name" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="hp">HP</label>
          <input className="form-control" type="text" name="hp" ref="hp" id="hp" />
        </div>
        <div className="form-group">
          <label htmlFor="ac">AC</label>
          <input className="form-control" type="text" name="ac" ref="ac" id="ac" />
        </div>

        <div className="form-group">
          <label htmlFor="damage">Hit Damage</label>
          <input className="form-control" type="text" name="damage" ref="damage" id="damage" />
        </div>

        <button type="submit" className="btn btn-primary ">Create</button>
      </form>
    );
  }
});

module.exports = MonsterForm;
