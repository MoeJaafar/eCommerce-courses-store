import { CourseMap, Course } from "content/types";
import courses from "./index.json";

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce<CourseMap>((a, c: Course, i) => {
      a[c.id] = { ...c, index: i };
      return a;
    }, {}),
  };
};
