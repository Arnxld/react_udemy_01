import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredData,
        }

        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense