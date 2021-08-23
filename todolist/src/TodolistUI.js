import React from 'react';
import { Input, Button, List } from 'antd';

const TodolistUI = (props) => {
	return(
		<div style={{marginLeft: '10px', marginTop: '10px'}}>
			<Input 
				value={props.inputValue}
				placeholder="todo info" 
				style={{width: '300px', marginRight: '10px'}}
				onChange={props.handleInuputChange}
			/>
			<Button 
				type="primary"
				onClick={props.handleButtonClick}
			>提交
			</Button>
			<List
				style={{width: '300px', marginTop: '10px'}}		      
				bordered
				dataSource={props.list}
				renderItem={(item, index) => (<List.Item onClick={() => (props.handleItemDelete(index))}>{item}</List.Item>)}
			/>
		</div>
	)
}

export default TodolistUI;