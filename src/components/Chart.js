import { Chart } from 'primereact/chart';
import React, { useContext, useEffect, useState } from 'react';
import { LayoutContext } from 'src/layout/context/layoutcontext.js';

const ChartComponent = () => {

    const [options, setOptions] = useState({});
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const pieData = {
            labels: ['Migrated', 'Not-migrated'],
            datasets: [
                {
                    data: [300, 700],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--red-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--red-400')]
                }
            ]
        };
        const pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        setOptions({
            pieOptions,
        });
        setChartData(pieData);
    }, []);

    return(
        <div className="col-12 xl:col-7">
            <div className="card flex flex-column align-items-center">
                <h5 className="text-left w-full">Migrated vs Non-Migrated Dashboards</h5>
                <Chart type="pie" data={chartData} options={options.pieOptions}></Chart>
            </div>
        </div>
    )
}

export default ChartComponent;