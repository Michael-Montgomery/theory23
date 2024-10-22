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
                    <p id='tagline-text'>A Design Agency</p>

                </div>
            </div>
            {
                timerExpired ? <div id='next-div'>

                    <Header></Header>

                    <div id='home-wrapper'>
                        <div id='home-picture-wrapper'></div><br></br>
                        <div id='bio-wrapper'>
                            <p className='logo'>Theory 23</p>
                            <p>
                                At Theory 23, we are a collective of creatives, engineers and support staff who specialize in creating unique and engaging 
                                digital experiences. We create standout web applications using battle-tested methodologies to drive results we are proud to stand by. 
                                While UI/UX design and engineering are our primary focus, our toolkit encompasses a wide array of skillsets. For more information, be sure to
                                check out our services page. We are glad you're here and we can't wait to build something amazing together.
                            </p>
                        </div>
                        <div id='team-wrapper'></div>
                    </div>

                </div> : <></>
            }
        </>
    )
}