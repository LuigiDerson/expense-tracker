import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

interface Props {
    
}

const TransactionList: React.FC<Props> = () => {
    const { transactions } = useContext(GlobalContext)
    
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => <Transaction transaction={transaction} />)}
            </ul>
        </>
    )    
}

export default TransactionList