import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import moment from 'moment';
import { data2023 as timeTableData } from './data'
import '../style/timetable.css'

function Todays() {
    // const [timeLeftForSehr, setTimeLeftForSehr] = useState('');
    // const [timeLeftForIftar, setTimeLeftForIftar] = useState('');

    // const timeForSehr = () => {
    //     let currentDateTime = moment().format('DD MMM YYYY hh:mm:ss a');
    //     let todaysObj = timeTableData.filter(e => e.date === moment().format('DD MMM YYYY'))
    //     if (todaysObj.length > 0) {
    //         let sehrTime = `${todaysObj[0].date}${' '}${todaysObj[0].sehr}`
    //         let todaysObjInMs = moment(currentDateTime).valueOf()
    //         let sehrTimeInMs = moment(sehrTime).valueOf()
    //         let differenceForSehr = sehrTimeInMs - todaysObjInMs
    //         let timeLeftForSehr;
    //         if (differenceForSehr > 0) {
    //             timeLeftForSehr = {
    //                 days: Math.floor(differenceForSehr / (1000 * 60 * 60 * 24)),
    //                 hours: Math.floor((differenceForSehr % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    //                 minutes: Math.floor((differenceForSehr % (1000 * 60 * 60) / (1000 * 60)) % 60),
    //                 seconds: Math.floor(differenceForSehr % (1000 * 60) / (1000))
    //             }

    //         } else {
    //             timeLeftForSehr = 'Done for today'
    //         }
    //         setTimeLeftForSehr(timeLeftForSehr)
    //     } else {
    //         return false
    //     }
    // }
    // const timeForIftar = () => {
    //     let currentDateTime = moment().format('DD MMM YYYY hh:mm:ss a');
    //     let todaysObj = timeTableData.filter(e => e.date === moment().format('DD MMM YYYY'))
    //     if (todaysObj.length > 0) {
    //         let iftarTime = `${todaysObj[0].date}${' '}${todaysObj[0].iftaar}`
    //         let todaysObjInMs = moment(currentDateTime).valueOf()
    //         let iftarTimeInMs = moment(iftarTime).valueOf()
    //         let differenceForIftar = iftarTimeInMs - todaysObjInMs

    //         let timeLeftForIftar;
    //         if (differenceForIftar > 0) {
    //             timeLeftForIftar = {
    //                 days: Math.floor(differenceForIftar / (1000 * 60 * 60 * 24)),
    //                 hours: Math.floor((differenceForIftar % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    //                 minutes: Math.floor((differenceForIftar % (1000 * 60 * 60) / (1000 * 60)) % 60),
    //                 seconds: Math.floor(differenceForIftar % (1000 * 60) / (1000))
    //             }
    //         } else {
    //             timeLeftForIftar = 'Done for today'
    //         }
    //         setTimeLeftForIftar(timeLeftForIftar)
    //     } else {
    //         return false
    //     }
    // }

    // setInterval(timeForSehr, 1000)
    // setInterval(timeForIftar, 1000)

    let { date } = useParams();

    return (
        <div className="todays-container">
            <div className="title-container">
                 <h3 className='text-center newTitle' >Day {timeTableData.filter(e => e.date === date).map((e) => e.roza)}</h3>
            </div>

            <div className="timetable-body pt-2 pb-5 ">
                {
                    timeTableData.filter(e => e.date === date).map((e, i) => {
                        return (
                            <div className="text-center">
                                <div className=" pt-5 pb-2 small">
                                    <table className='table text-center table-bordered m-0'>
                                        <thead className=''>
                                            <tr className='tableHeader ' >
                                                <th scope='col' className='text-center '>Roza</th>
                                                <th scope='col' className='text-center '>Date</th>
                                                <th scope='col' className='text-center '>Sehr </th>
                                                <th scope='col' className='text-center '>Iftaar</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr key={i} >
                                                <td className='pr-0 pl-0'>{e.roza}</td>
                                                <td className='pr-0 pl-0'>{e.date}</td>
                                                <td className='pr-0 pl-0'>{e.sehr}</td>
                                                <td className='pr-0 pl-0'>{e.iftaar}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                    <div className="col-6 text-left pl-3 small font-weight-bold">Time left for sehr -</div>
                                    <div className="col-6 text-left small">
                                        {
                                            timeLeftForSehr !== '' ?
                                                timeLeftForSehr === 'Done for today' ? 'Done for today' :
                                                    ` ${timeLeftForSehr.hours} Hrs, ${timeLeftForSehr.minutes} Min, ${timeLeftForSehr.seconds} Sec` : null
                                        }
                                    </div>
                                </div>
                                <div className="row border-bottom-grey m-0 p-0 pt-2 pb-2">
                                    <div className="col-6 text-left pl-3 small font-weight-bold">Time left for Iftar -</div>
                                    <div className="col-6 text-left small">
                                        {
                                            timeLeftForIftar !== '' ?
                                                timeLeftForIftar === 'Done for today' ? 'Done for today' :
                                                    ` ${timeLeftForIftar.hours} Hrs, ${timeLeftForIftar.minutes} Min, ${timeLeftForIftar.seconds} Sec`
                                                : null
                                        }
                                    </div>
                                </div> */}

                                <div className="border-bottom-grey">
                                    <div className="font-weight-bold small p-2"><u>Dua of the day {e.roza}</u></div>
                                    <div className="pr-2 pl-2 pb-2 small duaDay"><i>"{e.dua}"</i></div>
                                </div>
                                <div className="border-bottom-grey">
                                    <div className="font-weight-bold small p-2"><u>Translation</u></div>
                                    <div className="pr-2 pl-2 pb-2 small duaDay">{e.duaMeaning}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div style={{display:'flex',justifyContent:'space-around'}} className=' btns-group border-top-grey pt-1 p-0 m-0'>
                
                <div className=' mt-1 mb-2 text-center '>
                    <Link to='/' className="btn btn1 btn-quran2">
                        Timetable
                    </Link>
                </div>
                <div className=' mt-1 mb-2  text-center  '>
                    <Link to='/dua' className="btn btn1 btn-quran2">
                        Dua's
                    </Link>
                </div>
                <div className=' mt-1 mb-2 text-center '>
                    <Link to='/quran' className="btn btn1 btn-quran2">
                        Quran
                    </Link>
                </div>
            </div>
            <div className='footer row m-0 p-0'>
                <div className='col-12'><span className=''>Developed by,</span> Faiz Ahmad Ansari</div>
            </div>

        </div>
    );
}

export default Todays;