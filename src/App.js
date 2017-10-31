import React, { Component } from 'react';
import InputJson from './InputJson';
import OutputJson from './OutputJson';
import './App.css';
import { connect } from 'react-redux';
import { submitFormatJson } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onJsonInputHandler = this.onJsonInputHandler.bind(this);
  }

  render() {
    return (
      <div className="container">
          <InputJson onJsonInput={ this.onJsonInputHandler } />
		  <OutputJson pretty={ this.props.pretty } />
      </div>
    );
  }

  onJsonInputHandler = contents => {
    this.props.makeJsonPrettyProp(contents);
  }
}

const mapStateToProps = state => {
  return {
    contents: state.contents,
    pretty: state.pretty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeJsonPrettyProp: function(contents) {
      dispatch(submitFormatJson(contents));
    }
  }
}

const ReduxApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ReduxApp;

