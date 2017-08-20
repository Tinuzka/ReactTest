import React, { Component } from 'react';
import './Test.css';



class Test extends Component {
	
constructor(props) {
    super(props);
	this.state = {scores: {}, index: 0};
  }
  
  handleClick(points, id) {
	var scoreDict = this.state.scores
	if(scoreDict[id] == null) {
		scoreDict[id] = points
	} else {
		scoreDict[id] = scoreDict[id] + points
	}
	  this.setState({scores: scoreDict, index: this.state.index +1 });
    console.log(this); // null
  }
  
  handleStartClick() {
	  this.setState({scores: {}, index: 0});
  }
	
  showResult() {
	  var result = this.getBiggestResult(this.state.scores)
	  return (
		<div>
        <p className="Test-end">
		{this.props.result[result]}
        </p>
		<div className="button" onClick={this.handleStartClick.bind(this)}>Uudestaan!</div>
		</div>
		);
  }
  
  getBiggestResult(dictionary) {
	  
	  var resultId = Object.keys(dictionary)[0];
	  for(var key in dictionary) {
		  if(dictionary[key] > dictionary[resultId]) {
			  resultId = key
		  }
	  }
	  return resultId;
	  
  }
  
  showQuestion() {
	  return (
	  <div>
		<p className="Test-question">
			{this.props.items[this.state.index].question}
		</p>
		<p className="Answer-options">
		
           <ul>{ this.props.items[this.state.index].answers.map((m) => {
        
                    return <li onClick={this.handleClick.bind(this, m.points, m.id)}>{m.text}</li>;
        
                }) }
                        
            </ul>
                
        </p>
		</div>
	  );
  }
  
  showContent() {
	  if (this.props.items.length > this.state.index){
			return this.showQuestion();
		} else {
			return this.showResult();
		};
  }
	
  render() {
    return (
      <div className="test">
        <div className="test-header">  
			<h2>Lajitteluhattu</h2>
        </div>
		<div className="Test-frame">
			{this.showContent()}
		</div>
      </div>
    );
  }
}

export default Test;