import React from 'react';
import { useSelector } from 'react-redux';
function CarList() {
    const cars = useSelector((state) => {
        return state.cars.cars;
    });
    console.log(cars)
    return (
        <div>
            CarList
        </div>
    );
}

export default CarList;