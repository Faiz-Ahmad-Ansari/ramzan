import React, { Component, createRef } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import timeTableData from './data'
import '../style/timetable.css' 


class timetable extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.popUp = createRef()
        this.modal1 = createRef()
        this.state = { 
            openModal :false,
            timeLeftForSehr : '',
            timeLeftForIftar : ''
         }
    }
    
    // componentDidMount(){
    //current.click()
    //     this.timer=setTimeout(this.modalClose1,5000)
    // }

    // componentWillUnmount(){
    //     if(this.timer){
    //         clearTimeout(this.timer);
    //     }
    // }

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
            this.setState({timeLeftForIftar:timeLeftForIftar})
        }else {
            return false
        }    
    } 

    modalClose1 = () => {
        this.modal1.current.click()
    }


    render() { 
        setInterval(this.timeForSehr,1000)
        setInterval(this.timeForIftar,1000)
          
        return (
            <div className='timetable-container'>
                <div className="title-container">                
                    <div className='row m-0 title'  >
                        <div className='col-12  mt-2'>
                            <h4 className='text-center quran'  >Ramzan 2022</h4>
                        </div>
                    </div>
                {/* <!-- Button trigger modal --> */}
                    <div className='row p-0 m-0'>
                        <div className='col-4 mt-1 mb-2 text-center '>
                            <Link to='/todays'  className="btn btn1 btn-quran2">
                                Today's
                            </Link>
                        </div>
                        <div className='col-4 mt-1 mb-2 text-center '>
                            <Link to='/quran'  className="btn btn1 btn-quran2">
                                QURAN
                            </Link>
                        </div>
                        <div className='col-4 mt-1 mb-2  text-center  '>
                            <button type="button"  className="btn btn1 btn-quran2" data-toggle="modal" data-target="#exampleModalCenter2">
                                Dua's
                            </button>
                        </div>
                    </div>
                </div>

                <div className='table-responsive '>
                    <div className="timetable-body">                    
                        <table className='table  text-center table-bordered table-hover m-0'>
                            <thead className=''>
                                <tr className='tableHeader ' >
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
                                            <tr key={i} className={e.date === moment().format('DD MMM YYYY') ? 'bg-highlight font-weight-bold text-white' : ''}>
                                                <td className='pr-0 pl-0'>{e.roza}</td>
                                                <td className='pr-0 pl-0'>{e.date}</td>
                                                <td className='pr-0 pl-0'>{e.sehr }</td>
                                                <td className='pr-0 pl-0'>{e.iftaar}</td>
                                            </tr>
                                            )
                                        })
                                    }
                            
                            </tbody>
                        </table>
                    </div>
                    {/* <hr/> */}
                    <div className="footer">
                        <div className='text-info text-center pt-1'><span className='small text-white-50'>Developed by</span> Faiz Ahmad Ansari, 7775995030</div>
                    </div>
                    {/* <hr/> */}
                </div>

                    {/* <!-- Modal (Not needed Now 03/2022--> */}
                    {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal" role="document">
                            <div className="modal-content">
                                <div className="modal-header modalHeader">
                                        <h4 className="modal-title " id="exampleModalLongTitle">Today's</h4>
                                        <button type='button' ref={this.modal1} className="close closeCustom " onClick={this.modalClose1}   aria-label="Close" data-dismiss='modal'>
                                            <span aria-hidden="true">&times;</span>
                                        </button>          
                                        
                                </div>
                                <div className="modal-body modalBody">
                                {
                                                                        
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
                                       <div className='  small'>Developed by Faiz Ahmad Ansari, 7775995030</div>             
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* modal end */}
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal" role="document">
                {                        
                    timeTableData.filter(e=>e.date===moment().format('DD MMM YYYY')).map((e,i)=>{
                        return(
                            <div className="modal-content">
                                <div className="modal-header modalHeader">
                                  <h4 className="modal-title " id="exampleModalLongTitle">Dua for Roza no.{e.roza}</h4>
                                        <button type='button' className="close closeCustom " data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>          
                                </div>
                                <div className="modal-body modalBody">
                                
                                            <div key={i}>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        {e.dua}
                                                    </div>
                                                </div>
                                            </div>
                                        
                            </div>
                            <div className="modal-footer modalFooter justify-content-center">
                                       <div className='text-white  small'>Developed by Faiz Ahmad Ansari, 7775995030</div>             
                            </div>
                        </div>
                        )
                    })
                }

                    </div>
                </div>
                {/* modal end */}
            </div>
          );
    }
}
 
export default timetable;