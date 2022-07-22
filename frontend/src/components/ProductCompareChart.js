import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// const data1 = [
//     { name: 10, pv: 2400, amt: 2400 },
//     { name: 20, pv: 1398, amt: 2210 },
//     { name: 30, pv: 9800, amt: 2290 },
//     { name: 40, pv: 3908, amt: 2000 },
//     { name: 50, pv: 4800, amt: 2181 },
//     { name: 60, pv: 3800, amt: 2500 },
//     { name: 70, pv: 4300, amt: 2100 },
// ];

// const data2 = [
//     { name: 10, uv: 4000, amt: 2400 },
//     { name: 45, uv: 3490, amt: 2100 },
// ];

const ProductCompareChart = (props) => {
    const data1 = props.price_history1;
    console.log("############", props.price_history1)
    const data2 = props.price_history2;
    let transformed_data2;
    let transformed_data1;
    if (data2) {
        transformed_data1 = data1.map(({ id, price, createdAt, product }) => ({ id: id, laptop_1: price, createdAt: createdAt, product: product }));
    }
    if(data2){
    transformed_data2 = data2.map(({ id, price, createdAt, product }) => ({ id: id, laptop_2: price, createdAt: createdAt, product: product }));
    }
    return (
        <div className="mt-5 mb-5">
            <h4 className="mb-3">Lates Price graph </h4>
            <LineChart width={600} height={300}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis  dataKey="createdAt" domain={['auto', 'auto']} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" data={transformed_data1} dataKey="laptop_1" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" data={transformed_data2} dataKey="laptop_2" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default ProductCompareChart;