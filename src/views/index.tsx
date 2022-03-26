import {Routes, Route} from 'react-router-dom';
import {PrivateRoute, PublicRoute} from 'shared/hocs';
import HomePage from './home';
import Login from './login';

const Routings = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
        </Routes>
    );
};

export default Routings;
