import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: "Shiri",
  email: "shiri@gmail.com",
  phone: "000 000 000",
};
Contact.propTypes = {
  contact: PropTypes.object,
};
export default Contact;
