import Cookies from 'js-cookie';
import {Suspense} from 'react';
import {Navigate, useLocation} from 'react-router-dom';

type IProps = {
    children?: any;
};

const PublicRoute = ({children}: IProps) => {
    const cookie = Cookies.get('token');
    const isAuth = false;
    const location = useLocation();

    // && !isAuth

    if (!cookie) {
        return (
            <div>
                <Suspense fallback={<div>Loading....</div>}>
                    {children}
                </Suspense>
            </div>
        );
    } else {
        return <Navigate to="/" replace state={{path: location.pathname}} />;
    }
};

export default PublicRoute;
