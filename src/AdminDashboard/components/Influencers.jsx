/* This is the Influencers component, that shows a list of the influencer profiles. */
import React, { useState } from 'react';
import '../../components/Modal.css'

// Dummy data for influencers
const dummyInfluencers = [
  { id: 1, name: 'Influencer One', email: 'influencer1@example.com', socialMedia: 'Instagram', followers: '100K' },
  { id: 2, name: 'Influencer Two', email: 'influencer2@example.com', socialMedia: 'TikTok', followers: '50K' },
  { id: 3, name: 'Influencer Three', email: 'influencer3@example.com', socialMedia: 'YouTube', followers: '200K' },
];

const Influencers = ({ influencers, rejectBrand }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brandToReject, setBrandToReject] = useState(null);

  const openModal = (influencer) => {
    setBrandToReject(influencer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReject = () => {
    if (brandToReject) {
      rejectBrand(brandToReject.id); // Assuming rejectBrand function takes an ID
      closeModal();
    }
  };

  // Use dummy data if influencers prop is undefined or not provided
  const influencersData = influencers || dummyInfluencers;

  if (!influencers) {
    console.log("Using dummy data for influencers")
  } else {
    console.log("Using data from prop for influencers")
  }




  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Influencers</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Social Media</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Followers</th>
              <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {influencersData.map((influencer) => (
              <tr key={influencer.id}>
                <td className="py-4 px-6 text-sm text-gray-900">{influencer.name}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{influencer.email}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{influencer.socialMedia}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{influencer.followers}</td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  <button onClick={() => openModal(influencer)} className="text-red-600 hover:text-red-800">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reject Brand Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
          <div className='modal'>
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Reject Brand</h3>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to reject this brand?</p>
                </div>
                <div className="modal-footer">
                    <button
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleReject}
                    >
                        Reject
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Influencers;