// Write your code here

import './index.css'

const DenominationItem = props => {
  const {amountBtnDetails, amountWithdraw} = props
  const {value} = amountBtnDetails
  const onAmountChange = () => {
    amountWithdraw(value)
  }
  return (
    <li className="each-button">
      <button type="button" className="amount-btn" onClick={onAmountChange}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
