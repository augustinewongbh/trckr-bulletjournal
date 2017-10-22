import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { changeTime } from "./actions/bulletjournalactions";

class AdjustTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: this.props.time.hour || 21,
      minute: this.props.time.minute || 0
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: parseInt(e.target.value, 10)
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState !== this.state);
    prevState !== this.state &&
      this.props.changeTime(this.state.minute, this.state.hour);
  }
  render() {
    return (
      <div>
        <Input
          id="hour"
          type="number"
          min="0"
          max="23"
          value={this.state.hour}
          onChange={this.handleChange}
        />
        <Input
          id="minute"
          type="number"
          min="0"
          max="59"
          value={
            this.state.minute < 10 ? `0${this.state.minute}` : this.state.minute
            //bug - cannot clear off 0 during backspace
          }
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.time
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeTime: (minute, hour) => dispatch(changeTime(minute, hour))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdjustTime);
