import React from "react";
import PropType from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import { css, StyleSheet } from "aphrodite";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(courseListStyles.table)}>
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length == 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : null}
        {listCourses.map((val) => {
          return (
            <CourseListRow
              isHeader={false}
              textFirstCell={val.name}
              textSecondCell={val.credit}
              key={val.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

const courseListStyles = StyleSheet.create({
  table: {
    display: "table",
    border: "1px solid",
    borderCollapse: "collapse",
    margin: "2rem auto 0 auto",
    width: "90%",
  },
});

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.PropType = {
  listCourses: PropType.arrayOf(CourseShape),
};

export default CourseList;
