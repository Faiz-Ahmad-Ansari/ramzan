import React, { Component, createRef } from 'react';
import moment from 'moment';
import bgImage from '../assets/bgIslam.jpg'
import timeTableData from './data'
import '../style/timetable.css' 

class timetable extends Component {
    constructor(props) {
        super(props);
        this.popUp = createRef()
        this.state = { 
            openModal :false,
            timeLeftForSehr : '',
            timeLeftForIftar : ''
         }
    }
    
    componentDidMount(){
        this.popUp.current.click()
    }

    timeForSehr = () => {
        let currentDateTime = moment().format('DD MMM YYYY hh:mm:ss a');
        let todaysObj       = timeTableData.filter(e=>e.date === moment().format('DD MMM YYYY'))
   if(todaysObj.length>0){
        let sehrTime        = `${todaysObj[0].date}${' '}${todaysObj[0].sehr}`
        let todaysObjInMs   = moment(currentDateTime).valueOf()
        let sehrTimeInMs    = moment(sehrTime).valueOf()
        let differenceForSehr = sehrTimeInMs - todaysObjInMs
        
        // console.log(differenceForSehr)
        let timeLeftForSehr;
            if (differenceForSehr > 0) {
                timeLeftForSehr = {
                    days: Math.floor(differenceForSehr / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((differenceForSehr % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
                    minutes: Math.floor((differenceForSehr % (1000 * 60 * 60) / (1000 * 60)) % 60),
                    seconds: Math.floor(differenceForSehr % (1000 * 60) /(1000) )
                }
                
            } else { 
                timeLeftForSehr = 'Done for today'
            }

            this.setState({timeLeftForSehr:timeLeftForSehr})
        }else{
            return false
        }    
    } 
    timeForIftar = () => {
        let currentDateTime = moment().format('DD MMM YYYY hh:mm:ss a');
        let todaysObj       = timeTableData.filter(e=>e.date === moment().format('DD MMM YYYY'))
        if(todaysObj.length>0){
        let iftarTime        = `${todaysObj[0].date}${' '}${todaysObj[0].iftaar}`
        let todaysObjInMs   = moment(currentDateTime).valueOf()
        let iftarTimeInMs    = moment(iftarTime).valueOf()
        let differenceForIftar = iftarTimeInMs - todaysObjInMs
        
        // console.log(differenceForSehr)
        let timeLeftForIftar;
            if (differenceForIftar > 0) {
                timeLeftForIftar = {
                    days: Math.floor(differenceForIftar / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((differenceForIftar % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
                    minutes: Math.floor((differenceForIftar % (1000 * 60 * 60) / (1000 * 60)) % 60),
                    seconds: Math.floor(differenceForIftar % (1000 * 60) /(1000) )
                }
                
            } else { 
                timeLeftForIftar = 'Done for today'
                
            }
            // console.log(timeLeftForIftar)

            this.setState({timeLeftForIftar:timeLeftForIftar})
        }else {
            return false
        }    
    } 


    render() { 
      
// console.log(timeTableData.filter(e=>e.date === moment().format('DD MMM YYYY')).length>0)
        setInterval(this.timeForSehr,1000)
        setInterval(this.timeForIftar,1000)
          
        let style={  
            // backgroundImage: url(kotergate),
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.8)), url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }
        return (
            <div style={style}>
                <div className='row m-0 title' >
                     <div className='col-12  mt-2'>
                         <h4 className='text-center '>Ramzan Time Table 2020</h4>
                    </div>
                {/* <!-- Button trigger modal --> */}
                    <div className='col-1 mt-2 d-none '>
                        <button type="button" ref={this.popUp} className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            Today
                        </button>
                    </div>
                </div>


                <div className='table-responsive '>
                    <table className='table text-center table-bordered table-hover m-0'>
                        <thead className=''>
                            <tr className='tableHeader text-white ' >
                                <th scope='col' className='text-center '>Roza</th>
                                <th scope='col' className='text-center '>Date</th>
                                <th scope='col' className='text-center '>Sehr </th>
                                <th scope='col' className='text-center '>Iftaar</th>
                            </tr>
                        </thead>
                        <tbody >
                        {
                            timeTableData.map((e,i)=>{
                                                            
                                 return(            
                                        // <tr key={i} className={`${e.date === '15 May 2019' ? 'bg-warning' : ''}${i%7 && e.date !== '15 May 2019' ? 'table-warning':'table-danger'}`}>
                                        <tr key={i} className={e.date === moment().format('DD MMM YYYY') ? 'highlight font-weight-bold' : 'text-white'}>
                                            <td>{e.roza}</td>
                                            <td>{e.date}</td>
                                            <td>{e.sehr }</td>
                                            <td>{e.iftaar}</td>
                                        </tr>
                                        )
                                    })
                                }
                           
                        </tbody>
                    </table>
                    {/* <hr/> */}
                        <div className='text-info text-center pt-1'><span className='small text-white-50'>Developed by</span> Faiz Ahmad Ansari, 7775995030</div>
                    {/* <hr/> */}
                </div>


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal" role="document">
                            <div className="modal-content">
                                <div className="modal-header modalHeader">
                                        <h4 className="modal-title " id="exampleModalLongTitle">Today's</h4>
                                        <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>          
                                </div>
                                <div className="modal-body modalBody">
                                {
                                    // console.log(timeTableData.filter(e=>e.date==='15 May 2019'))                                    
                                    timeTableData.filter(e=>e.date===moment().format('DD MMM YYYY')).map((e,i)=>{
                                        return(
                                            <div key={i}>
                                                <div className='row'>
                                                    <div className='col-4'>Roza No.</div> 
                                                    <div className='col-2'>:</div> 
                                                    <div className='col-6'><b>{e.roza}</b></div>
                                                </div><hr/>
                                                <div className='row'>   
                                                    <div className='col-4'>Date</div>
                                                    <div className='col-2'>:</div>  
                                                    <div className='col-6'><b>{e.date}</b></div>
                                                </div><hr/>
                                                <div className='row'>
                                                    <div className='col-4'>Sehr Time</div>
                                                    <div className='col-2'>:</div> 
                                                    <div className='col-6'><b>{e.sehr}</b></div>
                                                </div><hr/>
                                                <div className='row'>
                                                    <div className='col-4'>Iftar Time</div>
                                                    <div className='col-2'>:</div> 
                                                    <div className='col-6'><b>{e.iftaar}</b>    </div>
                                                </div><hr/>
                                                <div className='row'>
                                                    <div className='col-4'>Time for Sehr</div>
                                                    <div className='col-2'>:</div> 
                                                    <div className='col-6'><b>
                                                    {
                                                            this.state.timeLeftForSehr !== '' ?
                                                            this.state.timeLeftForSehr === 'Done for today' ? 'Done for today' : 
                                                            ` ${this.state.timeLeftForSehr.hours} Hrs, ${this.state.timeLeftForSehr.minutes} Min, ${this.state.timeLeftForSehr.seconds} Sec` : null 
                                                        }                        
                                                        </b></div>
                                                </div><hr/>
                                                <div className='row'>
                                                    <div className='col-4'>Time for Iftar</div>
                                                    <div className='col-2'>:</div> 
                                                    <div className='col-6'><b>
                                                        {/* {console.log(this.state.timeLeftForIftar ==='Done for today')} */}
                                                    {
                                                            this.state.timeLeftForIftar !== '' ?
                                                            this.state.timeLeftForIftar === 'Done for today' ? 'Done for today' : 
                                                            ` ${this.state.timeLeftForIftar.hours} Hrs, ${this.state.timeLeftForIftar.minutes} Min, ${this.state.timeLeftForIftar.seconds} Sec`
                                                             : null 
                                                        }                        
                                                        </b></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="modal-footer modalFooter justify-content-center">
                                       <div className='text-white  small'>Developed by Faiz Ahmad Ansari, 7775995030</div>             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default timetable;