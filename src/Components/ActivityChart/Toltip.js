// import react modules //
import React from 'react'
// import preject component //
import './styles.css'

// main component //
class ActivityTooltip extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div className="tooltip-box">
                COUCOU
                {/* {console.log(this.props.payload)} */}
            </div>
        )
    }
}

export default ActivityTooltip
