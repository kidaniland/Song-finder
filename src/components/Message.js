import React from 'react';

const Message = ({msg, bgColor}) => {
    let styles = {
        padding:"1rem",
        marginBotton: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight:"bold",
        backgroundColor: bgColor
    }
    return (
        <div style={styles} className="message">
             <p>{msg}</p>
        </div>
    )
}

export default Message
