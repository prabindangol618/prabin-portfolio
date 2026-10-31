
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Experience & Education</h1>

                <VerticalTimeline>

                    {/* Momtech */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'white',
                            color: 'rgb(39, 40, 34)'
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid white'
                        }}
                        date="December 2024 – October 2026"
                        iconStyle={{
                            background: '#5000ca',
                            color: 'white'
                        }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            UI/UX Designer
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Momtech Pvt. Ltd.
                        </h4>

                        <p>
                            Joined as a UI/UX Designer Intern in December
                            2024 and progressed to Mid-Level UI/UX Designer
                            in February 2025.
                        </p>

                        <p>
                            Worked on wireframes, user flows, prototypes
                            and high-fidelity designs for websites and
                            digital products, collaborating with team
                            members throughout the design process.
                        </p>
                    </VerticalTimelineElement>

                    {/* Daraz */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="August 2023 – February 2024"
                        iconStyle={{
                            background: '#5000ca',
                            color: 'white'
                        }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Customer Service Representative
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Daraz
                        </h4>

                        <p>
                            Handled customer enquiries through live chat
                            and email, assisting customers with their
                            questions and concerns.
                        </p>

                        <p>
                            Developed communication, problem-solving
                            and customer-handling skills while working
                            primarily night shifts.
                        </p>
                    </VerticalTimelineElement>

                    {/* Education */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Completed 2025"
                        iconStyle={{
                            background: '#5000ca',
                            color: 'white'
                        }}
                        icon={
                            <FontAwesomeIcon icon={faGraduationCap} />
                        }
                    >
                        <h3 className="vertical-timeline-element-title">
                            Bachelor of Information Technology
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Texas College of Management & IT
                        </h4>

                        <p>
                            BIT graduate with an academic foundation
                            in information technology, software
                            development and computer systems.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;
