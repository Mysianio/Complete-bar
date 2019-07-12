export default function goalData(state = [], action){
  switch (action.type) {
    case "GET_GOAL_DATA":
      return action.data
      break;
    default:
      return state;
  }
}
