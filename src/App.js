import './App.css'
import React, { Component } from 'react'
import randomColor from 'randomcolor'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      color: ""
    }



  }

  componentDidMount() {
    this.setState({ color: "red" })
    console.log("mounted and color changed")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("1-Current Count SATATE", this.state.count)
    console.log("2-PREVIOS Count SATATE", prevState.count)
    if (prevState.count !== this.state.count) {
      this.setState({ color: randomColor() })
    }


  }


  incrementHandler = () => {
    this.setState((preCount) => {
      return (
        { count: preCount.count + 1 }
      )
    }
    )
  }
  decrementHandler = () => {
    this.setState((preCount) => {
      return ({
        count: preCount.count - 1
      })
    })
  }
  resetHandler = () => {
    this.setState(() => {
      return ({ count: 0 })
    })
  }


  render() {
    return (

      < div className="counter" >
        {console.log("rendering done")}
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <div className="btnAction">
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div >

    )
  }
}
export default App