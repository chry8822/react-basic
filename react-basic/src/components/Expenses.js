import ExpenseItem from "./ExpenseItme";
import Card from './Card'
import './Expenses.css'

function Expenses(props) {
  const itmes = props.items;

  return (
    <Card className='expenses'>
      <ExpenseItem title={itmes[0].title} amount={itmes[0].amount} date={itmes[0].date} />
      <ExpenseItem title={itmes[1].title} amount={itmes[1].amount} date={itmes[1].date} />
      <ExpenseItem title={itmes[2].title} amount={itmes[2].amount} date={itmes[2].date} />
      <ExpenseItem title={itmes[3].title} amount={itmes[3].amount} date={itmes[3].date} />
    </Card>
  )
}

export default Expenses;