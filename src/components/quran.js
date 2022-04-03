import React, { Component, createRef } from 'react';
import {Link} from 'react-router-dom';
import surah from './surah'
import surahEnglish from './surahEnglish'
import '../style/timetable.css'

class Quran extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = createRef()
        this.state = { 
            clickedSurah : '',
            clickedSurahEnglish : '',
            englishTranslation:false,
            indexOpen : true
         }
    }
    surah = (e) => {
        console.log(e)
        // setTimeout(this.scrollon,5000)
        // window.scrollTo(0, 0)
        this.surahEng(e)
        this.setState({clickedSurah:e,indexOpen:false})
    }

    surahEng = (e) => {
        console.log(e.index)
        console.log(surahEnglish.filter((f)=>f.index===e.index)[0])
        let clickedSurahEnglish = surahEnglish.filter((f)=>f.index===e.index)[0]
        this.setState({clickedSurahEnglish:clickedSurahEnglish})
    }

    scrollon = () => {
        // window.scrollTo(0, 0)
        this.scrollRef.current.scroll({
            top: 0,
            behavior: 'smooth'
        });
        console.log('hit')
        console.log(this.scrollRef.current)
    }
    

    render() { 
        return (
            <div className='container-fluid p-0 quranContainer'>
                <div className='titleQuran  p-0 pt-2 m-0'>
                    <div className='row p-0 m-0 '>
                        <h1 className='text-center  col-12 p-0 m-0 quran'>Quran</h1>
                    </div>
                 {/* {this.state.indexOpen ?
                    <div className='row  p-0 m-0 justify-content-center'>
                        <div className='col-6 mt-2 mb-2 text-center quranBtn'>
                            <Link to='/'  className="btn btn1 btn-quran2" >
                                Timetable
                            </Link>
                        </div>
                     </div>
                        :
                        <div className='row  p-0 m-0 justify-content-center'>
                        <div className='col-4 mt-2 mb-2 p-0 text-center'>
                            <Link to='/'  className="btn btn2 btn-quran2" >
                                Timetable
                            </Link>
                        </div>
                        <div className='col-4 mt-2 mb-2 p-0 text-center '>
                            <button type="button" onClick={()=>this.setState({indexOpen:true})} className="btn btn2 btn-quran2">
                                Quran Index
                            </button>
                        </div>
                        <div className='col-4 mt-2 mb-2 p-0 text-center '>
                        {this.state.englishTranslation?
                            <button type="button" onClick={()=>this.setState({englishTranslation:false})} className="btn btn2 btn-quran2">
                                In Arabic
                            </button>:
                            <button type="button" onClick={()=>this.setState({englishTranslation:true})} className="btn btn2 btn-quran2">
                                In English
                            </button>
                            }
                        </div>
                     </div>
                    } */}
                       
                   
                </div>
                <div className='BodyQuran '>
            {
            this.state.indexOpen ? 
                <div  className='table-responsive '>
                    <table className='table  text-center table-bordered table-hover m-0'>
                        <thead className=''>
                            <tr className='tableHeader  ' >
                                <th scope='col-2' className='text-center '>Sr.No.</th>
                                <th scope='col-8' className='text-center '>Surah</th>
                                <th scope='col-2' className='text-center '>Verse</th>
                            </tr>
                        </thead>
                        <tbody >
               
                                {
                                    surah.map((e,i)=>{
                                    return(
                                    <tr key={i} className='surahIndex'onClick={()=>this.surah(e)}>
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
                    this.state.indexOpen === false?
                        <div ref={this.scrollRef} className='surahContainer'>
                        <div className='surahHeader row justify-content-center'>
                            <div className='col-2 '>{this.state.clickedSurah.index}</div> 
                            <div className='col-8 p-0'>{this.state.clickedSurah.name}</div>
                            
                        </div>
                        {this.state.englishTranslation ?
                        <>
                            {Object.entries(this.state.clickedSurahEnglish.verse).map(
                                    ([key,val],i)=>{
                                        return(
                                            <>
                                            <div className='surahBodyEnglish row'>
                                                <div className='col-11 pr-0'>{val}</div>
                                                <div className='col-1 pl-0 verseParent'>
                                                    <div className='verseNo'>{i+1}</div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }
                                )}
                                </> :
                                <>
                            {Object.entries(this.state.clickedSurah.verse).map(
                                    ([key,val],i)=>{
                                        return(
                                            <>
                                            <div className='surahBody row'>
                                                <div className='col-1 pr-0 verseParent'>
                                                    <div className='verseNo'>{i+1}</div>
                                                </div>
                                                <div className='col-11 pl-0'>{val}</div>
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
                    <div className='row btns-quran border-top-grey p-0 m-0 justify-content-center'>
                        <div className='col-4 mt-2 mb-2 text-center quranBtn'>
                            <Link to='/todays'  className="btn btn1 btn-quran2" >
                                Today's
                            </Link>
                        </div>
                        <div className='col-4 mt-2 mb-2 text-center quranBtn'>
                            <Link to='/'  className="btn btn1 btn-quran2" >
                                Timetable
                            </Link>
                        </div>
                        <div className='col-4 mt-2 mb-2 text-center quranBtn'>
                            <Link to='/dua'  className="btn btn1 btn-quran2" >
                                Dua's
                            </Link>
                        </div>
            
                     </div>
                        :
                        <div className='row btns-quran border-top-grey p-0 m-0 justify-content-center'>
                        <div className='col-4 mt-2 mb-2 p-0 text-center'>
                            <Link to='/'  className="btn btn2 btn-quran2" >
                                Timetable
                            </Link>
                        </div>
                        <div className='col-4 mt-2 mb-2 p-0 text-center '>
                            <button type="button" onClick={()=>this.setState({indexOpen:true})} className="btn btn2 btn-quran2">
                                Quran Index
                            </button>
                        </div>
                        <div className='col-4 mt-2 mb-2 p-0 text-center '>
                        {this.state.englishTranslation?
                            <button type="button" onClick={()=>this.setState({englishTranslation:false})} className="btn btn2 btn-quran2">
                                In Arabic
                            </button>:
                            <button type="button" onClick={()=>this.setState({englishTranslation:true})} className="btn btn2 btn-quran2">
                                In English
                            </button>
                            }
                        </div>
                     </div>
                    }
                <div className='footer row m-0 p-0'>
                     <div className='col-12'><span className='small'>Developed by,</span> Faiz Ahmad Ansari, 7775995030</div>
                </div>
            </div>
          );
    }
}
 
export default Quran;