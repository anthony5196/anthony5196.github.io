import React from "react";
import Card from "react-bootstrap/Card";
import Photo from "./recipe-book.png";



import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>Recipe Book</Card.Title>
          <Card.Text>
            This React project allows you to search
             through Edamads API to toggle through health facts
             for your favorite meals.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://anthony5196.github.io/recipe-book/">Live Site</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TimeLine;
