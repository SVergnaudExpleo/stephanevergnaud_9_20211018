// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
const toto = "Toto"
class Name extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div className='name-box'>
                <div className='hello-box'>
                    <div className='hello'>
                        Bonjour
                    </div>
                    <div className='name'>
                        {toto}
                    </div>
                </div>

                <div className='congratulation'>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
        )
    }
}

Name.propTypes = {
    datas: PropTypes.array,
    id: PropTypes.number,
}

export default Name
