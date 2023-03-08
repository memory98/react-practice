import React from 'react';

function FoodListItem(props) {
    return (
        <li>{props.name} : {props.count}</li>
    );
}

export default FoodListItem;