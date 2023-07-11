import { useState } from "react"
import dataisp from "../data/data";
function SelecionadorChaves({value, setSelectedOption}) {
    

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value)
    };

    const keysSet = dataisp.reduce((set, obj) => {
        Object.keys(obj).forEach(key => set.add(key));
        return set;
      }, new Set());
      
      const keys = Array.from(keysSet);
      

      const opcoes = ['latrocinio', 'hom_doloso', 'tentat_hom', 'roubo_em_coletivo', 'roubo_veiculo', 'roubo_comercio', 'roubo_residencia', 'encontro_cadaver', 'letalidade_violenta']

    return (
        <>
        <h3>Selecione o dado</h3>
        <select value={value} onChange={handleChange}>
            <option value="">Selecione uma opção</option>
            {opcoes.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
        
        </>
    )
}

export default SelecionadorChaves