import React from 'react';

type topCarsPropsType = {
    cars: Array<carsPropsType>
}

type carsPropsType = {
    manufacturer: string,
    model: string
}

function TopCars(props: topCarsPropsType) {
    return (
        <div>
        {props.cars.map((el: carsPropsType, index: number) => {
                return (
                    <tr key={index}>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
        )})}
        </div>
    )
}

export default TopCars;