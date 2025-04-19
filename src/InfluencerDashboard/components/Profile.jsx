import React, { useState } from 'react';

const Profile = () => {
  const categories = [
    "Fashion & Style",
    "Beauty & Makeup",
    "Travel & Adventure",
    "Fitness & Health",
    "Food & Cooking",
    "Technology & Gadgets",
    "Gaming",
    "Education & Learning",
    "Entertainment & Comedy", "Business & Entrepreneurship", "Lifestyle", "Other"];
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    pincode: '123456',
    contentCategory: 'Travel',
    phoneNumber: '9876543210',
  });

  const [editData, setEditData] = useState({ ...profileData });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateClick = () => {
    console.log('Updated Profile Data:', editData);
    setProfileData(editData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Profile Information</h2>

      {isEditing ? (
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input type="text" id="name" name="name" value={editData.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label htmlFor="pincode" className="block text-gray-700 text-sm font-bold mb-2">
              Pincode:
            </label>
            <input type="text" id="pincode" name="pincode" value={editData.pincode} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label htmlFor="contentCategory" className="block text-gray-700 text-sm font-bold mb-2">
              Content Category:
            </label>
            <select id="contentCategory" name="contentCategory" value={editData.contentCategory} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number:
            </label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={editData.phoneNumber} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <button onClick={handleUpdateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Update
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <p><strong>Name:</strong> {profileData.name}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <p><strong>Pincode:</strong> {profileData.pincode}</p>
          </div><div className="bg-gray-100 rounded-lg p-4 mb-4">
            <p><strong>Content Category:</strong> {profileData.contentCategory}</p>
          </div><div className="bg-gray-100 rounded-lg p-4 mb-4">
            <p><strong>Phone Number:</strong> {profileData.phoneNumber}</p>
          </div>

          <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;