import React, { useState } from 'react';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import data from'./assets/json/data.json';
const App = () => {
    const [emails, setEmails] = useState(data);
    const notifykeyWordChanged = function(keyword) {
        // keyword가 firstName or lastName or email
        const newEmail = data.filter(e => e.firstName.indexOf(keyword)!==-1 || e.lastName.indexOf(keyword)!==-1 || e.email.indexOf(keyword)!==-1)
        console.log(keyword)
        console.log(newEmail)
        newEmail.length === 0 ? setEmails(data) : setEmails(newEmail);
    }
    return (
        <div id={styles.root}>
            <div id={styles.App}>
                <RegisterForm/>  
                <Searchbar callback={notifykeyWordChanged}/>   
                <Emaillist emails={emails}/>    
            </div>
        </div>
    );
}

export default App;