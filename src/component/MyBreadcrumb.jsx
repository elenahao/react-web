import React from 'react';
// import { Router, Route, Link } from 'react-router';
import { Breadcrumb } from 'antd';

class MyBreadcrumb extends React.Component {
	constructor(props){
        super(props);
    }
    render() {
		return (
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
		  	</Breadcrumb>
		)
    }
}

export default MyBreadcrumb;