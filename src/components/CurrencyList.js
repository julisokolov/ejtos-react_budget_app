import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const { dispatch, currency } = useContext(AppContext);
    const setCurrency = (option) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: option,
        });
    }

    const fieldStyling = {
        "padding": "5px",
        "background-color": "#50C878",
        "color": "white",
        "border-radius": "5px",
    };
    
    return (
        <select style={fieldStyling} value={currency} onChange={(event) => setCurrency(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    );
};
export default CurrencyList;