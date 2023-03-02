import React from "react";
import ExpenseItem from "../expenses/expense_item/ExpenseItem";
import './Expenses.css';

const Expenses = (props) =>{
    const expenses = props.expenses;
    return(
        <div className="expenses">
            {
                expenses.map((exp) => (
                   <ExpenseItem
                   key={exp.id}
                   title={exp.title}
                   amount={exp.amount}
                   date={exp.date}/> 
                )
                )
            }
        {/* <ExpenseItem
        title = {expenses[0].title}
        amount={expenses[0].amount}
        date={ expenses[0].date}
        />
        <ExpenseItem
        title = {expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        />
         <ExpenseItem
        title = {expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        /> */}
        </div>
    )
}

export default Expenses;


// const DUMMY = (props) =>{
//     const dummy = props.dummy;
//     return(
//         <div className="dummy">
//         <DummyItem
//         title = {dummy[0].title}
//         amount={dummy[0].amount}
//         date={ dummy[0].date}
//         />
//         <DummyItem
//         title = {dummy[1].title}
//         amount={dummy[1].amount}
//         date={dummy[1].date}
//         />
//          <DummyItem
//         title = {dummy[2].title}
//         amount={dummy[2].amount}
//         date={dummy[2].date}
//         />
//         </div>
//     )
// }

// export default DUMMY;
