import { useState } from "react"
import dataisp from "../data/data";
function Selecionador() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const keysSet = dataisp.reduce((set, obj) => {
        Object.keys(obj).forEach(key => set.add(key));
        return set;
      }, new Set());
      
      const keys = Array.from(keysSet);

    return (
        <>
        <select value={selectedOption} onChange={handleChange}>
            <option value="">Selecione uma opção</option>
            {keys.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
        
        </>
    )
}

export default Selecionador