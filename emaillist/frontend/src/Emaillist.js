import React from 'react';
import styles from './assets/css/Emaillist.css';
import emails from './assets/json/data.json';
import Email from './Email';
const Emaillist = ({emails, notifykeyWordChanged}) => {
    console.log(notifykeyWordChanged)
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map(email => <Email
                                        key={email.no}
                                        no={email.no}
                                        firstName={email.firstName}
                                        lastName={email.lastName}
                                        email={email.email}
                                        notifykeyWordChanged={notifykeyWordChanged}/>)

            }
            </ul>
    );
};

export default Emaillist;