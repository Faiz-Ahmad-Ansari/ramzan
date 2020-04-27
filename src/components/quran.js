import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
            <div className='container-fluid p-0 quranContainer'>
                <div className='titleQuran'>
                <div className='row p-0 m-0 '>
                    <h1 className='text-center  col-12 p-0 m-0'>Quran</h1>
                </div>
                <div className='row bg-dark p-0 m-0'>
                    <div className='col-6 mt-2 mb-2 text-center quranBtn'>
                        <Link to='/'  className="btn btn-primary-custom" >
                            Back to Timetable
                        </Link>
                    </div>
                    <div className='col-6 mt-2 mb-2  text-center '>
                        <button type="button" onClick={()=>this.setState({indexOpen:true})} className="btn btn-success-custom">
                            Quran Index
                        </button>
                    </div>
                </div>
                </div>
                <div className='BodyQuran '>
            {
            this.state.indexOpen ? 
                <div className='table-responsive '>
                    <table className='table text-center table-bordered table-hover m-0'>
                        <thead className=''>
                            <tr className='tableHeader text-white ' >
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
                        <div className='surahContainer'>
                        <div>{<div className='surahHeader'>{this.state.clickedSurah.index} {this.state.clickedSurah.name}</div>}</div>
                        {Object.entries(this.state.clickedSurah.verse).map(
                                ([key,val],i)=>{
                                    return(
                                        <>
                                        <div className='surahBody row'>
                                            <div className='col-1 verseParent'>
                                                <div className='verseNo'>{i+1}</div>
                                                </div>
                                              <div className='col-11'>{val}</div>
                                              </div>
  
                                        {console.log(i+1,key,val)}
                                        </>
                                    )
                                }
                            )}
                        </div>        
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