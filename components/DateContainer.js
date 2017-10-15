import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DayPicker from "react-day-picker";
import { Popup, Button } from "semantic-ui-react";
import { showByDate } from "./actions/bulletjournalactions";
class CurrentDate extends Component {
  render = () => (
    <div>
      <h1>{this.props.day}</h1>
      <h1 style={{ marginTop: 0 }}>{this.props.date}</h1>
    </div>
  );
}

class DateCont extends Component {
  state = {
    selectedDay: new Date(),
    isOpen: false
  };

  handleDayClick = day => {
    this.props.showByDate(moment(day).format("YYMMDD"));
    this.setState({
      selectedDay: day,
      isOpen: false
    });
  };
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render = () => (
    <div style={{ textAlign: "center" }}>
      <Popup
        trigger={
          <div onClick={this.toggleOpen}>
            <CurrentDate
              day={moment(this.state.selectedDay)
                .format("dddd")
                .toUpperCase()}
              date={moment(this.state.selectedDay)
                .format("DD MMM")
                .toUpperCase()}
            />
          </div>
        }
        open={this.state.isOpen}
        flowing
        position="bottom center"
        on="click"
      >
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </Popup>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showByDate: date => dispatch(showByDate(date)),
    toggleTodoStatus: (id, currentStatus) =>
      dispatch(toggleTodoStatus(id, currentStatus))
  };
};

export default connect(null, mapDispatchToProps)(DateCont);
