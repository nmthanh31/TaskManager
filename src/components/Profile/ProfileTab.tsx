import { FaBriefcase, FaCalendar, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";


const ProfileTab = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            Personal Details
          </h2>

          <div className="flex items-center">
            <FaUser className="text-white mr-3" />
            <div>
              <p className="text-sm text-white">Full Name</p>
              <p className="text-white">Nguyễn Mạnh Thành</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-white mr-3" />
            <div>
              <p className="text-sm text-white">Email</p>
              <p className="text-white">nmthanh3107.03@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-white mr-3" />
            <div>
              <p className="text-sm text-white">Phone Number</p>
              <p className="text-white">0359113298</p>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">
            Account Details
          </h2>

          <div className="flex items-center">
            <FaUser className="text-white mr-3" />
            <div>
              <p className="text-sm text-white">Username</p>
              <p className="text-white">nmthanh</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaBriefcase className="text-white mr-3" />
            <div>
              <p className="text-sm text-white">Profession</p>
              <p className="text-white">DevOps Engineer</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaCalendar className="text-white mr-3" />
            <div>
              <p className="text-sm text-white">Registration Date</p>
              <p className="text-white">
                {new Date('2024-01-01').toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileTab;