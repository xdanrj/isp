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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Grafico(props) {
    const ano = dataisp
        .map((data) => data.ano)
        .filter((ano, index, array) => array.indexOf(ano) === index);

    const mes = dataisp
        .map((data) => data.mes)
        .filter((mes, index, array) => array.indexOf(mes) === index);


    const data = {
        labels: mes,
        datasets: [
            {
                label: 'Popularity of colours',
                data: dataisp.map((data) => data.latrocinio),
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(255, 255, 255, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    }
    return (
        <>
            <h1>grafico ai, {props.valorProp} meu</h1>
            <Bar data={data} options={options} />
        </>
    )
}
export default Grafico