export interface Course {
  id: string;
  type: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  link: string;
  slug: string;
  wsl: string[];
}

export interface CourseWithIndex extends Course {
  index: number;
}

export interface CourseMap {
  [key: string]: CourseWithIndex;
}
