import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getGoalData} from '../actions/getGoalData.js'

class Goal extends Component{
  componentDidMount(){
    this.props.onGetGoalData('http://alex.devel.softservice.org/testapi/');
    let totalPoints = this.props.balance;
    let interval = setInterval(()=>{
      if (totalPoints !== undefined){
        totalPoints= (+totalPoints + 0.2).toFixed(2)
        this.props.onAdd(totalPoints)
      }else{
        totalPoints = this.props.balance;
      }
      if (parseInt(totalPoints) == 15){
        clearInterval(interval)
      }
    },2000)
  }
  render(){
    let totalScore, totalPoints, need, goalLineWidth, goalIndexWidth, goalText, targetStyle;
    if (this.props.balance !== undefined){
      totalScore = 15 // there is no data for it, so you can put custom data here
      totalPoints = (+this.props.balance).toFixed(2);
      need = (totalScore - totalPoints).toFixed(2);
      goalLineWidth = (160 / totalScore * totalPoints-2).toFixed(2);
      goalIndexWidth= -185 + (+goalLineWidth);
      if (parseInt(totalPoints) == totalScore){
        goalText = `You've reached $${totalScore}`
        targetStyle = '#00A910';
      }else{
        goalText = `You need $${need} more to reach your target.`
        targetStyle = '';
      }
    }else{
      totalScore = '';
      need = '';
      goalLineWidth = 0;
    }

    return(
      <div className='appFunc'>
        <span>Reached:</span>
        <div className='goalLine'>
          <div style={{width: goalLineWidth+'px'}}>
          </div>
        </div>
        <div className='goalIndex' style={{left: goalIndexWidth+'px'}}>
          <span>&diams;</span>
          <span>${totalPoints}</span>
        </div>
        <div className='goal' style={{background: targetStyle}}>
          <span>Target</span>
          <h4>{totalScore}</h4>
        </div>
        <span className='need'>{goalText}</span>
      </div>
    )
  }
}

export default connect(
  state =>({
    balance: state.goalData.balance_usd
  }),
  dispatch =>({
    onGetGoalData: (url) =>{
      dispatch(getGoalData(url))
    },
    onAdd: (data) =>{
      dispatch({type: "GET_GOAL_DATA", data: {balance_usd: data}})
    }
  })
)(Goal)
