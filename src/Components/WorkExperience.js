import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';

const WorkExperience = () => {
  return (
    <div className="lg:mx-64 lg:min-h-screen h-full transition lg:mb-14">
      <VerticalTimeline>

        {/* Techbulls Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
          date="Dec/2024 - Present"
          iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          icon={<WorkIcon />}
        >
          <h4 className="text-xl font-bold pb-3">
            Persistent Systems Limited - Full Stack Developer
          </h4>
          <ul className="list-disc space-y-1">
            <li>Built full-stack AI-powered career platform (EnrolGPT) using React.js (TypeScript) and Spring Boot, onboarding 400+ students in the first phase.</li>
            <li>Boosted performance by 30% through code splitting, memoization, and Webpack optimization using React.memo, useCallback, and custom hooks.</li>
            <li>Developed scalable backend services in Spring Boot and PostgreSQL for student onboarding, user management, and career recommendations.</li>
            <li>Implemented JWT-based authentication with Axios interceptors for secure user sessions and auto token validation.</li>
            <li>Created a debounced search feature to reduce redundant API calls and enhance real-time responsiveness.</li>
            <li>Collaborated across teams, contributing to 15+ code reviews and debugging sessions to improve development speed and code quality.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Software Engineer A1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
          date="Dec/2021 - DEC/2022"
          iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          icon={<WorkIcon />}
        >
          <h4 className="text-xl font-bold pb-3">
            Persistent Systems Ltd - Software Engineer I
          </h4>
          <ul className="list-disc space-y-1">
            <li>Contributed to a fraud detection system where users upload receipts for OCR-based verification, working on the React.js Workbench dashboard.</li>
            <li>Built dynamic UI flows using React.js, Redux Toolkit, and custom hooks to manage filters, fraud tags, and approval workflows.</li>
            <li>Implemented performance optimization techniques like lazy loading and tree shaking, and used custom hooks to reduce redundant logic.</li>
            <li>Integrated backend APIs using Swagger, and maintained 85% unit test coverage with JUnit and JaCoCo.</li>
            <li>Deployed builds to AWS S3 with CloudFront for global delivery and used Jenkins CI/CD for automated multi-env releases.</li>
            <li>Led design reviews and mentored juniors, ensuring high-quality code and smooth Agile sprint execution.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Associate Software Engineer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
          date="June/2023 - Nov/2025"
          iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          icon={<WorkIcon />}
        >
          <h4 className="text-xl font-bold pb-3">
            Freelance - Associate Software Engineer
          </h4>
          <ul className="list-disc space-y-1">
            <li>Built frontend features using React.js, worked closely with backend teams to integrate APIs, and handled real-time bug resolution.</li>
            <li>Collaborated with cross-functional teams to understand business logic, define requirements, and deliver sprint goals.</li>
            <li>Maintained code versioning via Git, participated in code reviews, and handled feature branching and PR workflows.</li>
            <li>Actively participated in Agile ceremonies like daily stand-ups, sprint planning, and retrospectives.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Trainee SDET Engineer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(78 22 112)' }}
          date="July/2021 - DEC/2021"
          iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
          icon={<WorkIcon />}
        >
          <h4 className="text-xl font-bold pb-3">
            Persistent Systems Intern - Trainee SDET Engineer
          </h4>
          <ul className="list-disc space-y-1">
            <li>Completed intensive training in Java, Spring Boot, React.js, and JavaScript with focus on full-stack application development.</li>
            <li>Built POCs and internal tools to demonstrate understanding of REST APIs and frontend-backend integration.</li>
          </ul>
        </VerticalTimelineElement>

        {/* End Marker */}
        <VerticalTimelineElement
          iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
