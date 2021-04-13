import React, {useContext} from 'react'
import { GlobalContext } from '../components/context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)

// console.log(context) //outputs the transaction arrays to console. HOW


    return (
        <>
             <h3>History</h3>
      <ul id="list" className="list">

        {transactions.map(transactions => (<Transaction key = {transactions.id} transaction = {transactions}/> ) )}

      </ul>

        </>
    )
}

export default TransactionList
