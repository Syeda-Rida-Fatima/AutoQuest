import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCar } from '../store';
import { useSelector } from 'react-redux';
function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => {
        return state.cars.cars;
    });
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className='panel'>
                <p>
                    {car.name}-${car.cost}
                </p>
                <button className='button is-danger'
                    onClick={() => handleCarDelete(car)}>
                    delete
                </button>
            </div>
        )
    })
    return (
        <div className='car-list'>
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;