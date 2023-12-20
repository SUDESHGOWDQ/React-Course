import { Component } from 'react'

export default class CChild extends Component {
  render() {
    return (
      <div>
        <h1>Mera Naam {this.props.name}  and Mera Umar {this.props.age} </h1>
      </div>
    )
  }
}
