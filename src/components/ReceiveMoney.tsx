import React from 'react';
import {useState} from 'react';

type filterPropsType = 'All' | 'Dollars' | 'RUBLS'

function ReceiveMoney() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: 'a1234567890'},
        {banknots: 'Dollars', value: 50, number: 'z1234567890'},
        {banknots: 'RUBLS', value: 100, number: 'w1234567890'},
        {banknots: 'Dollars', value: 100, number: 'e1234567890'},
        {banknots: 'Dollars', value: 50, number: 'c1234567890'},
        {banknots: 'RUBLS', value: 100, number: 'r1234567890'},
        {banknots: 'Dollars', value: 50, number: 'x1234567890'},
        {banknots: 'RUBLS', value: 50, number: 'v1234567890'},
    ])
    const [filter, setFilter] = useState<filterPropsType>('All')
    let currentMoney = money
    if (filter === 'Dollars') {
        money.filter((filteredMoney) => {
            return filteredMoney.banknots === 'Dollars'
        })
    }
    if (filter === 'RUBLS') {
        money.filter((filteredMoney) => {
            return filteredMoney.banknots === 'RUBLS'
        })
    }
    const onClickHandler = (nameButton: filterPropsType) => {
        return setFilter(nameButton)
    }

    return (
        <div>
            <ul>
                {money.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onClickHandler(nameButton:'All')}>All</button>
                <button onClick={() => onClickHandler(nameButton:'Dollars')}>Dollar</button>
                <button onClick={() => onClickHandler(nameButton:'RUBLS')}>Ruble</button>
            </div>
        </div>
    )
}

export default ReceiveMoney;