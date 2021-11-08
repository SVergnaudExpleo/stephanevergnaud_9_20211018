// import react modules //
import React from 'react';
// import preject component //
import './styles.css';
import Name from '../../Components/Name';
import userData from '../../ApiCall';
import KeyData from '../KeyData';
import ActivityChart from '../../Components/ActivityChart';
import StatData from '../StatData';

// main component //
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            firstNameState: "Toto",
            keyDataState: {
                calorieCount: 0,
                proteinCount: 0,
                carbohydrateCount: 0,
                lipidCount: 0,
            },
            scoreDataState: [],
            activityDataState: [],
            averageSessionDataState: [],
            perfDataState: {},
        };
    };

    componentDidMount(){
        userData.getUser().then((res) =>{
            let val = 0
            if (res.data.data.score !== undefined) {
                val = [{
                    name: "a",
                    score: res.data.data.score,
                }];
            } else if (res.data.data.todayScore !== undefined) {
                val = [{
                    name: "a",
                    score: res.data.data.todayScore,
                }];
            }
            this.setState({
                firstNameState: res.data.data.userInfos.firstName,
                keyDataState: res.data.data.keyData,
                scoreDataState: val,
            });
        });
        userData.getActivity().then((res1) =>{
            this.setState({
                activityDataState: res1.data.data.sessions,
            });
        });
        userData.getAverageSession().then((res2)=>{
            this.setState({
                averageSessionDataState: res2.data.data.sessions,
            });
        });
        userData.getPerfData().then((res3)=>{
            this.setState({
                perfDataState: res3.data.data,
            });
        });
    };

    render() {
        return (
            <div className='dashboard-box'>
                <div className='name-container'>
                    <Name firstName={this.state.firstNameState}/>
                </div>
                <div className='barGraph-container'>
                    <ActivityChart datas={this.state.activityDataState} />
                </div>
                <div className='stat-container'>
                    <StatData 
                        scoreDatas={this.state.scoreDataState} 
                        averageDatas={this.state.averageSessionDataState} 
                        perfDatas={this.state.perfDataState}
                    />
                </div>
                <div className='calories-container'>
                    <KeyData keyDatas={this.state.keyDataState}/>
                </div>
            </div>
        );
    };
};

export default Dashboard;