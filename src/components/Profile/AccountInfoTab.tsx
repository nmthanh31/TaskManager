import { FaBook, FaCheckCircle, FaClock } from 'react-icons/fa';
import { Course, CourseMetrics } from '../../interfaces/Course';
import CourseCard from './CourseCard';

const AccountInfo = () => {
  const userMetrics: CourseMetrics = {
    totalCourses: 5,
    activeCourses: 2,
    completedCourses: 3,
  };

  const courses: Course[] = [
    {
      id: "1",
      title: "DevOps on AWS – Beginner Level",
      category: "DevOps",
      progress: 0,
      totalLessons: 71,
      completedLessons: 0,
      rating: 4.5,
    },
    {
      id: "2",
      title: "DevOps for Freshers",
      category: "DevOps",
      progress: 65,
      totalLessons: 71,
      completedLessons: 46,
      rating: 4.8,
    },
  ];


  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* User Greeting */}
        <div className="flex items-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Thông tin tài khoản
          </h1>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Courses</p>
                <h3 className="text-3xl font-bold">
                  {userMetrics.totalCourses}
                </h3>
              </div>
              <FaBook className="text-4xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Active Courses</p>
                <h3 className="text-3xl font-bold">
                  {userMetrics.activeCourses}
                </h3>
              </div>
              <FaClock className="text-4xl opacity-80" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Completed Courses</p>
                <h3 className="text-3xl font-bold">
                  {userMetrics.completedCourses}
                </h3>
              </div>
              <FaCheckCircle className="text-4xl opacity-80" />
            </div>
          </div>
        </div>

        {/* Ongoing Courses */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Ongoing Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
