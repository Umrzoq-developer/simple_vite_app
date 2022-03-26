import Routings from '../views';
import './App.css';
import styles from './index.module.scss';

const App = () => {
    return (
        <div className={styles.container}>
            <Routings name="umrzoq" />
            <div className="w-full flex flex-col justify-center items-center h-screen bg-black">
                <h1 className="text-blue-900">HELLO, I'M A REACT DEVELOPER!</h1>
                <p className="text-white">- Toshkentov Umrzoq</p>
            </div>
        </div>
    );
};

export default App;
