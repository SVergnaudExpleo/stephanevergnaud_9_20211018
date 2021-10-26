// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import chart modules //
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
// import preject component //
import './styles.css'
import ActivityLegend from './Legend';
import ActivityTooltip from './Toltip';



// main component //
class ActivityChart extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <BarChart
                width={835}
                height={320}
                data={this.props.datas}
                barCategoryGap={5}
                margin={{ top: 0, right: 0, left: 0, bottom: 0}}
            >
                <CartesianGrid strokeDasharray="0 3 5" />
                <Legend content={<ActivityLegend />} verticalAlign="top" />
                <Tooltip content={<ActivityTooltip />} />
                
                
                <XAxis />
                <YAxis />
                
                
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} />
            </BarChart>

        )
    }
}

ActivityChart.propTypes = {
    datas: PropTypes.object.isRequired,
}

export default ActivityChart
