import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
const ExpenseList =(props)=>{

    if(props.items.length === 0){
        return <h4 className="expenses-list__fallback">No Expense Found</h4>
    }
    return <ul className="expenses-list">
        {props.items.map((element) => (
      <ExpenseItem 
      title={element.title} 
      amount={element.amount} 
      date={element.date}
      key={element.id}
      />        
      ))}
    </ul>

}

export default ExpenseList;