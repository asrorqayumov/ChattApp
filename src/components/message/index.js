import React from 'react';

const Message = ({msg}) => {
    return (
        <div className='message_wrapper'>
            <p>
                {msg.media? <img src={msg.media} alt={msg.text} />:null}
                {msg.text}
                <br />
                <small></small>
            </p>
        </div>
    );
};

export default Message;