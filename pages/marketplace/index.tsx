import { CourseCard, List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import { Button } from "@/components/ui/common";
import { OrderModal } from "@/components/ui/order";
import { useState } from "react";
import { MarketHeader } from "@/components/ui/marketplace";
import { Course, CourseWithIndex } from "@/content/types";
import { toast } from "react-toastify";
interface MarketplaceProps {
  courses: CourseWithIndex[];
}

export default function Marketplace({ courses }: MarketplaceProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const purchaseCourse = (order: {}) => {
    setSelectedCourse(null);
    toast.success("Record has been saved in the system!", order);
  };

  return (
    <BaseLayout>
      <MarketHeader />
      <List courses={courses}>
        {(course: Course) => (
          <CourseCard
            course={course}
            key={course.id}
            Footer={({ canPurchaseCourse }) => (
              <div className="mt-3 flex justify-end mr-3">
                <Button
                  variant="lightPurple"
                  disabled={false}
                  onClick={() => setSelectedCourse(course)}
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </List>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onSubmit={purchaseCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}{" "}
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  const { data } = await getAllCourses();

  return {
    props: {
      courses: data,
    },
  };
}
