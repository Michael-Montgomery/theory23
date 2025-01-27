import Header from '../../components/header/header';
import projects from '../../data/projects';
import team from '../../data/team';
import './home.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



export default function Home() {

    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showWebsiteField, setShowWebsiteField] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [timerExpired, setTimerExpired] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimerExpired(true)
        }, 3000)
    })

    function handleCheckboxClick() {
        setShowWebsiteField(!showWebsiteField)
    }




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
                        <div id='home-picture-wrapper'></div>
                        <div id='bio-wrapper'>
                            <p id='name' className='logo'>Theory 23</p>
                            <p>
                                Theory 23 is world-class software design & development studio based in Baltimore, MD and founded by Michael Montgomery a Senior Software
                                Engineer with over a decade of experience using the latest technologies to build stunning and effective web experiences time and time again. 
                            </p>
                        </div>

                        <div id='picture-wrapper-two'></div>

                        <div id='projects'>
                            <h2>What We Do</h2>
                            <div id='services'>

                                <div id='left-services-wrapper' className='services-list-wrapper'>
                                    <ul>
                                        <li>UI/UX</li>
                                        <li>Web Development</li>
                                        <li>Search Engine Optimization</li>
                                    </ul>
                                </div>
                                <div id='right-services-wrapper' className='services-list-wrapper'>
                                    <ul>
                                        <li>Branding</li>
                                        <li>Social Media Management</li>
                                        <li>Consulting</li>
                                    </ul>
                                </div>
                            </div>
                            <ul id='Projects-list'>
                                {
                                    projects.map((proj, idx) => {
                                        return (
                                            <li key={idx} onClick={() => {
                                                setSelectedIndex(idx);
                                                openModal()
                                            }}>
                                                <div className='project-wrapper'>
                                                    <div className='project-details-wrapper'>
                                                        <p className='detials'>{proj.name}</p>

                                                    </div>
                                                    <div className='project-picture-wrapper' style={{ backgroundImage: `url(${proj.imgUrl})` }}></div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div id='picture-wrapper-three'></div>
                        <div id='team'>
                            <h2>Our Team</h2>
                            <ul id='team-list'>
                                {
                                    team.map((member, idx) => {
                                        return (
                                            <li key={idx}>
                                                <div className='team-member-wrapper'>
                                                    <div className='team-member-picture-wrapper' style={{ backgroundImage: `url(${member.imgUrl})` }}></div>
                                                    <p className='team-member-name'>{`${member.firstName} ${member.lastName}`}</p>
                                                    <p className='team-member-title'>{member.title}</p>
                                                    <p className='team-member-bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div id='picture-wrapper-four'></div>
                        <div id='contact-wrapper'>
                            <div id='contact-form-wrapper'>
                                <h2>Let's do something amazing together!</h2>
                                <form>
                                    <input type='text' className='half' placeholder='First Name' required minLength='2' maxLength='30'></input>
                                    <input type='text' className='half' placeholder='Last Name' required minLength='2' maxLength='30'></input><br></br>
                                    <input type='text' className='full' placeholder='Company' minLength='2' maxLength='70'></input><br></br>
                                    <input type='email' className='full' placeholder='Email Address' required minLength='2' maxLength='500'></input><br></br>
                                    <label>
                                        <input type='checkbox' onClick={handleCheckboxClick}></input>
                                        I currently have a website
                                    </label><br></br>
                                    {
                                        showWebsiteField && <><input type='text' className='full' placeholder='Website Address'></input><br></br></>
                                    }
                                    <textarea placeholder='Your message here (limited to 500 characters)' className='full' required minLength='2' maxLength='30'></textarea>
                                </form>
                            </div>
                        </div>

                    </div>

                </div> : <></>
            }
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id='job-modal-wrapper'>
                    <p onClick={closeModal} id='job-modal-close-btn'>X</p>
                    <h2 id='job-modal-name'>{projects[selectedIndex].name}</h2>
                    <div id='job-modal-picture-wrapper' style={{ backgroundImage: `url(${projects[selectedIndex].imgUrl})` }}></div>
                    <p id='job-modal-about'>{projects[selectedIndex].about}</p>
                    <ul id='job-modal-areas-list'>
                        {
                            projects[selectedIndex].workAreas.map((area, idx) => {
                                return (
                                    <li key={idx}>{area}</li>
                                )
                            })
                        }
                    </ul>
                    <a href={projects[selectedIndex].siteUrl} target='_blank' rel="noreferrer">View Website</a>
                </div>

            </Modal>

        </>
    )
}