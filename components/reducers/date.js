import moment from "moment";
const a = new Date();
let fullDate = moment(a).format("YYMMDD");

const date = (state = fullDate, action) => {
  switch (action.type) {
    case "SHOW_BY_DATE":
      return action.date;

    default:
      return state;
  }
};

export default date;
