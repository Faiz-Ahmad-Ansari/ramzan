import React from 'react';
import { Link } from 'react-router-dom';
import '../style/timetable.css'

function Dua() {
    return (
        <div className="todays-container">
            <div className="title-container">
            <h3 className='text-center newTitle' >Dua's</h3>
            </div>

            <div className="timetable-body pt-2 pb-5 ">

                <div className="text-center">
                    <div className="border-bottom-grey mt-1 pt-5 m-0 p-0  pb-1">
                        <div className="pl-3 font-weight-bold pb-2 small"><u>Sehr</u></div>
                        <div className="font-weight-bold"><h4> وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ</h4></div>
                        <div className="pl-1 pr-1 small pb-2"><i> "Wa bisawmi ghadinn nawaiytu min shahri Ramadan"</i></div>
                        <div className="pl-2 pr-2 small pb-2">I intend to fast tomorrow in this month of Ramadan.</div>
                    </div>
                    <div className="border-bottom-grey   m-0 p-0 pt-2 pb-1">
                        <div className="pl-3 font-weight-bold pb-2 small"><u>Iftar</u></div>
                        <div className=" font-weight-bold"><h4>اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَيْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ </h4></div>
                        <div className="pl-2 pr-2 small pb-2"><i> "Allahumma inni laka sumtu, wa bika aamantu, [wa ‘alayka tawakkaltu], wa Ala rizqika aftartu"</i></div>
                        <div className="pl-2 pr-2 small pb-2">Oh Allah! I fasted for You and I believe in You [and I put my trust in You] and I break my fast with Your sustenance.</div>
                    </div>

                    <div className="border-bottom-grey  m-0 p-0 pt-2 pb-1">
                        <div className=" pl-3 font-weight-bold pb-2 small"><u>First Ashra</u></div>
                        <div className="font-weight-bold pb-2"><h4> يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ</h4></div>
                        <div className="pl-2 pr-2 small pb-2">Oh Everliving, The Everlasting, I seek Your help through Your mercy.</div>
                    </div>

                    <div className="border-bottom-grey  m-0 p-0 pt-2 pb-1">
                        <div className=" pl-3 font-weight-bold pb-2 small"><u>Second Ashra</u></div>
                        <div className="font-weight-bold pb-2"><h4> اَسْتَغْفِرُ اللہَ رَبِّی مِنْ کُلِّ زَنْبٍ وَّ اَتُوْبُ اِلَیْہِ</h4></div>
                        <div className="pl-2 pr-2 small pb-2">I seek forgiveness from Allah for all my sins and turn to Him.</div>
                    </div>

                    <div className="border-bottom-grey  m-0 p-0 pt-2 pb-1">
                        <div className=" pl-3 font-weight-bold pb-1 small"><u>Third Ashra</u></div>
                        <div className="font-weight-bold pb-2"><h4> اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ</h4></div>
                        <div className="pl-2 pr-2 small pb-2">O Allah, save me from the hellfire.</div>
                    </div>
      
                    {/* <div className="row  m-0 p-0 pt-2 pb-1">
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
                    </div> */}
                </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-around'}} className=' btns-group border-top-grey pt-1 p-0 m-0'>
                
                <div className=' mt-1 mb-2 text-center quranBtn'>
                    <Link to='/' className="btn btn1 btn-quran2">
                        Timetable
                    </Link>
                </div>
                <div className=' mt-1 mb-2 text-center quranBtn'>
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

export default Dua;