import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';

// const pdata = [
//     {
//         name: 'Python',
//         student: 13,
//         fees: 10
//     },
//     {
//         name: 'Java',
//         student: 10,
//         fees: 11
//     },
//     {
//         name: 'Php',
//         student: 20,
//         fees: 12
//     },
//     {
//         name: 'Java Script',
//         student: 80,
//         fees: 20
//     },
//     {
//         name: 'Web',
//         student: 100,
//         fees: 80
//     },
//     {
//         name: 'C++',
//         student: 40,
//         fees: 20
//     }

// ]

const ProductChart = (props) =>{

    const pdata = props.price_history;
   // console.log("####################", props.product_id, props.price_history);


    return(
        <div className="mt-5 mb-5">
            <h4 className="mb-3 text-danger">Latest Prices graph</h4>
            <div className="mt-4">
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} width={500} height={300} margin={{top:5, right: 30, left:20, bottom: 5}}>
                    <CartesianGrid/>
                        <XAxis dataKey="createdAt" interval={'preserveStartEnd'}/>
                    <YAxis/>
                    <Tooltip/>
                        <Legend/>
                    <Line dataKey="price" stroke='red' activeDot={{r: 8}}/>
                </LineChart>

            </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ProductChart;