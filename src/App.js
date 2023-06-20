import React from 'react';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

import Carform from './components/Carform';
function App() {
    return (
        <div>
            <CarList />
            <CarSearch />
            <CarValue />
            <Carform />
        </div>
    );
}

export default App;