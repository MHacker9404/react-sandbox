import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const max = Math.max(...props.points.map(p => p.value));

    return (
        <div className="chart">
            {props.points.map((point) => (
                <ChartBar
                    key={point.label}
                    value={point.value}
                    maxValue={max}
                    label={point.label}
                />
            ))}
        </div>
    );
};

export default Chart;
