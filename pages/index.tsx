import { Hero } from "@/components/ui/common";
import { CourseCard, List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import { CourseWithIndex, Course } from "content/types";

interface HomeProps {
  courses: CourseWithIndex[];
}

export default function Home({ courses }: HomeProps) {
  return (
    <BaseLayout>
      <Hero />
      <List courses={courses}>
        {(course: Course) => (
          <CourseCard course={course} key={course.id} Footer={undefined} />
        )}
      </List>
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
