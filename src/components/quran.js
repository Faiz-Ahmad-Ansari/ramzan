import React, { Component } from 'react';
import surah from './surah'
import '../style/timetable.css'

class Quran extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clickedSurah : '',
            indexOpen : true
         }
    }
    surah = (e) => {
        console.log(e)
        window.scrollTo(0, 0)
        this.setState({clickedSurah:e,indexOpen:false})
    }
    render() { 
        return (
            <div className='container-fluid p-0'>
                <div className='titleQuran'>
                <div className='row p-0 m-0 '>
                    <h1 className='text-center  col-12 p-0 m-0'>Quran</h1>
                </div>
                <div className='row bg-dark p-0 m-0'>
                    <div className='col-6 mt-2 mb-2 text-center quranBtn'>
                        <button type="button" onClick={()=>window.location.href='/'}  className="btn btn-primary-custom" >
                            Back to Timetable
                        </button>
                    </div>
                    <div className='col-6 mt-2 mb-2  text-center '>
                        <button type="button" onClick={()=>this.setState({indexOpen:true})} className="btn btn-success-custom">
                            Quran Index
                        </button>
                    </div>
                </div>
                </div>
                <div className='BodyQuran '>
                
                
                {console.log(this.state.clickedSurah)}
                {
                    this.state.indexOpen ?
                        surah.map(e=>{
                            return(
                            <div className='surahHeader row justify-content-center ' onClick={()=>this.surah(e)}>
                                <div className='col-2 '>{e.index}</div>
                                <div className='col-6 text-left'>{e.name}</div>
                            </div>
                            )
                        })
                    : null
                }
                {
                    this.state.indexOpen === false?
                        <>
                        <div>{<div className='surahHeader'>{this.state.clickedSurah.index} {this.state.clickedSurah.name}</div>}</div>
                        {Object.entries(this.state.clickedSurah.verse).map(
                                ([key,val],i)=>{
                                    return(
                                        <>
                                        <div className=' surahBody'>{i+1}  {val}</div>
                                        {console.log(i+1,key,val)}
                                        </>
                                    )
                                }
                            )}
                        </>        
                            : null
                }
                </div>
                <div className='footer row m-0 p-0'>
                     <div className='col-12'><span className='small'>Developed by</span> Faiz Ahmad Ansari, 7775995030</div>
                </div>
            </div>
          );
    }
}
 
export default Quran;