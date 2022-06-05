import React from 'react';
import './App.css';
import TopCars from './components/TopCars';
import AddSubscriber from './components/AddSubscriber';

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
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    return (
        <div className="App">
            <TopCars cars={topCars}/> // this component tests method .map
            <AddSubscriber subscriber={subscribers}/> // button tag test
        </div>
    );
}

export default App;
