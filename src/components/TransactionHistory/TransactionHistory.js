import PropTypes from 'prop-types';
import { Transactions, Thead, Th, Td, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {

    return (
        <Transactions>
            <Thead>
                <tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </tr>
            </Thead>
        
            <tbody>
                {items.map(item => <Tr key={ item.id}>
                    <Td>{item.type }</Td>
                    <Td>{item.amount }</Td>
                    <Td>{item.currency}</Td>
                </Tr>)}  
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