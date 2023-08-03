import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (sum) => {
        if (parseInt(sum) >= 20000) {
            alert("Budget cannot exceed 20 000.");
            return
        } else if (budget < totalExpenses) {
            alert("Budget cannot be lower than the spending.")
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: sum,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget:
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;