// Write your code
import './index.css'

const DenominationItem = props => {
  const {amount, denominateAmount} = props
  const denominate = () => {
    denominateAmount(amount.id,amount.value)
  }
  return (
    <div className="list-container">
      <li>
        <button onClick={denominate}>{amount.value}</button>
      </li>
    </div>
  )
}

export default DenominationItem
