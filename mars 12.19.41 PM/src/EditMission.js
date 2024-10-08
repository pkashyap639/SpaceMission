import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditMission = ({ missions, setMissions }) => {
  const { id } = useParams(); // Extract mission id from route params
  
  

  


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl mb-4">Edit Mission</h1>
      <form  className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Mission Name</label>
          <input
            type="text"
            name="name"
            // value={}
            // onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Launch Date</label>
          <input
            type="date"
            name="launchdate"
            // value={mission.launchdate}
            // onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            // value={mission.status}
            // onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
          <Link
            to="/"
            className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditMission;
