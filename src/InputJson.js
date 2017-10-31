import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class InputJson extends Component {
	constructor(props){
		super(props);
        this.state = {
			contents: "{ \"person\": \"me\", \"likes\": [\"pizza\", \"fries\"] }"
		}
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
	}

    componentDidMount() {
       this.props.onJsonInput && this.props.onJsonInput({ contents: this.state.contents });
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
                      style={{height: this.props.height}}
                      componentClass="textarea"
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
	onJsonInput: PropTypes.func,
    height: PropTypes.string
}

export default InputJson;

