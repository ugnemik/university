import React, { useState, useMemo } from "react";
import CourseCard from "./CourseCard";
import coursesData from "../data/courses.json";

const PAGE_SIZE = 6;

const CourseList = () => {
  let departments = [];
  let levels = [];

  coursesData.forEach((course) => {
    if (!departments.includes(course.department)) {
      departments.push(course.department);
    }
  });

  coursesData.forEach((course) => {
    if (!levels.includes(course.level)) {
      levels.push(course.level);
    }
  });

  const [levelFilter, setLevelFilter] = useState([]);
  const [deptFilter, setDeptFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelect = (value, array, setArray) => {
    setCurrentPage(1);
    if (array.includes(value)) {
      setArray(array.filter((item) => item !== value));
    } else {
      setArray([...array, value]);
    }
  };

  // FILTER
  const filteredCourses = useMemo(() => {
    return coursesData
      .filter((course) => (levelFilter.length > 0 ? levelFilter.includes(course.level) : true))
      .filter((course) => (deptFilter.length > 0 ? deptFilter.includes(course.department) : true))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [levelFilter, deptFilter]);

  // PAGINATION
  const totalPages = Math.ceil(filteredCourses.length / PAGE_SIZE);
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredCourses.slice(start, start + PAGE_SIZE);
  }, [filteredCourses, currentPage]);

  const paginate = (page) => {
    console.log("Scrolling to top on page:", page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // Only change page if it's different
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="courses container">
      <h2>Explore our courses</h2>
      <div className="courses-listing ">
        {/* Filters */}
        <div className="courses-listing__filters">
          <div className="courses-listing__filters-filter">
            <h4>Filter by level:</h4>
            {levels.map((level, index) => (
              <label key={index}>
                <input type="checkbox" checked={levelFilter.includes(level)} onChange={() => handleSelect(level, levelFilter, setLevelFilter)} />
                <span className="checkmark"></span>
                <span className="filter-label"> {level}</span>
              </label>
            ))}
          </div>

          <div className="courses-listing__filters-filter">
            <h4>Filter by department:</h4>
            {departments.map((dept, index) => (
              <label key={index}>
                <input type="checkbox" checked={deptFilter.includes(dept)} onChange={() => handleSelect(dept, deptFilter, setDeptFilter)} />
                <span className="checkmark"></span>
                <span className="filter-label"> {dept}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="courses-listing__card-container">
          {/* Course List */}
          <div className="courses-listing__card-list">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Pagination */}
          <div className="courses-listing__pagination">
            <button className="courses-listing__pagination-page" onClick={() => paginate(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
              &lt; Prev
            </button>
            <span className="courses-listing__pagination-count">
              {currentPage} of {totalPages}
            </span>
            <button
              className="courses-listing__pagination-page"
              onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
