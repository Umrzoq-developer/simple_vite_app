import './App.css';

import {withHocs} from './providers';
import Routings from '../views';
import styles from './index.module.scss';

const App = () => {
    return (
        <div className={styles.container}>
            <Routings />
        </div>
    );
};

export default withHocs(App);
