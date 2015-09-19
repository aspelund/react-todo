import React from 'react';

export default class TodoItem extends React.Component {
	constructor(props) {
    	super(props);
    	this.titleInput = {};
    	this.state = {
    		item : props.item,
    		editMode : props.editMode || (props.item.title.length === 0 ?true:false)
    	} ;    	
	
		this.toggleComplete = this.toggleComplete.bind(this);
		this.enterEditMode = this.enterEditMode.bind(this);
		this.exitEditMode = this.exitEditMode.bind(this);
		this.updateTitle = this.updateTitle.bind(this);
  	}

  	enterEditMode(event){
  		this.setState({editMode : true});
  	}
  	exitEditMode(event){
  		this.setState({editMode : false});	
  	}
  	updateTitle(event){
  		var item = this.state.item;
  		item.title = event.target.value;
  		this.setState({item: item});
  	}
  	toggleComplete(event){
  		let item = this.state.item;
  		item.isComplete = !item.isComplete;
  		this.setState({item : item});

  	}

	render() {		
		var titleMarkup;	
		var classString = 	this.state.item.isComplete?'completed':'';
		if(!this.state.editMode){
			titleMarkup = (<span className={classString} onClick={this.enterEditMode}>{this.state.item.title}</span>);	
		}else{			
			this.titleInput = (<input placeholder="Enter todo item" value={this.state.item.title} onChange={this.updateTitle}/>); 
			titleMarkup = (<span> {this.titleInput} <button onClick={this.exitEditMode}>OK</button></span>);	
		}
		

		return (
    	  <li>
    	  	<input type='checkbox' checked={this.state.item.isComplete} onChange={this.toggleComplete}/>
    	  	{titleMarkup}
	  	</li>
    	);	
    }
}