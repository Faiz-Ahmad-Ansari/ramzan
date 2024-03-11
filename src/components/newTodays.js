import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
// import moment from 'moment';
import { data2024 as timeTableData } from './data'
import '../style/newTimetable.css'
import moment from 'moment';


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
    let history = useHistory();


    const isRamzanDay = timeTableData.filter(e => e.date === date).length > 0

    function handleClick(date) {
        history.push(`/todays/${date}`);
    }

    const backgroundColors = ['bisque', 'indianred', 'darkseagreen', 'darkslateblue', 'ivory', 'lightcoral'];

    return (
        <div className="todays-container">
            {isRamzanDay ?
                <>
                    <div className="title-container">
                        <h3 className='text-center newSurahHeader' >Roza {timeTableData.filter(e => e.date === date).map((e) => e.roza)}</h3>
                    </div>
                    <div className="title-container-dua">
                        <h3 className='text-center newSurahHeader pl-4 pt-2' >Roza No. {timeTableData.filter(e => e.date === date).map((e) => e.roza)}</h3>
                        <h3 className='text-center newSurahHeader pr-4 pt-2' > روزا </h3>
                    </div>

                    <div style={{ height: '85vh' }} className="timetable-body-og pt-2 pb-5 ">
                        {
                            timeTableData.filter(e => e.date === date).map((e, i) => {
                                const bgColor = backgroundColors[e.roza % backgroundColors.length]; // Use modular arithmetic to cycle through colors
                                const color = e.roza % 2 === 0 ? '#242424' : '#fff';
                                return (
                                    <div className="text-center">
                                        <div className=" pt-1 pb-2 small">
                                            <div className='newTableHeaders'>
                                                <span style={{ width: "10%" }}>Roza</span>
                                                <span >Date</span>
                                                <span >Sehr</span>
                                                <span >Iftaar</span>
                                            </div>
                                            <div className={'newTableRow'}>
                                                <span className='pr-0 pl-0' style={{ width: "10%" }}>{e.roza}</span>
                                                <span className='pr-0 pl-0'>{e.date}</span>
                                                <span >
                                                    <span className='sehrBlock'>{e.sehr}</span>
                                                </span>
                                                <span>
                                                    <span className='iftarBlock'>{e.iftaar}</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="duaCard" style={{ background: bgColor, color: color }}>
                                            <div className="font-weight-bold text-left small">Dua of the day {e.roza}</div>
                                            <div className="small pt-1 mt-1"><i> "{e.dua}"</i></div>
                                            <div className="small pt-3">{e.duaMeaning}</div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </>
                :
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh', color: '#fff' }}>
                    <div>It's not a ramzan day today</div>
                </div>
            }



            <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group-new  pt-1 p-0 m-0'>
                <div className=' mt-1 mb-2 text-center newBtn'>
                    <Link to='/' >
                        <div style={{ color: '#ffffffde' }}>
                            ٹائم ٹیبل
                        </div>
                        <div style={{ padding: '2px 10px', fontSize: '0.9rem !important', borderRadius: '50px !important', color: '#ffffffde' }} className="btn ">
                            TimeTable
                        </div>
                    </Link>
                </div>

                <div onClick={() => handleClick(moment().format('DD MMM YYYY'))} style={{ width: '20%' }} className=' mt-1 mb-2 text-center newBtn'>
                    {/* <Link to='/dua' > */}
                    <div style={{ color: '#ffffffde' }}>
                        آج
                    </div>
                    <div className="btn newBtn1 ">
                        Today's
                    </div>
                    {/* </Link> */}
                </div>

                <div className=' mt-1 mb-2 text-center newBtn'>
                    <Link to='/quran' >
                        <div style={{ color: '#ffffffde' }}>
                            قرآن
                        </div>
                        <div className="btn newBtn1 ">
                            Quran
                        </div>
                    </Link>
                </div>
            </div>
            <div className='footer-new m-0 p-0'>
                <div className='mb-2' style={{ color: 'grey' }}>
                    <span className='small footerTitle'>Designed & Developed by -
                        <span className='ml-3' style={{ fontSize: '12px' }}>
                            Faiz Ahmad Ansari
                            <span className='ml-3' style={{ fontSize: '15px' }}>
                                فیض احمد انصاری
                            </span>
                        </span>
                    </span>
                </div>
            </div>

        </div >
    );
}

export default Todays;