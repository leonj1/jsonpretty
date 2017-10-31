import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class InputJson extends Component {
	constructor(props){
		super(props);
        this.state = {
			contents: ""
		}
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
	}

	render() {
		return (
			<div>
                <form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Input JSON</ControlLabel>
                    <FormControl
                      style={{height: '150px'}}
                      componentClass="textarea"
                      height="100"
                      value={this.state.contents}
                      placeholder="Enter text"
                      onChange={this.inputChangeHandler}
                    />
                  </FormGroup>
                </form>
			</div>
		)
	}

    inputChangeHandler = event => {
        this.setState({ contents: event.target.value });
        console.log('InputJSON: TargetValue: ' + JSON.stringify(event.target.value));
		this.props.onJsonInput && this.props.onJsonInput({ contents: event.target.value });
        event.preventDefault();
	}
}

InputJson.propTypes = {
	onJsonInput: PropTypes.func
}

export default InputJson;

