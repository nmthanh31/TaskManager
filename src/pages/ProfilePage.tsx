import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaShareAlt,
  FaSignOutAlt,
  FaCog,
  FaBlog,
  FaCamera,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toast";
import AccountInfo from "../components/Profile/AccountInfoTab";
import { theme } from "../styles/theme";
import ProfileTab from "../components/Profile/ProfileTab";

const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState("account");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "Thành",
    lastName: "Nguyễn Mạnh",
    username: "nmthanh",
    phone: "+1234567890",
    profession: "Software Engineer",
    bio: "",
  });

  const [activeTab, setActiveTab] = useState("profile");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setHasUnsavedChanges(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // toast.success("Profile updated successfully!");
    setHasUnsavedChanges(false);
  };

  const navigationItems = [
    { icon: <FaUser />, text: "Account Information", id: "account" },
    { icon: <FaUser />, text: "Profile Details", id: "profile" },
    { icon: <FaCog />, text: "Settings", id: "settings" },
    { icon: <FaSignOutAlt />, text: "Logout", id: "logout" },
  ];

  return (
    <div
      className={`flex min-h-screen bg-gray-800 justify-center items-start pt-8`}
    >
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-${
          theme.colors.background.paper
        } shadow-lg transition-all duration-300 ${
          theme.borderRadius.medium
        } h-[calc(100vh-4rem)]`}
      >
        <div className="p-4 flex flex-col items-center">
          <div className="relative">
            <img
              src="/public/images/user.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition-colors">
              <FaCamera />
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-white">
            Hello, {formData.firstName}
          </h2>
        </div>

        <nav className="mt-8 px-2">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`w-full p-4 flex items-center ${
                theme.borderRadius.medium
              } mb-2 transition-all duration-200 ${
                item.id === selectedSection
                  ? `bg-gray-900 text-${theme.colors.text.light}`
                  : `text-${theme.colors.text.secondary} hover:cursor-pointer hover:bg-gray-700`
              }`}
              onClick={() => {
                setSelectedSection(item.id);
                if (item.id === "logout") {
                  toast.success("Logged out successfully!");
                }
              }}
            >
              <span className="mr-4">{item.icon}</span>
              {sidebarOpen && <span>{item.text}</span>}
            </button>
          ))}
        </nav>
      </div>

      <div
        className={`flex-1 p-8 max-w-4xl bg-${theme.colors.background.paper} ${theme.borderRadius.medium} h-[calc(100vh-4rem)] overflow-y-auto`}
      >
        {(() => {
          switch (selectedSection) {
            case "account":
              return AccountInfo();
            case "profile":
              return ProfileTab();
            case "settings":
              return (
                <div className="flex-1 p-8 max-w-4xl bg-gray-900 rounded-r-lg h-[calc(100vh-4rem)] overflow-y-auto">
                  <div className="bg-gray-900 rounded-lg">
                    <div className="flex gap-4 mb-6 border-b pb-4">
                      {["Profile", "Password"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab.toLowerCase())}
                          className={`px-4 py-2 rounded-full transition-all duration-200 ${
                            activeTab === tab.toLowerCase()
                              ? "bg-gray-800 text-white"
                              : "bg-gray-300 hover:bg-gray-500"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {activeTab === "profile" && (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="relative h-64 rounded-lg overflow-hidden bg-black">
                            <div className="absolute inset-0 bg-white-900 bg-opacity-50 flex items-center justify-center">
                              <span className="text-white text-2xl font-bold">
                                E-LEARNING
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-white">
                                First Name
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                value={""}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white">
                                Last Name
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                value={""}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white">
                              Username
                            </label>
                            <input
                              type="text"
                              name="username"
                              value={""}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={""}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              pattern="[+][0-9]{10,}"
                            />
                          </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                          <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded-md text-white rounded-md hover:bg-gray-50 hover:text-black"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    )}
                    {activeTab === "password" && (
                      <form onSubmit={() => {}} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-white">
                              Current Password
                            </label>
                            <input
                              type="password"
                              name="currentPassword"
                              value={""}
                              onChange={() => {}}
                              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white">
                              New Password
                            </label>
                            <input
                              type="password"
                              name="newPassword"
                              value={""}
                              onChange={() => {}}
                              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              name="confirmNewPassword"
                              value={""}
                              onChange={() => {}}
                              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                          <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 text-white rounded-md hover:bg-gray-50 hover:text-black"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          >
                            Change Password
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })()}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
