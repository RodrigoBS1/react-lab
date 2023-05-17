import { useState } from "react";

const Thermostat = () => {
    const [temperature, setTemperature] = useState(72)
    return (
        <div>
            <span>{temperature}</span>
            <button onClick={() => setTemperature(temperature +1)}>+</button>
            <button onClick={() => setTemperature(temperature -1)}>-</button>
        </div>
    );
}

export default Thermostat