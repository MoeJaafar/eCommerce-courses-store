import { useAccount, useNetwork } from "@/components/web3/hooks";
import { Course } from "@/content/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CourseCardProps {
  course: Course;
  Footer?: FC<{ canPurchaseCourse: boolean }>;
}

export default function CourseCard({ course, Footer }: CourseCardProps) {
  const { network } = useNetwork();
  const { account } = useAccount();
  const canPurchaseCourse = !!(account.data && network.data.isSupported);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center">
          <Image
            className="object-cover"
            src={course.coverImage}
            width="200"
            height="230"
            alt={course.title}
          />
        </div>
        <div className="p-8 pb-4 flex-1">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {course.type}
          </div>
          <Link legacyBehavior href={`/courses/${course.slug}`}>
            <a className=" h-15 block mt-1 md:text-lg text-sm leading-tight font-medium text-black hover:underline">
              {course.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-500">
            {course.description.substring(0, 70)}...
          </p>
          {Footer && <Footer canPurchaseCourse={canPurchaseCourse} />}
        </div>
      </div>
    </div>
  );
}
