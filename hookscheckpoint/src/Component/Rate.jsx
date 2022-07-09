import React from "react";

export default function Rating ({rate, onChange = () => {} }) {
    let stars = [];
    for (let i = 0; i < 7; i++) {
        if (i < rate) {
            stars.push (
                <span key={i} onClick= {() => onChange(i)}>
                    ★
                </span>
            );
        } else
            stars.push(
                <span key={i} onClick= {() => onChange(i + 1)}>
                    ☆
                </span>
            )
    }
    return <div>{stars}</div>
}