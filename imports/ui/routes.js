import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';

export default Routes = () => {
    return (
        <>
            <Routes>

                <Route exact path="/" element={<LoginForm/>}/>

            </Routes>
        </>
    )
}



