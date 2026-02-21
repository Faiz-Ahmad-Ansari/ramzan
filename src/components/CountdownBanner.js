import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../style/newTimetable.css';

const CountdownBanner = ({ data }) => {
    const [timeLeft, setTimeLeft] = useState('');
    const [label, setLabel] = useState('');
    const [rozaNo, setRozaNo] = useState('');
    const [todayDate, setTodayDate] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        const tick = () => {
            const today = moment().format('DD MMM YYYY');
            const todayEntry = data.find(e => e.date === today);

            if (!todayEntry) {
                setLabel('');
                setTimeLeft('');
                return;
            }

            setTodayDate(todayEntry.date);

            const now = moment();

            const sehr = moment(todayEntry.sehr, 'hh:mm A');
            const iftar = moment(todayEntry.iftaar, 'hh:mm A');

            if (now.isBefore(sehr)) {
                setRozaNo(todayEntry.roza);
                setDone(false);
                const diff = sehr.diff(now);
                const dur = moment.duration(diff);
                const h = String(Math.floor(dur.asHours())).padStart(2, '0');
                const m = String(dur.minutes()).padStart(2, '0');
                const s = String(dur.seconds()).padStart(2, '0');
                setLabel('🌙 Sehr in');
                setTimeLeft(`${h}:${m}:${s}`);

            } else if (now.isBefore(iftar)) {
                setRozaNo(todayEntry.roza);
                setDone(false);
                const diff = iftar.diff(now);
                const dur = moment.duration(diff);
                const h = String(Math.floor(dur.asHours())).padStart(2, '0');
                const m = String(dur.minutes()).padStart(2, '0');
                const s = String(dur.seconds()).padStart(2, '0');
                setLabel('🌅 Iftaar in');
                setTimeLeft(`${h}:${m}:${s}`);

            } else {
                // Iftaar done — show next day's Sehr
                const tomorrow = moment().add(1, 'day').format('DD MMM YYYY');
                const tomorrowEntry = data.find(e => e.date === tomorrow);

                if (!tomorrowEntry) {
                    setRozaNo(todayEntry.roza);
                    setLabel('✅ Iftaar Done');
                    setTimeLeft('');
                    setDone(true);
                    return;
                }

                setRozaNo(tomorrowEntry.roza);
                setDone(false);

                const nextSehr = moment(tomorrowEntry.sehr, 'hh:mm A').add(1, 'day');
                const diff = nextSehr.diff(now);
                const dur = moment.duration(diff);
                const h = String(Math.floor(dur.asHours())).padStart(2, '0');
                const m = String(dur.minutes()).padStart(2, '0');
                const s = String(dur.seconds()).padStart(2, '0');
                setLabel('🌙 Sehr in');
                setTimeLeft(`${h}:${m}:${s}`);
            }
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [data]);

    if (!rozaNo) return null;

    return (
        <div className='countdown-banner-wrapper'>
            <div className='countdown-banner'>
                <div className='countdown-timer'>
                    <span className='countdown-roza'>Roza {rozaNo}</span>
                    <span className='countdown-label'>{label}</span>
                    {!done && <span className='countdown-digits'>{timeLeft}</span>}
                </div>
            </div>
        </div>
    );
};

export default CountdownBanner;