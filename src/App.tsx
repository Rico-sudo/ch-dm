import './App.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const ecg = [
  {
    name: '0 sec',
    ecgVal: 180,
  },
  {
    name: '5 sec',
    ecgVal: 150,
  },
  {
    name: '10 sec',
    ecgVal: 120,
  
  },
  {
    name: '15 sec',
    ecgVal: 70,

  },
  {
    name: '20 sec',
    ecgVal: 150,

  },
  {
    name: '25 sec',
    ecgVal: 60,
 
  },
  {
    name: '30 sec',
    ecgVal: 90,
    // pv: 4300,
    // amt: 2100,
  },
];


function App() {
  return (
    <>
    <h2>Electrocardiogram</h2>
    <ResponsiveContainer width="90%" aspect={3}>
    <LineChart
      width={500}
      height={300}
      data={ecg}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid vertical={false}  stroke="#243240"/>
      <XAxis dataKey="name" tick={{fill:"#fff"}}/>
      <YAxis tick={{fill:"#fff"}} />
      <Tooltip contentStyle={{backgroundColor:"#8884d8",color:"#fff"}} itemStyle={{color:"#fff"}} cursor={false} />
      {/* legend will be usef when we will have multiple sensors */}
      {/* <Legend />  */}
      {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
      <Line type="monotone" dataKey="ecgVal" stroke="#8884d8" strokeWidth="2" dot={{fill:"2e4355" ,stroke:"#8884d8" ,strokeWidth:2 ,r:5}} activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
  </>
  );
}

export default App;