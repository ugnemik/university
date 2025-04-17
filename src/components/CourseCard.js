import React from "react";

const CourseCard = ({ course }) => {
  return (
    <a href="#" className="course-card">
      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__text">{course.description}</p>
      <span className="course-card__category">{course.level}</span>
      <span className="course-card__category">{course.department}</span>
    </a>
  );
};

export default CourseCard;
