import Header from '../../components/header/header';
import './home.css';
import { useEffect, useState } from 'react';



export default function Home() {

    const [timerExpired, setTimerExpired] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimerExpired(true)
        }, 3000)
    })


    return (
        <>
            <div id='home-outer-wrapper' style={{ height: timerExpired ? 0 : '100vh' }}>

                <div id='home-content-wrapper' style={{ height: timerExpired ? 0 : '100vh' }}>
                    <p id='first-name'>Theory 23</p>
                    <p id='tagline-text'>A Marketing Agengy</p>

                </div>
            </div>
            {
                timerExpired ? <div id='next-div'>

                    <Header></Header>

                    <div id='home-wrapper'>
                        <div id='home-picture-wrapper'></div>
                    </div>

                </div> : <></>
            }
        </>
    )
}