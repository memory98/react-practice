import React, { useEffect, useState } from 'react';
import styles from './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
const App = () => {
    const [emails, setEmails] = useState([]);

    const notifykeyWordChanged = async(keyword) => {
        try{
            const response = await fetch('/api/list', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !=='success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            // console.log(json.data);
            // keyword가 firstName or lastName or email
            const newEmail = json.data.filter(e => e.firstName.indexOf(keyword)!==-1 || e.lastName.indexOf(keyword)!==-1 || e.email.indexOf(keyword)!==-1)
            newEmail.length === 0 ? setEmails(data) : setEmails(newEmail);
        } catch(err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        notifykeyWordChanged('');
    },[])
    return (
        <div id={styles.root}>
            <div id={styles.App}>
                <RegisterForm/>  
                <Searchbar callback={notifykeyWordChanged}/>   
                <Emaillist emails={emails} notifykeyWordChanged={notifykeyWordChanged}/>    
            </div>
        </div>
    );
}

export default App;