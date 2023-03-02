import React,{useState} from "react" ; 
import ExpenseDate from "../expense_date/ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem =(props)=> {
    console.log(props);
   // const{ date ,amount } = (props);

    const[title, setTitle] =useState(props.title) // [title,setTitle]
    const [date, setDate] = useState(props.date)// [date,setDate]
    const[amount, setAmount]= useState(props.amount)
  //  useState(props.title)
    
    
    //const
    // const date = new Date(2023,2,3).toISOString();
    // const title ="New Tv";
    // const amount ='79'
    // console.log(date);
    function onChangeClick(event){
        console.log('ExpenseItemExpenseItemExpensionItem');
        setTitle('updated');
        setAmount(43);
        setDate(new Date());
        //console.log(title);
    }
    return(
        <div className="expense-item">
            <ExpenseDate date = {date}/>
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={onChangeClick}>Change</button>
        </div>
    )
} 

export default ExpenseItem;

// const DummyItem =(props)=> {
//     console.log(props);
//    // const{ date ,amount } = (props);

//     const[title, setTitle] =useState(props.title) // [title,setTitle]
//     const [date, setDate] = useState(props.date)// [date,setDate]
//     const[amount, setAmount]= useState(props.amount)
//   //  useState(props.title)
    
    
//     //const
//     // const date = new Date(2023,2,3).toISOString();
//     // const title ="New Tv";
//     // const amount ='79'
//     // console.log(date);
//     function onChangeClick(event){
//         console.log('DummyItemDummyItemDummyItem');
//         setTitle('updated');
//         setAmount(43);
//         setDate(new Date());
//         //console.log(title);
//     }
//     return(
//         <div className="dummy-item">
//             <ExpenseDate date = {date}/>
//             <div className="dummy-item_description">
//                 <h2>{title}</h2>
//                 <div className="dummy-item__price">${amount}</div>
//             </div>
//             <button onClick={onChangeClick}>Change</button>
//         </div>
//     )
// } 

