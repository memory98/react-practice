import React from 'react';

const Email = ({no,firstName, lastName, email}) => {

    const deleteEmail = async() => {
        try{
            const response = await fetch(`/api/delete/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(no)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !=='success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            location.reload();
        } catch(err) {
            console.log(err.message);
        }
    }
    return (
        <li>
            <p no={no} onClick={deleteEmail}>X</p>
            {firstName}{lastName}
            <br/>
            {email}

        </li>
    );
};

export default Email;