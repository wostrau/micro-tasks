import React from 'react';

type subscribersPropsType = {
    subscriber: Array<subscriberPropsType>
}

type subscriberPropsType = {
    name: string
    age: number
}

function AddSubscriber(props: subscribersPropsType) {
    const addSubscriberHandler = (value: number) => {
        alert(props.subscriber[value].name)
    }

    return (
        <div>
            <button onClick={()=>{addSubscriberHandler(0)}}>Add Subscriber</button>
            <button onClick={()=>{addSubscriberHandler(1)}}>Add Subscriber</button>
        </div>
    )
}

export default AddSubscriber;