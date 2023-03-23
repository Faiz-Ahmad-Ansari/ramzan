import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import surah from './surah'
import surahEnglish from './surahEnglish'
import '../style/timetable.css'

class Quran extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = createRef()
        this.state = {
            clickedSurah: '',
            clickedSurahEnglish: '',
            englishTranslation: false,
            indexOpen: true
        }
    }
    surah = (e) => {
        // setTimeout(this.scrollon,5000)
        // window.scrollTo(0, 0)
        this.surahEng(e)
        this.setState({ clickedSurah: e, indexOpen: false })
    }

    surahEng = (e) => {
        let clickedSurahEnglish = surahEnglish.filter((f) => f.index === e.index)[0]
        this.setState({ clickedSurahEnglish: clickedSurahEnglish })
    }

    scrollon = () => {
        // window.scrollTo(0, 0)
        this.scrollRef.current.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }


    render() {
        return (
            <div className='container-fluid p-0 quranContainer'>
                <div className='title-container  '>
                    <h3 className='text-center newTitle' >Quran</h3>
                </div>
                <div className='BodyQuran pt-5 pb-5'>
                    {
                        this.state.indexOpen ?
                            <div className='table-responsive small'>
                                <table className='table  text-center table-bordered table-hover m-0'>
                                    <thead className=''>
                                        <tr className='tableHeader  ' >
                                            <th scope='col-2' style={{ width: '30px' }} className='text-center '>Sr.No.</th>
                                            <th scope='col-8' className='text-center '>Surah</th>
                                            <th scope='col-2' style={{ width: '30px' }} className='text-center '>Verse</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            surah.map((e, i) => {
                                                return (
                                                    <tr key={i} className='surahIndex' onClick={() => this.surah(e)}>
                                                        <td className=' '>{e.index}</td>
                                                        <td className=''>{e.name}</td>
                                                        <td className=''>{e.count}</td>
                                                    </tr>
                                                )
                                            })

                                        }
                                    </tbody>
                                </table>
                            </div>
                            : null
                    }

                    {
                        this.state.indexOpen === false ?
                            <div ref={this.scrollRef} className='surahContainer'>
                                <div style={{ display: 'flex', justifyContent: 'center' }} className='surahHeader border-bottom-grey small'>
                                    <div className=' small'>{this.state.clickedSurah.index} - {this.state.clickedSurah.name}</div>
                                    {/* <div className=' p-0 small'></div> */}

                                </div>
                                {this.state.englishTranslation ?
                                    <>
                                        {Object.entries(this.state.clickedSurahEnglish.verse).map(
                                            ([key, val], i) => {
                                                return (
                                                    <>
                                                        <div className='surahBodyEnglish row'>

                                                            <div className='col-1 pl-0 verseParent pl-1'>
                                                                <div className='verseNo small'>{i + 1}</div>
                                                            </div>
                                                            <div className='col-11 pr-0 small'>{val}</div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        )}
                                    </> :
                                    <>
                                        {Object.entries(this.state.clickedSurah.verse).map(
                                            ([key, val], i) => {
                                                return (
                                                    <>
                                                        <div className='surahBody row'>
                                                            <div className='col-1 pr-0 verseParent'>
                                                                <div className='verseNo'>{i + 1}</div>
                                                            </div>
                                                            <div className='col-11 pl-0 small'>{val}</div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        )}
                                    </>
                                }
                            </div>
                            : null
                    }
                </div>
                {this.state.indexOpen ?
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} className='btns-group border-top-grey p-0 m-0'>
                        <div className='mt-2 mb-2 text-center quranBtn'>
                            <Link to='/' className="btn btn1 btn-quran2" >
                                Timetable
                            </Link>
                        </div>
                        <div className='mt-2 mb-2 text-center quranBtn'>
                            <Link to='/dua' className="btn btn1 btn-quran2" >
                                Dua's
                            </Link>
                        </div>

                    </div>
                    :
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group border-top-grey p-0 m-0 '>
                        {/* <div className='col-4 mt-2 mb-2 p-0 text-center'>
                            <Link to='/' className="btn btn2 btn-quran2" >
                                Timetable
                            </Link>
                        </div> */}
                        <div className=' mt-2 mb-2 p-0 text-center quranBtn '>
                            <button type="button" onClick={() => this.setState({ indexOpen: true })} className="btn btn1 btn-quran2">
                                Quran Index
                            </button>
                        </div>
                        <div className=' mt-2 mb-2 p-0 text-center quranBtn'>
                            {this.state.englishTranslation ?
                                <button type="button" onClick={() => this.setState({ englishTranslation: false })} className="btn btn1 btn-quran2">
                                    In Arabic
                                </button> :
                                <button type="button" onClick={() => this.setState({ englishTranslation: true })} className="btn btn1 btn-quran2">
                                    Translation
                                </button>
                            }
                        </div>
                    </div>
                }
                <div className='footer row m-0 p-0'>
                <div className='col-12'><span className='small'>Developed by,</span> Faiz Ahmad Ansari - 7775995030 | faiz.js</div>
                </div>
            </div>
        );
    }
}

export default Quran;