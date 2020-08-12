import React, { Component } from "react"

class Test extends Component {
  state = {
    message: "Hello",
  }
  componentDidMount() {
    //runs when the component has rendered whe it has mounted
    console.log("component did Mounted")
    //this is the place we would make call to an API if we are using one
  }
  componentDidUpdate() {
    //this runs of there is any change to the state
    console.log("componentDid/ state change")
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log("Submit")
  }
  render() {
    const { message } = this.state
    return (
      <div className='container'>
        <h3>Test Component</h3>
        <p>life cycle methods</p>
        <h1 className='text-danger'>{message}</h1>

        <form>
          <div className='form-group'>
            <label htmlFor='newMessage'>New Message</label>
            <input
              type='text'
              className='form-control'
              id='newMessage'
              placeholder='New Message'
              name='message'
              value={message}
              onChange={this.onChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onSubmit={this.onSubmit}
          >
            Submit
          </button>
        </form>
        <br />
      </div>
    )
  }
}
export default Test
