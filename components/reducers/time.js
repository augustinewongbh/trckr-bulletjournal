import moment from "moment";

const initialState = {
  minute: 0,
  hour: 21
};

const time = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TIME":
      return {
        minute: action.minute,
        hour: action.hour
      };

    default:
      return state;
  }
};

export default time;
