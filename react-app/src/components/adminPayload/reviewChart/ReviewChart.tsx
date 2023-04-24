import {FC, useEffect, useState} from "react";
import {ReviewChartContainer} from "./ReviewChart.style";
import {CartesianGrid, Legend, Line, AreaChart, Tooltip, XAxis, YAxis, Area} from "recharts";
import {IAnalytics} from "../../../interfaces/AuthInterfaces";
import UserService from "../../../services/UserService";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const ReviewChart: FC = () => {

    const [analytics, setAnalytics] = useState<IAnalytics[]>([])
    const {takeUserAnalytics} = UserService()

    useEffect(() => {
        const months = ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июлб','Авг.','Сен.','Окт.','Ноя.','Дек.']
        takeUserAnalytics().then(data =>
            setAnalytics(data.data.map((item) => {
                return {
                    creation_date: new Date(item.creation_date).getUTCDate().toLocaleString('en-US').toString() + ` ${months[new Date(item.creation_date).getMonth()]}` + ` ${new Date(item.creation_date).getUTCFullYear()}`,
                    length: item.length,
                    id: item.id
                }
            }))

        )
    }, [])

    console.log(analytics)

    return (
        <ReviewChartContainer>
            <AreaChart width={1030} height={320} data={analytics}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey={'creation_date'} interval={"preserveStart"} minTickGap={0} style={{display: 'flex', justifyContent: "space-around"}} />
                <Tooltip content={CustomTooltip}/>
                <Area name={'Кол-во пользователей'} type="monotone" dataKey={'length'} fill={'url(#colorUv)'} fillOpacity={1} />
            </AreaChart>
        </ReviewChartContainer>
    )
}

export default ReviewChart;

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{background: 'white', border: '1px dotted black', color: 'black', textAlign: 'start', padding: '1rem'}}>
                <p style={{padding: '0 1rem 0 1rem'}}>{`Количество пользователей : ${payload[0].value}`}</p>
                <p style={{padding: '0 1rem 0 1rem'}}>{`Дата изменения: ${label}`}</p>
            </div>
        );
    }

    return null;
};
