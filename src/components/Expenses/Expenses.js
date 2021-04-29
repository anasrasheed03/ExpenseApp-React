
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
  const [selectedYear,setSelectedYear]=useState('2020')
  const getSelectedYear=(year)=>{
    setSelectedYear(year)
  }

  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === selectedYear;
  })


  return (
    <Card className="expenses">
      <ExpenseFilter selectedOption={getSelectedYear} selectdValue={selectedYear}/>
      {/* {filteredExpense.length === 0 && <p>No Expense Found</p>} */}
      {/* {filteredExpense.length > 0 &&  } */}
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList items={filteredExpense}/>
      {/* <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;