import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {

    static PropTypes = {
        email: PropTypes.string,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event) {
        console.log('Form Values', this.props.formValues);
    }
    render() {
        return (
            <button className="contact-button"
            disabled={this.state.isClicked}
            onClick={this.logFormDataToConsole}
            >
            Kontaktirajte nas
            </button>
        );
    }
}

export default Button;