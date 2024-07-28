import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { FaBug, FaTools, FaExclamationTriangle } from "react-icons/fa";
import moment from "moment";
import events2 from "../../data/events2"; // Import the JSON data
import './timeline.css';

const Container = styled.div`
  background-color: #f4f6f8;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const getIcon = (type) => {
  switch (type) {
    case "incident":
      return <FaBug />;
    case "service":
      return <FaTools />;
    case "change":
      return <FaExclamationTriangle />;
    default:
      return <FaExclamationTriangle />;
  }
};

const getIconStyle = (type) => {
  switch (type) {
    case "incident":
      return { background: "rgb(233, 30, 99)", color: "#fff" };
    case "service":
      return { background: "rgb(33, 150, 243)", color: "#fff" };
    case "change":
      return { background: "rgb(255, 165, 0)", color: "#fff" };
    default:
      return { background: "rgb(255, 165, 0)", color: "#fff" };
  }
};

// Custom Icon Component
const CustomIcon = ({ id }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '50%'
  }}>
    {id}
  </div>
);

const formatDate = (date) => moment(date).format("YYYY-MM-DD HH:mm");

const calculateDuration = (start, end) => {
  const startDate = moment(start);
  const endDate = moment(end);
  const duration = moment.duration(endDate.diff(startDate));
  console.log(duration.days())
  return `${isNaN(duration.days()) ? 0 : duration.days()} days ${duration.hours()} hours ${duration.minutes()} minutes`;
};

const ReactVerticalTimeline2 = () => {
  return (
    <Container>
      <Header>ITSM Event Timeline</Header>
      <VerticalTimeline>
        {events2.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            date={`${formatDate(event.startDate)} - ${formatDate(
              event.endDate
            )}`}
            dateClassName="date"
            iconStyle={getIconStyle(event.type)}
            // icon={getIcon(event.type)}
            icon={<CustomIcon id={event.id} />}
            position="relative"
            contentStyle={{padding: '10px'}}
          >
        
              {event.endDate === "" ? (
                <div style={{ position: "absolute", right: '-5px', top: '0px', background: '#000', color: '#fff', borderRadius: '5px', padding: '10px', transform: 'rotate(15deg)' }}>
                  <span>In Progress</span>
                </div>
              ) : (
                <div style={{ position: "absolute", right: '-5px', top: '0px', background: '#d99', color: '#fff', borderRadius: '5px', padding: '10px', transform: 'rotate(15deg)' }}>
                  <span>Completed</span>
                </div>
              )}

              <h3 style={{ fontSize: "20px" }}>
                {event.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {event.subtitle}
              </h4>
              <p>{event.description}</p>
              <p>
                <strong>Duration:</strong>{" "}
                {calculateDuration(event.startDate, event.endDate)}
              </p>
            
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default ReactVerticalTimeline2;
