import Cookies from 'js-cookie';
import {Suspense} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

type IProps = {
    children?: any;
};

const PrivateRoute = ({children}: IProps) => {
    const cookie = Cookies.get('token');
    const isAuth = false;
    const location = useLocation();

    if (cookie || isAuth) {
        return (
            <div>
                <Suspense fallback={<div>Loading....</div>}>
                    {children}
                </Suspense>
            </div>
        );
    } else {
        return (
            <Navigate to="/login" replace state={{path: location.pathname}} />
        );
    }
};

export default PrivateRoute;
