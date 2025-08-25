import React, { useRef } from 'react';

function UncontrolledForm() {
    const nameInputRef = useRef();
    const emailInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;

        alert(`Submitted Name: ${name}, Email: ${email}`);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailInputRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;