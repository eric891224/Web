import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';
import TodolistUI from './TodolistUI';

class Todolist extends Component{
	constructor(props) {
		super(props);
		this.state = store.getState();

		this.handleInuputChange = this.handleInuputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		//store.subscribe(this.handleStoreChange);
	}

	render() {
		return(
			<TodolistUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				handleInuputChange={this.handleInuputChange}
				handleButtonClick={this.handleButtonClick}
				handleItemDelete={this.handleItemDelete}
			/>
		);
	}

	componentDidMount() {
		store.subscribe(this.handleStoreChange);
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleInuputChange(e) {
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleButtonClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleItemDelete(index) {
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}

export default Todolist;