export function getGoalDataSuccsess(data){
  return {
    type: "GET_GOAL_DATA",
    data
  }
}

export function getGoalData(url){
  return (dispatch)=>{
    fetch(url,  {method: 'GET'})
      .then(response =>{
        if(!response.ok){
          console.log('Error');
        }
        return response;
      })
      .then(response=> response.json())
      .then(data => dispatch(getGoalDataSuccsess(data)))
  }
}
