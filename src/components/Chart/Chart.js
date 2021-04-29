import ChartBar from './ChartBar';
import './Chart.css'
const Chart =(props)=>{
    const monthlyValues = props.dataPoints.map((dataPoint)=>dataPoint.value);
    const maxMonthlyValue= Math.max(...monthlyValues); 
    return <div className="chart">
        {props.dataPoints.map((dataPoint)=>(
        <ChartBar 
        key={dataPoint.label}
        label={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxMonthlyValue}/>
        ))}
    </div>
}
export default Chart;