import React from 'react';
import './styles.css';
import Name from '../../Components/Name';
import userData from '../../ApiCall';
import KeyData from '../KeyData';
import ActivityChart from '../../Components/ActivityChart';
import StatData from '../StatData';

/**
 * This React component call all the charts and dispatch datas to components from API call
 * 
 * @component
 * @class
 * @author Stéphane
 * @version 1
 */

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

    /**
     * On component mount user datas are update using API class
     */
    componentDidMount(){
        userData.getUser().then((response) =>{
            let scoreValue = 0
            if (response.data.data.score !== undefined) {
                scoreValue = [{
                    name: "a",
                    score: response.data.data.score,
                }];
            } else if (response.data.data.todayScore !== undefined) {
                scoreValue = [{
                    name: "a",
                    score: response.data.data.todayScore,
                }];
            }
            this.setState({
                firstNameState: response.data.data.userInfos.firstName,
                keyDataState: response.data.data.keyData,
                scoreDataState: scoreValue,
            });
        });

        userData.getActivity().then((response1) =>{
            this.setState({
                activityDataState: response1.data.data.sessions,
            });
        });

        userData.getAverageSession().then((response2)=>{
            this.setState({
                averageSessionDataState: response2.data.data.sessions,
            });
        });
        
        userData.getPerfData().then((response3)=>{
            this.setState({
                perfDataState: response3.data.data,
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