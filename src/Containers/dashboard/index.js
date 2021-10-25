// import react modules //
import React from 'react'
// import preject component //
import './styles.css'
import Name from '../../Components/Name'
import userData from '../../ApiCall'
import KeyData from '../KeyData'

// main component //
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            firstNameState: "Toto",
            keyDataState: {},
            activityDataState: {},
        }        
    }

    componentDidMount(){
        userData.getUser().then((res) =>{
            this.setState({
                firstNameState: res.data.data.userInfos.firstName,
                keyDataState: res.data.data.keyData,
                
            })
        })
        userData.getActivity().then((res1) =>{
            this.setState({
                activityDataState: res1.data.data.sessions,
            })
        })
        
    }

    render() {
        return (
            <div className='dashboard-box'>
                <div className='name-container'>
                    <Name firstName={this.state.firstNameState}/>
                </div>
                <div className='barGraph-container'>
                    bar
                </div>
                <div className='stat-container'>
                    stat
                </div>
                <div className='calories-container'>
                    <KeyData keyDatas={this.state.keyDataState}/>
                </div>

            </div>
        )
    }
}

export default Dashboard