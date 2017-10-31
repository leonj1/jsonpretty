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
        <div className="row">
          <div className="col-sm-6">
            <InputJson height={ this.props.height } onJsonInput={ this.onJsonInputHandler } />
          </div>
          <div className="col-sm-6">
            <OutputJson height={ this.props.height } pretty={ this.props.pretty } />
          </div>
        </div>
        <div className="row">
          <p>A React, Redux, and Saga app to render pretty JSON. <span className="redFont" >Data stays in the client; nothing on the backend.</span></p>
        </div>
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
    pretty: state.pretty,
    height: state.height
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

