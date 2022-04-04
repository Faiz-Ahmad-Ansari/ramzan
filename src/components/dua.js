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

                <div className="timetable-body pt-2 pb-5 ">
                                                
                    <div className="text-center">
                        <div className='text-left font-weight-bold mt-2 pt-5 pl-3'>Dua For Sehr & Iftar</div>
                            <div className="row  m-0 p-0 m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold ">Sehr</div>
                                <div className="col-8 text-left font-weight-bold"><h4> وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ</h4></div>
                            </div>
                            <div className="row  m-0 p-0 m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3  "></div>
                                <div className="col-8 text-left "><i> "Wa bisawmi ghadinn nawaiytu min shahri Ramadan"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">I intend to fast tomorrow in this month of Ramadan.</div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold">Iftar</div>
                                <div className="col-8 text-left font-weight-bold"><h4>اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ </h4></div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 "></div>
                                <div className="col-8 text-left "><i> "Allahumma inni laka sumtu, wa bika aamantu, [wa ‘alayka tawakkaltu], wa Ala rizqika aftartu"</i></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">Oh Allah! I fasted for You and I believe in You [and I put my trust in You] and I break my fast with Your sustenance.</div>
                            </div>

                        <div className='text-left font-weight-bold pt-2 pl-3 font-weight-bold'>Dua for Three Ashras</div>
                        <div className="row  m-0 p-0 m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold ">First Ashra</div>
                                <div className="col-8 text-left font-weight-bold"><h4> يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ</h4></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">Oh Everliving, The Everlasting, I seek Your help through Your mercy.</div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold">Second Ashra</div>
                                <div className="col-8 text-left font-weight-bold"><h4> اَسْتَغْفِرُ اللہَ رَبِّی مِنْ کُلِّ زَنْبٍ وَّ اَتُوْبُ اِلَیْہِ</h4></div>
                            </div>
                            <div className="row border-bottom-grey m-0 p-0 pt-1 pb-2">
                                <div className="col-4 text-left pl-3 ">Translation</div>
                                <div className="col-8 text-left">I seek forgiveness from Allah for all my sins and turn to Him. </div>
                            </div>
                            <div className="row  m-0 p-0 pt-2 pb-1">
                                <div className="col-4 text-left pl-3 font-weight-bold">Third Ashra</div>
                                <div className="col-8 text-left font-weight-bold"><h4> اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ</h4></div>
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
                                Back
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
                        <div className='col-12'><span className=''>Developed by,</span> Faiz Ahmad Ansari</div>
                    </div>
                      
        </div>
     );
}

export default Dua;