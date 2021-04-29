import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props)=>{
    const SavedEnteredData = (enteredData)=>{
        const enteredFormData ={
            ...enteredData,
            id:Math.random().toString(),
        }
        props.onEnteredNewData(enteredFormData)
    }

    return <div className="new-expense">
        <ExpenseForm onSavedEnteredData={SavedEnteredData}/>
    </div>
};

export default NewExpense;