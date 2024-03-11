import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../style/newTimetable.css'
import moment from 'moment';


function Dua() {
    let history = useHistory();

    useEffect(() => window.scrollTo(0, 0),[])


    function handleClick(date) {
        history.push(`/todays/${date}`);
    }

    return (
        <div className="todays-container">
            <div className="title-container-dua">
                <h3 className='text-center newSurahHeader pl-4 pt-2' >Dua's</h3>
                <h3 className='text-center newSurahHeader pr-4 pt-2' >دعاء</h3>
            </div>

            <div className="timetable-body-og pt-2 pb-5 ">
                <div className="text-center pt-1 pb-5">
                    <div className="duaCard" style={{ background: 'wheat' }}>
                        <div className="font-weight-bold text-left small">Sehr</div>
                        <div className="font-weight-bold mt-1 mb-3 duaText"><h3> وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ</h3></div>
                        <div className="small pt-1"><i> "Wa bisawmi ghadinn nawaiytu min shahri Ramadan"</i></div>
                        <div className="small pt-3">I intend to fast tomorrow in this month of Ramadan.</div>
                    </div>
                    <div className="duaCard" style={{ background: 'cadetblue', color: '#ffffffe3' }}>
                        <div className="font-weight-bold text-left small">Iftar</div>
                        <div className="font-weight-bold mt-3 mb-3 duaText"><h3>اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ </h3></div>
                        <div className="small pt-1"><i> "Allahumma inni laka sumtu, wa bika aamantu, [wa ‘alayka tawakkaltu], wa Ala rizqika aftartu"</i></div>
                        <div className="small pt-3">Oh Allah! I fasted for You and I believe in You [and I put my trust in You] and I break my fast with Your sustenance.</div>
                    </div>

                    <div className="duaCard" style={{ background: 'linen' }}>
                        <div className=" font-weight-bold text-left small">First Ashra</div>
                        <div className="font-weight-bold mt-3 mb-3 duaText"><h3> يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ</h3></div>
                        <div className="small pt-1">Oh Everliving, The Everlasting, I seek Your help through Your mercy.</div>
                    </div>

                    <div className="duaCard" style={{ background: 'indianred', color: '#ffffffe3' }}>
                        <div className=" font-weight-bold text-left small">Second Ashra</div>
                        <div className="font-weight-bold mt-3 mb-3 duaText"><h3> اَسْتَغْفِرُ اللہَ رَبِّی مِنْ کُلِّ زَنْبٍ وَّ اَتُوْبُ اِلَیْہِ</h3></div>
                        <div className="small pt-1">I seek forgiveness from Allah for all my sins and turn to Him.</div>
                    </div>

                    <div className="duaCard" style={{ background: 'wheat' }}>
                        <div className=" font-weight-bold text-left small">Third Ashra</div>
                        <div className="font-weight-bold mt-3 mb-3 duaText"><h3> اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ</h3></div>
                        <div className="small pt-1">O Allah, save me from the hellfire.</div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group-new  pt-1 p-0 m-0'>
                <div style={{width:'30%'}} className=' mt-1 mb-2 text-center newBtn'>
                    <Link to='/' >
                        <div style={{ color: '#ffffffde' }}>
                        ٹائم ٹیبل
                        </div>
                        <div style={{ padding: '2px 10px',fontSize: '0.9rem !important', borderRadius: '50px !important', color: '#ffffffde' }} className="btn ">
                            TimeTable
                        </div>
                    </Link>
                </div>

                <div onClick={() => handleClick(moment().format('DD MMM YYYY'))} style={{width:'20%'}} className=' mt-1 mb-2 text-center newBtn'>
                        {/* <Link to='/dua' > */}
                            <div style={{ color: '#ffffffde' }}>
                            آج
                            </div>
                            <div className="btn newBtn1 ">
                                Today's
                            </div>
                        {/* </Link> */}
                    </div>

                <div style={{width:'30%'}} className=' mt-1 mb-2 text-center newBtn'>
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

export default Dua;