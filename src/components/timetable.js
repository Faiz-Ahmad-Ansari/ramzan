import React, { Component, createRef } from 'react';
// import moment from 'moment';
import bgImage from '../assets/bgIslam.jpg'
import timeTableData from './data'
import '../style/timetable.css' 

class timetable extends Component {
    constructor(props) {
        super(props);
        this.popUp = createRef()
        this.state = { 
            openModal :false
         }
    }

    componentDidMount(){
        this.setState({openModal:true})
        this.popUp.current.click()
    }

    render() { 
        // let a = moment().format('DD MMM YYYY');
        // let b = moment('20 Feb 2020')
        // let c= b.diff(moment(a),'days')
        // let e= b.diff(moment(a),'hours')
        // let f= b.diff(moment(a),'minutes')
        // // let a = moment(['05 Feb 2020']);
        // // let b = moment(['03 Feb 2020']);
        // // let b = moment(['1  9 Feb 2020']);
        // // console.log(a.diff(b,'days'))
        // console.log(a)
        // console.log(b)
        // console.log(c)
        // console.log(e)
        // console.log(f)
        // console.log(b.diff(c))

        let style={  
            // backgroundImage: url(kotergate),
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.8)), url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }
        return (
            <div style={style}>
                <div className='row m-0 sticky-top' style={{backgroundColor:'black'}} >
                     <div className='col-12  mt-2'>
                         <h3 className='text-center text-white'>Ramzan Time Table 2020</h3>
                    </div>
                {/* <!-- Button trigger modal --> */}
                    <div className='col-1 mt-2 d-none '>
                        <button type="button" ref={this.popUp} className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                            Today
                        </button>
                    </div>
                </div>

                <div className='table-responsive '>
                    <table className='table text-center table-bordered table-hover m-0'>
                        <thead className=''>
                            <tr className='tableHeader text-white ' >
                                <th scope='col' className='text-center '>Roza</th>
                                <th scope='col' className='text-center '>Date</th>
                                <th scope='col' className='text-center '>Sehr </th>
                                <th scope='col' className='text-center '>Iftaar</th>
                            </tr>
                        </thead>
                        <tbody >
                        {
                            timeTableData.map((e,i)=>{
                                 return(            
                                        // <tr key={i} className={`${e.date === '15 May 2019' ? 'bg-warning' : ''}${i%7 && e.date !== '15 May 2019' ? 'table-warning':'table-danger'}`}>
                                        <tr key={i} className={e.date === '15 May 2019' ? 'bg-warning font-weight-bold' : 'text-white'}>
                                            <td>{e.roza}</td>
                                            <td>{e.date}</td>
                                            <td>{e.sehr }</td>
                                            <td>{e.iftaar}</td>
                                        </tr>
                                        )
                                    })
                                }
                           
                        </tbody>
                    </table>
                </div>


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal" role="document">
                        <div className="modal-content">
                        <div className="modal-header ">
                                <h4 className="modal-title " id="exampleModalLongTitle">Today's</h4>
                                <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                </button>
                            
                        </div>
                        <div className="modal-body">
                            {
                                // console.log(timeTableData.filter(e=>e.date==='15 May 2019'))
                                timeTableData.filter(e=>e.date==='15 May 2019').map((e,i)=>{
                                    return(
                                        <div key={i}>
                                            <div className='row'>
                                                <div className='col-6'>Roza No. -</div> 
                                                <div className='col-6'><b>{e.roza}</b></div>
                                            </div>
                                             <div className='row'>   
                                                <div className='col-6'>Date -</div> 
                                                <div className='col-6'><b>{e.date}</b></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-6'>Sehr Time  -</div>
                                                <div className='col-6'><b>{e.sehr}</b></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-6'>Iftar Time -</div>
                                                <div className='col-6'><b>{e.iftaar}</b>    </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary " data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default timetable;