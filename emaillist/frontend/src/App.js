import React from 'react';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
function App(props) {

    return (
        <div id={styles.root}>
            <div id={styles.App}>
                <RegisterForm/>  
                <Searchbar/>   
                <Emaillist/>    
            </div>
        </div>
    );
}

export default App;