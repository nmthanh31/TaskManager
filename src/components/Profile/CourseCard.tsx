import { Course } from "../../interfaces/Course";

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 text-white">
      <div className="mb-4">
        <span className="text-sm bg-indigo-600 rounded-full px-3 py-1">
          {course.category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="flex-1">
            <div className="h-2 bg-gray-600 rounded-full">
              <div
                className="h-2 bg-indigo-600 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
          <span className="ml-4 text-sm">{course.progress}%</span>
        </div>
        <p className="text-sm text-gray-300">
          {course.completedLessons} out of {course.totalLessons} lessons completed
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm">{course.rating.toFixed(1)}</span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 rounded-full transition-colors">
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;