import React from 'react';
import TodoItem from './components/todo-item';

class Test extends React.Component {
	constructor(props){
		super(props);		
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
	}
	createItem(){
		var newId = this.state.items.reduce((prev, cur)=>{
			return cur.id > prev ? cur.id : prev;
		}, 0) + 1;		

		return {isComplete:false, title:"", id:newId};
	}
	addItem(){
		var items = this.state.items;
		items.push(this.createItem());
		this.setState({items: items});			
	}
	clearCompleted(){
		var items = this.state.items.filter((item)=>{
			return !item.isComplete;
		});
		console.log(items);
		this.setState({items:items});		
	}

	render() {


		return (
			<ul>			
				{this.state.items.map((item) => {
					return (<TodoItem item={item} key={item.id}/>);
				})}
				<button onClick={this.addItem}>Add item</button>
				<button onClick={this.clearCompleted}>Clear completed task</button>		
			</ul>
			);
	}
}

React.render(<Test/>, document.body);