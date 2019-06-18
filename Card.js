import React from 'react';

export default ({ image, children }) => (
    <div style={{
        width: "100%",
        maxWidth: "300px",
        height: "100%",
        margin: "0px auto",
        backgroundColor: "#ffffff",
        color: "black",
        fontSize: "14px",
    }}>
        <div style={{
            maxWidth: 400,
        }}>
            <img src={image} style={{
                height: 110,
                backgroundColor: "#444",
                width: "100%",
                objectFit: "cover"
            }}/>
        </div>
        <div style={{ marginTop: "1rem"   }}>
            {children }
        </div>
    </div>
);
