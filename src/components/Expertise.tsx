
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faPalette,
    faVideo,
    faListCheck,
    faShareNodes
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const expertiseAreas = [
    {
        icon: faCode,
        title: "UI/UX & Frontend Development",
        description:
            "Designing websites and mobile applications, creating intuitive user interfaces, and bringing designs to life by writing frontend code using HTML, CSS and React.",
        skills: [
            "UI Design",
            "UX Design",
            "Web Design",
            "App Design",
            "HTML",
            "CSS",
            "React"
        ]
    },
    {
        icon: faPalette,
        title: "Graphic Design",
        description:
            "Creating visual content and design materials using Canva, with a fair share of experience working with Adobe Photoshop and Affinity.",
        skills: [
            "Canva",
            "Adobe Photoshop",
            "Affinity"
        ]
    },
    {
        icon: faVideo,
        title: "Video Editing",
        description:
            "Editing and refining video content using CapCut, combining visuals, transitions, text and audio to create engaging videos.",
        skills: [
            "CapCut",
            "Video Editing",
            "Transitions",
            "Visual Storytelling"
        ]
    },
    {
        icon: faListCheck,
        title: "Project Management",
        description:
            "Managing project tasks, coordinating with people, organising workflows and keeping projects moving towards their goals.",
        skills: [
            "Task Management",
            "Team Coordination",
            "Planning",
            "Team Collaboration"
        ]
    },
    {
        icon: faShareNodes,
        title: "Social Media Management",
        description:
            "Managing social media activities, scheduling content, organising posts and handling publishing through tools such as Meta Business Suite and Buffer.",
        skills: [
            "Meta Business Suite",
            "Buffer",
            "Content Scheduling",
            "Social Media Management"
        ]
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills & Expertise</h1>

                <div className="skills-grid">
                    {expertiseAreas.map((area, index) => (
                        <div className="skill" key={index}>
                            <FontAwesomeIcon
                                icon={area.icon}
                                size="3x"
                            />

                            <h3>{area.title}</h3>

                            <p>{area.description}</p>

                            <div className="flex-chips">
                                <span className="chip-title">
                                    Skills & Tools:
                                </span>

                                {area.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        className="chip"
                                        label={skill}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
