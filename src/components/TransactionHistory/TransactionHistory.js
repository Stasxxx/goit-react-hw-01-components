import PropTypes from 'prop-types';
import { Transactions } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {

    return (
        <Transactions>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
        
            <tbody>
                {items.map(item => <tr key={ item.id}>
                    <td>{item.type }</td>
                    <td>{item.amount }</td>
                    <td>{item.currency}</td>
                </tr>)}  
            </tbody>
        </Transactions>);
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}