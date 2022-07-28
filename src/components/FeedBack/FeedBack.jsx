import React, { Component } from "react";


export default class FeedBack extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
      };
      
    addGoodItem = () =>{
        
      this.setState(()=>{
        return {
            good: this.state.good + 1
        }
      }) 
    }
    
    addNeutralItem = () =>{
        this.setState(()=>{
          return {
              neutral: this.state.neutral + 1
              
          }
        }) 
      } 

    addBadItem = () =>{
        this.setState(()=>{
          return {
              bad: this.state.bad + 1
          }
        }) 
      } 
      countTotalFeedback = () =>{
        
        this.setState(()=>{
           return {
          total: this.state.good + this.state.neutral + this.state.bad
           }
        })
      }

     render() {
        return  <div>
                        <div>
                            <h1>Please leave feedback</h1>
                            <div >
                                <button type="button" onClick={ this.addGoodItem} >Good</button>
                                <button type="button" onClick={this.addNeutralItem}>Neutral</button>
                                <button type="button" onClick={this.addBadItem}>Bad</button>
                            </div>
                        </div>
                        <div>
                            <span>Good: {this.state.good}</span>
                            <span>Neutral: {this.state.neutral}</span>
                            <span>Bad: {this.state.bad}</span>
                            <span>Total: {this.state.total}</span>
                        </div>
                </div>
     }

}
