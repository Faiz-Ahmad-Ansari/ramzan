import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import timeTableData from './data'
import '../style/timetable.css' 

function Todays() {
    
    const [timeLeftForSehr, setTimeLeftForSehr] = useState('');
    const [timeLeftForIftar, setTimeLeftForIftar] = useState('');

    const timeForSehr = () => {
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
            setTimeLeftForSehr(timeLeftForSehr)
            // this.setState({timeLeftForSehr:timeLeftForSehr})
        }else{
            return false
        }    
    } 
    const timeForIftar = () => {
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
            setTimeLeftForIftar(timeLeftForIftar)            
            // this.setState({timeLeftForIftar:timeLeftForIftar})
        }else {
            return false
        }    
    } 

    setInterval(timeForSehr,1000)
    setInterval(timeForIftar,1000)

    return ( 
        <div className="todays-container">
            <div className="title-container2">                
                    <div className='row m-0 title'  >
                        <div className='col-12  mt-2'>
                            <h4 className='text-center quran'  >Today's</h4>
                        </div>
                    </div>
                </div>

                <div className="todays-body p-0 m-0 ">
                {
                    timeTableData.filter(e=>e.date===moment().format('DD MMM YYYY')).map((e,i)=>{                       
                        return(                                            
                                <div className="text-center">
                                    <div className="row border-bottom-grey m-0 p-0 m-0 p-0 pt-2 pb-2">
                                        <div className="col-4 text-left pl-3 ">Roza No.</div>
                                        <div className="col-8 text-left">{e.roza}</div>
                                     </div>
                                     <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                        <div className="col-4 text-left pl-3 ">Date</div>
                                        <div className="col-8 text-left">{e.date}</div>
                                     </div>
                                     <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                        <div className="col-4 text-left pl-3 ">Sehr</div>
                                        <div className="col-8 text-left">{e.sehr}</div>
                                     </div>
                                     <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                        <div className="col-4 text-left pl-3 ">Iftaar</div>
                                        <div className="col-8 text-left">{e.iftaar}</div>
                                     </div>
                                     
                                     <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                        <div className="col-4 text-left pl-3 ">Time left for Sehr</div>
                                        <div className="col-8 text-left">
                                        {
                                            timeLeftForSehr !== '' ?
                                            timeLeftForSehr === 'Done for today' ? 'Done for today' : 
                                            ` ${timeLeftForSehr.hours} Hrs, ${timeLeftForSehr.minutes} Min, ${timeLeftForSehr.seconds} Sec` : null 
                                        }          
                                        </div>
                                     </div><div className="row border-bottom-grey m-0 p-0 pt-2 pb-2 ">
                                        <div className="col-4 text-left pl-3 ">Time left for Iftar</div>
                                        <div className="col-8 text-left ">
                                            {
                                                timeLeftForIftar !== '' ?
                                                timeLeftForIftar === 'Done for today' ? 'Done for today' : 
                                                ` ${timeLeftForIftar.hours} Hrs, ${timeLeftForIftar.minutes} Min, ${timeLeftForIftar.seconds} Sec`
                                                    : null 
                                            }         
                                        </div>
                                     </div>
                                        <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                            <div className="col-4 text-left pl-3 ">Dua</div>
                                            <div className="col-8 text-left"><i>"{e.dua}"</i></div>
                                        </div>
                                        <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                            <div className="col-4 text-left pl-3 ">Dua Meaning</div>
                                            <div className="col-8 text-left">{e.duaMeaning}</div>
                                        </div>
                                </div>
                                
                                )
                            })
                        }
                </div>

                <div className=""><div className='row p-0 m-0'>
                        <div className='col-4 mt-1 mb-2 text-center '>
                            <Link to='/'  className="btn btn1 btn-quran2">
                                Back
                            </Link>
                        </div>
                        <div className='col-4 mt-1 mb-2 text-center '>
                            <Link to='/quran'  className="btn btn1 btn-quran2">
                                QURAN
                            </Link>
                        </div>
                        <div className='col-4 mt-1 mb-2  text-center  '>
                            <button type="button"  className="btn btn1 btn-quran2" >
                                Dua's
                            </button>
                        </div>
                    </div>
                        {/* <div className='text-info text-center pt-1'><span className='small text-white-50'>Developed by</span> Faiz Ahmad Ansari, 7775995030</div> */}
                </div>
        </div>
     );
}

export default Todays;