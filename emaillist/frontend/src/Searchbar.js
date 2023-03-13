import React, { useState } from 'react';
import styles from './assets/css/Searchbar.css';
const Searchbar = ({callback}) => {

    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='search' onChange={e => callback(e.target.value)}></input>
        </div>
    );
};

export default Searchbar;