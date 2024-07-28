import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { FaBug, FaTools, FaExclamationTriangle } from "react-icons/fa";
import events from "../../data/events"; // Import the JSON data

const Container = styled.div`
  background-color: #f4f6f8;
  padding: 20px;
  font-family: "Arial, sans-serif";
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

const ReactVerticalTimeline = () => {
  return (
    <Container>
      <Header>ITSM Event Timeline</Header>
      <VerticalTimeline>
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            date={event.date}
            iconStyle={getIconStyle(event.type)}
            icon={getIcon(event.type)}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {event.subtitle}
            </h4>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default ReactVerticalTimeline;
