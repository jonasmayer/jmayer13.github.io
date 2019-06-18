import React from 'react';
import { Embed } from '@mdx-deck/components';

export default ({ children }) => (
  <div
    style={{
        width: "90%",
        maxWidth: "960px",
        margin: "1rem auto",
        padding: "1rem",
        display: "grid",

        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto",
        gridGap: "2rem",
    }}>
    {children.map((child, index) => (
        <div key={index} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>{child}</div>
    ))}
  </div>
);
