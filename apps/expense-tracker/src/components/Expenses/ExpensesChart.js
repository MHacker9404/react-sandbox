import Chart from '../Chart/Chart';
import { forEach as _forEach } from 'lodash';

const ExpensesChart = (props) => {
    const chartPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    _forEach(props.expenses, (expense) => {
        const month = expense.date.getMonth(); //  0 based
        chartPoints[month].value += expense.amount;
    });

    return <Chart points={chartPoints}></Chart>;
};

export default ExpensesChart;
