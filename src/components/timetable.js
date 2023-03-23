import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { data2023 as timeTableData } from './data';
import '../style/timetable.css';


// class Timetable extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             timeLeftForSehr : '',
//             timeLeftForIftar : ''
//          }
//     }

//     render() {     

const Timetable = () => {
    let history = useHistory();

    function handleClick(date) {
        history.push(`/todays/${date}`);
    }

    return (
        <div className='timetable-container'>
            <div className="title-container">
                <h3 className='text-center newTitle' >Ramzan 2023</h3>
            </div>

            <div className='table-responsive '>
                <div className="timetable-body pt-5 pb-5 small">
                    <table className='table  text-center table-bordered table-hover m-0'>
                        <thead className=''>
                            <tr className='tableHeader ' >
                                <th scope='col' style={{ width: '30px' }} className='text-center '>Roza</th>
                                <th scope='col' className='text-center '>Date</th>
                                <th scope='col' className='text-center '>Sehr </th>
                                <th scope='col' className='text-center '>Iftaar</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                timeTableData.map((e, i) => {
                                    return (
                                        // <tr key={i} className={`${e.date === '15 May 2019' ? 'bg-warning' : ''}${i%7 && e.date !== '15 May 2019' ? 'table-warning':'table-danger'}`}>
                                        <tr key={i} onClick={() => handleClick(e.date)} className={e.date === moment().format('DD MMM YYYY') ? 'bg-highlight font-weight-bold text-white' : ''}>
                                            <td className='pr-0 pl-0'>{e.roza}</td>
                                            <td className='pr-0 pl-0'>{e.date}</td>
                                            <td className='pr-0 pl-0'>{e.sehr}</td>
                                            <td className='pr-0 pl-0'>{e.iftaar}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                {/* <hr/> */}
                <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group p-0 pt-1 border-top-grey m-0'>
                <div className=' mt-1 mb-2 text-center quranBtn'>
                        <Link to='/dua' className="btn btn1 btn-quran2">
                            Dua's
                        </Link>
                    </div>
                    <div className=' mt-1 mb-2 text-center quranBtn'>
                        <Link to='/quran' className="btn btn1 btn-quran2">
                            Quran
                        </Link>
                    </div>
                   
                </div>
                {/* <div className='row btns-group p-0 pt-1 border-top-grey m-0'>
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
                             <Link to='/dua'  className="btn btn1 btn-quran2">
                                Dua's
                            </Link>
                        </div>
                    </div> */}

                {/* <div className="footer">
                        <div className='text-info text-center pt-1'><span className='small text-white-50'>Developed by</span> Faiz Ahmad Ansari, 7775995030</div>
                    </div> */}
                {/* <hr/> */}
            </div>
            <div className='footer row m-0 p-0'>
                <div className='col-12'><span className='small'>Developed by,</span> Faiz Ahmad Ansari - 7775995030 | faiz.js</div>
            </div>
        </div>
    );
}

export default Timetable;