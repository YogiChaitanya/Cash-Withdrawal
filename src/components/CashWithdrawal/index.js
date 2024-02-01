// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  amountWithdraw = value => {
    this.setState(preState => ({
      amount: preState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card-1">
            <div className="violate-circle">
              <p>s</p>
            </div>
            <p>Sarah Williams</p>
          </div>
          <div className="card-2">
            <p className="paragraph-1">Your Balance</p>
            <div>
              <p className="final-amount">{amount}</p>
            </div>
          </div>
          <div className="card-3">
            <p className="paragraph-2">In Rupees</p>
          </div>
          <div className="card-4">
            <p className="paragraph-3">Withdraw</p>
            <p className="paragraph-4">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttons-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                key={eachValue.id}
                amountBtnDetails={eachValue}
                amountWithdraw={this.amountWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
