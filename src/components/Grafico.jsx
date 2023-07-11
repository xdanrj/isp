import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import dataisp from '../data/data';
import { useEffect, useState } from 'react';
import "../styles/Grafico.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Grafico( {selectedOption} ) {
    let defaultChart
    defaultChart = {
        labels: [0],
        datasets: [
            {
                label: `Qtd. de ${selectedOption}`,
                data: dataisp.map((data) => data[selectedOption]),
                
                backgroundColor: [
                    'rgba(255, 255, 255, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
    const [chartData, setChartData] = useState(defaultChart);

    useEffect(() => {
    const ano = dataisp
        .map((data) => data.ano)
        .filter((ano, index, array) => array.indexOf(ano) === index);

    const mes = dataisp
        .map((data) => data.mes)
        .filter((mes, index, array) => array.indexOf(mes) === index);

    
    const data = {
        labels: ano,
        datasets: [
            {
                label: `Qtd. de ${selectedOption}`,
                data: dataisp.map((data) => data[selectedOption]),
                
                backgroundColor: [
                    'rgba(255, 255, 255, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
    setChartData(data);
}, [selectedOption])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true
               
            },
        },
    }
    return (
        <div className='grafico'>
            <h1>Gráfico de {selectedOption}</h1>
            <div className="chart-container">
            <Bar data={chartData} options={options} />
            </div>
        </div>
        
    )
}
export default Grafico