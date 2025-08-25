import { useState } from 'react';

const ControlledComponent = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Відправлене значення:', value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                {}
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Надіслати</button>
        </form>
    );
};

export default ControlledComponent;