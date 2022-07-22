import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';


const PieCharts = () => {

    // Sample data
    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];


    return (
        <PieChart width={700} height={700}>
            <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
        </PieChart>

    );
}

export default PieCharts;