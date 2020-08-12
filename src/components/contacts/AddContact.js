import React, { Component, Fragment } from "react"
import classnames from "classnames"
import { v4 as uuidv4 } from "uuid"

// import PropTypes from "prop-types"

export class AddContact extends Component {
  //   static propTypes = {}

  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    //variables to store out state values
    const { name, email, phone } = this.state //instaed of this.state.name....

    //checking err
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } })
      return //this will stop the onSummit from running
    }
    if (email === "") {
      this.setState({ errors: { email: "Name is required" } })
      return //this will stop the onSummit from running
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Name is required" } })
      return //this will stop the onSummit from running
    }
    //isValid _ bootstrap inValid
    //we can change the classes by dynamic

    //create a newContact object
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    }
    // send the new contact to a api or state management
    console.log(newContact)
  }
  render() {
    const { name, email, phone, errors } = this.state
    return (
      <Fragment>
        <h1 className='display-4 text-primary'>Add New Contact</h1>

        {/* card start */}
        <div className='card mb-3'>
          <div className='card-header'>Add contact</div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label>Name</label>
                <input
                  type='text'
                  className={classnames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  placeholder='name'
                  name='name'
                  value={name}
                  onChange={this.onChange}
                />
                {errors.name && (
                  <div className='invalid-feedback'>{errors.name}</div>
                )}
              </div>
              <div className='form-group'>
                <label>email</label>
                <input
                  type='email'
                  className={classnames("form-control", {
                    "is-invalid": errors.email,
                  })}
                  placeholder='email'
                  name='email'
                  value={email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
              </div>
              <div className='form-group'>
                <label>Phone</label>
                <input
                  type='text'
                  className={classnames("form-control", {
                    "is-invalid": errors.phone,
                  })}
                  placeholder='Phone'
                  name='phone'
                  value={phone}
                  onChange={this.onChange}
                />
                {errors.phone && (
                  <div className='invalid-feedback'>{errors.phone}</div>
                )}
              </div>
              <button
                type='submit'
                value='Add contact'
                className='btn btn-light btn-block'
                onSubmit={this.onSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          {/* card end */}
        </div>
      </Fragment>
    )
  }
}

export default AddContact
