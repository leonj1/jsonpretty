import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class OutputJson extends Component {

	render() {
		return (
			<div>
                <form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Pretty JSON</ControlLabel>
                    <FormControl
                      style={{height: '150px'}}
                      componentClass="textarea"
                      height="100"
                      value={this.props.pretty}
                      placeholder="JSON Formatted Text here"
                    />
                  </FormGroup>
                </form>
			</div>
		)
	}
}

OutputJson.propTypes = {
	pretty: PropTypes.string
}

export default OutputJson;

