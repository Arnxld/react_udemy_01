import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear() === Number(filteredYear)
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;