// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  denominateAmount = (id, value) => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="container">
          <div className="name-container">
            <p className="profile">s</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="amount-in">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                amount={eachItem}
                key={eachItem.id}
                denominateAmount={this.denominateAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
