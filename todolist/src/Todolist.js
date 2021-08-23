import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class Todolist extends Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			list: ['hello', 'world']
		}

		this.handleInuputChange = this.handleInuputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}

	render() {
		return(
			<div style={{marginLeft: '10px', marginTop: '10px'}}>
				<Input 
					value={this.state.inputValue}
					placeholder="todo info" 
					style={{width: '300px', marginRight: '10px'}}
					onChange={this.handleInuputChange}
					/>
				<Button 
					type="primary"
					onClick={this.handleButtonClick}
				>提交
				</Button>
				<List
		      style={{width: '300px', marginTop: '10px'}}		      
		      bordered
		      dataSource={this.state.list}
		      renderItem={(item, index) => (<List.Item onClick={() => (this.handleItemDelete(index))}>{item}</List.Item>)}
    		/>
			</div>
		);
	}

	handleInuputChange(e) {
		//console.log(e.target.value);
		this.setState(() => ({
			inputValue: e.target.value
		}))
	}

	handleButtonClick() {
		this.setState(() => ({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ""
		}))
	}

	handleItemDelete(index) {
		const list = this.state.list;
		list.splice(index, 1);
		this.setState(() => ({
			list
		}))
	}
}

export default Todolist;