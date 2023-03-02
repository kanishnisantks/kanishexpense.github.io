import React from "react";
import ExpenseForm from "./expense_form/ExpenseForm";
import './NewExpense.css'

const NewExpense =(props)=>{

        const onSave=(value) => {
            const expense_data={
                ...value,
                id:Math.random().toString()
            }
            props.onAddExpense(expense_data)
            console.log('kanish',expense_data,value);

        }
        
    
    return ( <div className="new-expense">
       <ExpenseForm
       onSave={onSave}
       /> 
          </div>
    );
}

export default NewExpense;