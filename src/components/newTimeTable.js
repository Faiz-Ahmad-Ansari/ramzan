import React,{useEffect}  from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { data2024 as timeTableData } from './data';
import '../style/newTimetable.css';
// import InstallPrompt from './installPrompt';
import InstallButton from './installButton';
// import Allah from '../assets/AllahInArabic.jpeg';
// import Duas1 from '../assets/Duas1.jpeg';
// import Quran2 from '../assets/quran2.jpg';



// class Timetable extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             timeLeftForSehr : '',
//             timeLeftForIftar : ''
//          }
//     }

//     render() {     

const NewTimetable = () => {
    let history = useHistory();

    useEffect(() => window.scrollTo(0, 0),[])

    function handleClick(date) {
        history.push(`/todays/${date}`);
    }

    return (
        <div className='timetable-container-new'>
            <div className="title-container-new">
                <h3 className='m-0 newSurahHeader pl-3' ><InstallButton />
                </h3>
               <div></div> 
            </div>

            <div className='table-responsive '>
                <div className="timetable-body-og pb-5 small">
                    <div className='newTableHeaders' style={{color:'f5f5f5'}}>
                        <span style={{ width: "10%" }}>Roza</span>
                        <span >Date</span>
                        <span >Sehr</span>
                        <span >Iftaar</span>
                    </div>
                    {
                        timeTableData.map((e, i) => {
                            return (
                                // <tr key={i} className={`${e.date === '15 May 2019' ? 'bg-warning' : ''}${i%7 && e.date !== '15 May 2019' ? 'table-warning':'table-danger'}`}>
                                // <tr key={i} onClick={() => handleClick(e.date)} className={e.date === moment().format('DD MMM YYYY') ? 'bg-highlight font-weight-bold text-white' : ''}>
                                //     <td className='pr-0 pl-0'>{e.roza}</td>
                                //     <td className='pr-0 pl-0'>{e.date}</td>
                                //     <td className='pr-0 pl-0'>{e.sehr}</td>
                                //     <td className='pr-0 pl-0'>{e.iftaar}</td>
                                // </tr>
                                <div key={i} onClick={() => handleClick(e.date)} className={e.date ===  moment().format('DD MMM YYYY') ? 'newTableRow newHighlight' : 'newTableRow'}>
                                    <span className='pr-0 pl-0' style={{ width: "10%" }}>{e.roza}</span>
                                    <span className='pr-0 pl-0'>{e.date}</span>
                                    <span >
                                        <span className='sehrBlock'>{e.sehr}</span>
                                    </span>
                                    <span>
                                        <span className='iftarBlock'>{e.iftaar}</span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group-new p-0 pt-1  m-0'>
                    <div style={{ width: '30%' }} className=' mt-1 mb-2 text-center newBtn'>
                        <Link to='/dua' >
                            <div style={{ color: '#ffffffde' }}>
                                دعاء
                            </div>
                            <div className="btn newBtn1 ">
                                Dua's
                            </div>
                        </Link>
                    </div>                    
                    <div onClick={() => handleClick(moment().format('DD MMM YYYY'))} style={{ width: '20%' }} className=' mt-1 mb-2 text-center newBtn'>
                        {/* <Link to='/todays' > */}
                            <div style={{ color: '#ffffffde' }}>
                                آج
                            </div>
                            <div className="btn newBtn1 ">
                                Today's
                            </div>
                        {/* </Link> */}
                    </div>

                    <div style={{ width: '30%' }} className=' mt-1 mb-2 text-center newBtn'>
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
            </div>
            <div className='footer-new m-0 p-0'>
                <div className='mb-2' style={{ color: 'grey' }}>
                    <span className='small footerTitle'>Designed & Developed by -
                        <span className='ml-3' style={{fontSize:'12px'}}>
                            Faiz Ahmad Ansari 
                            <span className='ml-3' style={{fontSize:'15px'}}>
                                فیض احمد انصاری
                            </span>
                        </span>
                    </span>                    
                </div>
            </div>
        </div>
    );
}

export default NewTimetable;