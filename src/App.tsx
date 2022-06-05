import React, {useState} from 'react';
import './App.css';
import TopCars from './components/TopCars';
import AddSubscriber from './components/AddSubscriber';
import ReceiveMoney from './components/ReceiveMoney';

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const subscribers = [
        {name: 'Alex', age: 25},
        {name: 'Max', age: 32},
        {name: 'Fedor', age: 28}
    ]

    return (
        <div className="App">
            <TopCars cars={topCars}/> // this component tests method .map
            <AddSubscriber subscriber={subscribers}/> // button tag test
            <ReceiveMoney/> // train filter method and hooks
        </div>
    );
}

export default App;
