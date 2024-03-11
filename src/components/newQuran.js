import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import surah from './surah'
import surahEnglish from './surahEnglish'
import '../style/newTimetable.css'
import moment from 'moment';


class Quran extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = createRef()
        this.state = {
            clickedSurah: '',
            clickedSurahEnglish: '',
            englishTranslation: false,
            indexOpen: true,
            // backgroundColors: ['bisque', 'indianred', 'darkseagreen', 'darkslateblue', 'ivory', 'darkmagenta'],
            backgroundColors: ['bisque', 'indianred'],
        };
        this.newBodyRef = React.createRef();
    }
    surah = (e) => {
        setTimeout(this.scrollon,0)
        // window.scrollTo(0, 0)
        this.surahEng(e)
        this.setState({ clickedSurah: e, indexOpen: false })
    }

    surahEng = (e) => {
        let clickedSurahEnglish = surahEnglish.filter((f) => f.index === e.index)[0]
        this.setState({ clickedSurahEnglish: clickedSurahEnglish })
    }

    scrollon = () => {
        window.scrollTo(0, 0)
        // this.scrollRef.current.scroll({
        //     top: 0,
        //     behavior: 'smooth'
        // });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.indexOpen !== this.state.indexOpen) {
            this.scrollToTop();
        }
    }

    scrollToTop = () => {
        if (this.newBodyRef.current) {
            this.newBodyRef.current.scrollTop = 0;
        }
    };


    handleClick = (date) => {
        const { history } = this.props;
        history.push(`/todays/${date}`);
    }

   splitArabicAndEnglish = (inputString) => {
        // Regular expression to match Arabic Unicode characters
        const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]+/g;
      
        // Split the input string into Arabic and English parts
        const arabicPart = inputString.match(arabicRegex);
        const englishPart = inputString.split(arabicRegex).filter(part => part !== "");
      
        // Combine Arabic and English parts into an array
        const resultArray = [];
        for (let i = 0; i < Math.max(arabicPart.length, englishPart.length); i++) {
          if (englishPart[i]) {
            resultArray.push(englishPart[i].trim());
          }
          if (arabicPart[i]) {
            resultArray.push(arabicPart[i].trim());
          }
        }
      
        return resultArray;
      }



    render() {
        const { backgroundColors } = this.state;
        return (
            <div className='container-fluid p-0 quranContainer'>
                <div className="title-container-dua">
                    <h3 className='text-center newSurahHeader pl-4 pt-2' >Quran</h3>
                    <h3 className='text-center newSurahHeader pr-4 pt-2' >قرآن</h3>
                </div>

                <div className='NewBodyQuran pt-5 pb-5' ref={this.newBodyRef}>
                    {
                        this.state.indexOpen ?
                            <div className='table-responsive-new pb-5'>
                                <div className='newTableHeaders' style={{ color: '#fff' }}>
                                    <span style={{ width: "25%" }}>Sr.No.</span>
                                    <span style={{ width: "25%" }}>Surah</span>
                                    <span style={{ width: "25%" }}>سورة</span>
                                    <span style={{ width: "25%" }}>Verse</span>
                                </div>
                                {
                                    surah.map((e, i) => {
                                        // const bgColor = backgroundColors[i % backgroundColors.length]; // Use modular arithmetic to cycle through colors
                                        // const color = i % 2 === 0 ? '#242424' : '#fff';
                                        // const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;
                                        const nameArray = this.splitArabicAndEnglish(e.name)
                                        console.log(nameArray);
                                        return (
                                            <div key={i} className='newTableRow' onClick={() => this.surah(e)}>
                                                <span className=' '>{e.index}</span>
                                                <span className=''>{nameArray[0]}</span>
                                                <span style={{fontSize:'1.3rem'}} className=''>{nameArray[1]}</span>
                                                <span className=''>{e.count}</span>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                            : null
                    }

                    {
                        this.state.indexOpen === false ?
                            <div ref={this.scrollRef} className='surahContainer'>
                                <div style={{ display: 'flex', justifyContent: 'center' }} className='newSurahHeader'>
                                    <div className=' small'>{this.state.clickedSurah.index} - {this.state.clickedSurah.name}</div>
                                </div>

                                <div className='newSurahCard'>
                                    {Object.entries(this.state.clickedSurah.verse).map(
                                        ([key, val], i) => {
                                            const verseEnglish = this.state.clickedSurahEnglish.verse[key];
                                            return (
                                                <>
                                                    <div className='newSurahBody row'>
                                                        {/* <div className='col-1 pr-0 verseParent'>
                                                                <div className='verseNo'>{i + 1}</div>
                                                            </div> */}
                                                        <div className='col-12 pl-0 pb-2 text-left' ><span style={{ fontSize: '10px', border: '1px solid grey', borderRadius: '50%', padding: '5px 7px' }}>verse - {i + 1}</span></div>
                                                        <div className='surahArabic col-12 pl-0'>{val}</div>
                                                        <div className='surahEnglish col-12 pl-0'>{verseEnglish}</div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                            : null
                    }
                </div>
                {this.state.indexOpen ?
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group-new  pt-1 p-0 m-0'>
                        <div style={{ width: '30%' }} className=' mt-1 mb-2 text-center newBtn'>
                            <Link to='/' >
                                <div style={{ color: '#ffffffde' }}>
                                    ٹائم ٹیبل
                                </div>
                                <div style={{ padding: '2px 10px', fontSize: '0.9rem !important', borderRadius: '50px !important', color: '#ffffffde' }} className="btn ">
                                    TimeTable
                                </div>
                            </Link>
                        </div>

                        <div onClick={() => this.handleClick(moment().format('DD MMM YYYY'))} style={{ width: '20%' }} className=' mt-1 mb-2 text-center newBtn'>
                            {/* <Link to='/today' > */}
                            <div style={{ color: '#ffffffde' }}>
                                آج
                            </div>
                            <div className="btn newBtn1 ">
                                Today's
                            </div>
                            {/* </Link> */}
                        </div>

                        <div style={{ width: '30%' }} className=' mt-1 mb-2 text-center newBtn'>
                            <Link to='/dua' >
                                <div style={{ color: '#ffffffde', textDecoration: 'none' }}>
                                    دعاء
                                </div>
                                <div className="btn newBtn1 ">
                                    Dua's
                                </div>
                            </Link>
                        </div>
                    </div>
                    :
                    <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group-new  pt-1 p-0 m-0'>
                        <div style={{ width: '30%' }} className=' mt-1 mb-2 text-center newBtn'>
                            <Link to='/' >
                                <div style={{ color: '#ffffffde' }}>
                                    ٹائم ٹیبل
                                </div>
                                <div className="btn newBtn1 ">
                                    TimeTable
                                </div>
                            </Link>
                        </div>

                        <div style={{ width: '20%' }} className=' mt-1 mb-2 text-center newBtn'>
                            <Link to='/dua' >
                                <div style={{ color: '#ffffffde' }}>
                                    دعاء
                                </div>
                                <div className="btn newBtn1 ">
                                    Dua's
                                </div>
                            </Link>
                        </div>

                        <div  className=' mt-1 mb-2 text-center newBtn'>
                            <button type="button" onClick={() => this.setState({ indexOpen: true })} className="btn newBtn1 ">
                                قرآن انڈیکس
                            </button>
                            <button type="button" onClick={() => this.setState({ indexOpen: true })} className="btn newBtn1 ">
                                Quran Index
                            </button>
                        </div>
                    </div>
                    // <div style={{ display: 'flex', justifyContent: 'space-around' }} className=' btns-group border-top-grey p-0 m-0 '>
                    //     <div className=' mt-2 mb-2 p-0 text-center quranBtn '>
                    //         <button type="button" onClick={() => this.setState({ indexOpen: true })} className="btn btn1 btn-quran2">
                    //             Quran Index
                    //         </button>
                    //     </div>
                    //     <div className=' mt-2 mb-2 p-0 text-center quranBtn'>
                    //         {this.state.englishTranslation ?
                    //             <button type="button" onClick={() => this.setState({ englishTranslation: false })} className="btn btn1 btn-quran2">
                    //                 In Arabic
                    //             </button> :
                    //             <button type="button" onClick={() => this.setState({ englishTranslation: true })} className="btn btn1 btn-quran2">
                    //                 Translation
                    //             </button>
                    //         }
                    //     </div>
                    // </div>
                }
                <div className='footer-new m-0 p-0'>
                    <div className='mb-2' style={{ color: 'grey' }}>
                        <span className='small footerTitle'>Designed & Developed by -
                            <span className='ml-3' style={{ fontSize: '12px' }}>
                                Faiz Ahmad Ansari
                                <span className='ml-3' style={{ fontSize: '15px' }}>
                                    فیض احمد انصاری
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quran;