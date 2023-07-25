import { Modal } from "@/components/ui/common";
import { BaseLayout } from "@/components/ui/common/layout";
import { CourseHero, Curriculum, Keypoint } from "@/components/ui/course";
import { getAllCourses } from "@/content/courses/fetcher";
import { Course } from "@/content/types";
import { NextSeo } from "next-seo";

interface CourseProps {
  course: Course;
}

export default function Course({ course }: CourseProps) {
  return (
    <BaseLayout>
      <NextSeo
        title={`Course - ${course.title}`}
        description={course.description}
        openGraph={{
          images: [
            {
              url: course.coverImage,
            },
          ],
        }}
        canonical={course.link}
      />
      <CourseHero
        title={course.title}
        description={course.description}
        image={course.coverImage}
      />
      <Keypoint points={course.wsl} />
      <Curriculum locked={true} />
      <Modal isOpen={undefined}> </Modal>
    </BaseLayout>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourses();

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  };
}

interface GetStaticPropsContext {
  params: {
    slug: string;
  };
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const { data } = getAllCourses();
  const course = data.filter((c) => c.slug === params.slug)[0];
  return {
    props: {
      course,
    },
  };
}
