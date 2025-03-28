export interface Course {
  id: string;
  title: string;
  category: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  rating: number;
}
export interface CourseMetrics {
    totalCourses: number;
    activeCourses: number;
    completedCourses: number;
  }