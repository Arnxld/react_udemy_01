import React, {useState} from 'react'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredData,
        }

        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button type="button" onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense