import React from "react";
import ReactDOM from "react-dom";
import Main from './EntryFile/Main';

ReactDOM.render(<Main/>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}