import React from 'react';
// import { Router, Route, Link } from 'react-router';
import { Layout } from 'antd';
import MyHeader from './MyHeader.jsx';
import MySidebar from './MySidebar.jsx';
import MyBreadcrumb from './MyBreadcrumb.jsx';

const { Content } = Layout;

class Main extends React.Component {
	constructor(props){
        super(props);
    }
    render() {
		return (
			<Layout>
				<MyHeader/>
				<Layout>
					<MySidebar/>
					<Layout style={{ padding: '0 24px 24px' }}>
						<MyBreadcrumb/>
						<Content
							style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280,
							}}
						>Content
						</Content>
					</Layout>
				</Layout>
			</Layout>
		)
    }
}

export default Main;