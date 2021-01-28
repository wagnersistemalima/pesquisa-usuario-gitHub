import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text}: Props) => {
    return (
        <button className="btn btn-primary btn-icon">
            <h5>
                {text}
            </h5>

        </button>
    );
}

export default Button;