import React, { useEffect, useState } from 'react'
// import { datepicker } from 'js-datepicker'

function Add() {
    const [date, setDate] = useState('')
    const [description, setDesc] = useState('')
    const [amount, setAmount] = useState(0)
    const [transactions, setTransactons] = useState([]);

    useEffect(() => {
        getTransactions().then(setTransactons)
    }, [])

    async function getTransactions() {
        const url = process.env.REACT_APP_URL + '/transactions';
        const response = await fetch(url)
        return await response.json()
    }

    async function addNewTransaction(e) {
        e.preventDefault();
        console.log("Form Submitted")
        const url = process.env.REACT_APP_URL + '/transaction';
        console.log(url);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ description, date, amount })
            })
            if (!response.ok) {
                throw new Error('Failed to add transaction');
            }

            const json = await response.json();
            console.log('Result:', json);

        } catch (error) {
            console.log("ERROR in fetching string data")
        }
        setDate('');
        setAmount('');
        setDesc('');
    }

    let balance = 0;
    for (const transaction of transactions) {
        balance += transaction.amount;
    }
    return (
        <>
            <h1 className='font-bold text-center text-4xl p-5'>Total Spent : <span>Rs.</span>{balance}</h1>
            <div className='text-center'>
                <input type='text' placeholder='Description' onChange={(e) => setDesc(e.target.value)} className='p-1 m-5 rounded-sm text-gray-900' />
                <input type='datetime-local' placeholder='Date' onChange={(e) => setDate(e.target.value)} className='p-1 m-5 rounded-sm text-gray-900' />
                <input type='text' placeholder='Amount Spent' onChange={(e) => setAmount(e.target.value)} className='p-1 m-5 rounded-sm text-gray-900' />
                <button onClick={addNewTransaction} className='m-5 rounded-lg p-2 bg-gray-200 text-gray-900 font-semibold'>Add Expenses</button>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center p-10  rounded w-[50%]'>
                    {transactions.length > 0 && transactions.map(transaction => (
                        <div className='flex items-center justify-between mx-20 my-4 w-full bg-slate-500 p-5 rounded-lg'>
                            <div>
                                <div className='text-3xl'>{transaction.description}</div>
                                <div className='text-md p-1'>{transaction.date}</div>
                            </div>
                            <div className='text-xl p-1 justify-center'>${transaction.amount}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Add
