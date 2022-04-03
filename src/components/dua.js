import React from 'react';
import {Link} from 'react-router-dom';
import '../style/timetable.css' 

function Dua() {
    return ( 
        <div className="todays-container">
            <div className="title-container">                
                    <div className='row m-0 title'  >
                        <div className='col-12  mt-2'>
                            <h4 className='text-center quran'  >Dua's</h4>
                        </div>
                    </div>
                </div>

                <div className="timetable-body p-0 m-0 ">
                                                
                    <div className="text-center">
                        <div className='text-left font-weight-bold mt-2 pt-5 pl-3'>Dua For Sehr & Iftar</div>
                        <div className="row  m-0 p-0 m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold ">Sehr</div>
                                <div className="col-8 text-left font-weight-bold"><i> "Wa bisawmi ghadinn nawaiytu min shahri Ramadan"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">I intend to fast tomorrow in this month of Ramadan.</div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold">Iftar</div>
                                <div className="col-8 text-left font-weight-bold"><i> "Allahumma inni laka sumtu, wa bika aamantu, [wa ‘alayka tawakkaltu], wa Ala rizqika aftartu"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">Oh Allah! I fasted for You and I believe in You [and I put my trust in You] and I break my fast with Your sustenance.</div>
                            </div>

                        <div className='text-left font-weight-bold pt-2 pl-3 font-weight-bold'>Dua for Three Ashras</div>
                        <div className="row  m-0 p-0 m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold ">First Ashra</div>
                                <div className="col-8 text-left font-weight-bold"><i> "Rabbi ighfir warham wa anta khayrur raahimeen"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">O my Lord! Forgive me and have mercy and You are the best, most merciful.</div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold">Second Ashra</div>
                                <div className="col-8 text-left font-weight-bold"><i> "Astagfirullaha rab-bi min kulli zambiyon wa-atoobuilaiyh"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">I ask for forgiveness from Allah, my Lord, for every sin I have committed. </div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold">Third Ashra</div>
                                <div className="col-8 text-left font-weight-bold"><i> "Allahumma Ajirni minan naar"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">O Allah, save me from the hellfire. </div>
                            </div>                                                                 
                    </div>                                                                                         
                </div>

                <div className='row btns-group border-top-grey pt-1 p-0 m-0'>
                        <div className='col-4 mt-1 mb-2 text-center '>
                            <Link to='/'  className="btn btn1 btn-quran2">
                                Timetable
                            </Link>
                        </div>
                        <div className='col-4 mt-1 mb-2 text-center '>
                            <Link to='/quran'  className="btn btn1 btn-quran2">
                                QURAN
                            </Link>
                        </div>
                        <div className='col-4 mt-1 mb-2  text-center  '>
                             <Link to='/todays'  className="btn btn1 btn-quran2">
                                Today's
                            </Link>
                        </div>
                    </div>
                    <div className='footer row m-0 p-0'>
                        <div className='col-12'><span className=''>Developed by,</span> Faiz Ahmad Ansari, <span> <a  target="_blank" href="https://faizansari.tech/" rel="noopener noreferrer">https://faizansari.tech/</a> 7775995030  </span></div>
                    </div>
                      
        </div>
     );
}

export default Dua;