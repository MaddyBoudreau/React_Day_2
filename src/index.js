import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  constructor() {
    super()
/*     const element = <h1>Hello</h1>;
    console.log(element) */
    this.loggedInStudent = 'Pam'
  }

  displayLoggedInStudent() {
    if (this.loggedInStudent) {
      return <h1>Welcome, { this.loggedInStudent }</h1>
    } else {
      return <h1>There is no one logged in.</h1>
    }
  }

  displayStudents() {
    const students = ["Lucas", "Chris", "Jake"]

    // Approach 1: With a for loop
    for (let i = 0; i < students.length; i++) {
      students[i] = <li>{ students[i] }</li>
    }

    const element = (
      <ul>
        {students}
      </ul>
    )

    // Approach 2: With the map method
/*     const element = (
      <ul>
        { students.map((student) => <li>{ student }</li>) }
      </ul>
    ) */

    console.log(element)

    return element;
  }

  render() {
    return (
      <div className="App">
        {/* { this.displayLoggedInStudent() } */}
        {
          // Ternary operator:
          // condition ?
          // output if true :
          // output if false
          (this.loggedInStudent) ?
          (<h1>Welcome, { this.loggedInStudent }</h1>) :
          (<h1>There is no one logged in.</h1>)
        }
        { this.displayStudents() }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))