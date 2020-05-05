import React, { Component } from 'react';
import '../style/timetable.css'
class Loader extends Component {
    state = {  }
    render() { 
        return (
            
            <div  className=" d-flex loader  align-items-center justify-content-center">
                {/* <div>Loading Please Wait</div><br/> */}
               <div class="dizzy-gillespie"></div>
            </div>
            
          );
    }
}
 
export default Loader;