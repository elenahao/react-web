import React, {Component} from "react";
import { version } from "antd";

class App extends Component {
	render(){
	  return (
		<div className="App">
		  <h1>antd version: {version}</h1>
		  <p>
			Please <b>fork</b> this sandbox to reproduce your issue.
		  </p>
		</div>
	  )
}
}

export default App;