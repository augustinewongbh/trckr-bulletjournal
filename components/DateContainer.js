import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DayPicker from "react-day-picker";
import { Popup, Button, Icon } from "semantic-ui-react";
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
  nextDayClick = () => {
    let selectedDay = this.state.selectedDay;
    let updatedDay = moment(selectedDay).add(1, "days");
    this.props.showByDate(updatedDay.format("YYMMDD"));
    this.setState({ selectedDay: updatedDay });
  };
  previousDayClick = () => {
    let selectedDay = this.state.selectedDay;
    let updatedDay = moment(selectedDay).subtract(1, "days");
    this.props.showByDate(updatedDay.format("YYMMDD"));
    this.setState({ selectedDay: updatedDay });
  };
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render = () => (
    <div className="dateCont">
      <div>
        <Button
          circular
          icon="chevron left"
          style={{ background: "transparent" }}
          onClick={this.previousDayClick}
        />
      </div>
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
        on={["click"]}
        onClose={() => this.setState({ isOpen: false })}
      >
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </Popup>
      <div>
        <Button
          circular
          icon="chevron right"
          style={{ background: "transparent" }}
          onClick={this.nextDayClick}
        />
      </div>
      <style jsx>{`
        .dateCont {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showByDate: date => dispatch(showByDate(date))
  };
};

export default connect(null, mapDispatchToProps)(DateCont);
