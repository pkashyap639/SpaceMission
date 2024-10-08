import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMission = () => {
  const [missionName, setMissionName] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [missionStatus, setMissionStatus] = useState("");
  const [outcome, setOutcome] = useState("")
  const [resource, setResource] = useState("")
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log(e.target);
    
    axios.post("http://localhost:3000/missions", { missionName, launchDate, missionStatus, outcome, resource })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create Mission</h1>
        <form className="flex flex-col space-y-4" onSubmit={Submit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mission Name</label>
            <input
              type="text"
              value={missionName}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter mission name"
              onChange={(e) => setMissionName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Launch Date</label>
            <input
              type="date"
              value={launchDate}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              onChange={(e) => setLaunchDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={missionStatus}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              onChange={(e) => setMissionStatus(e.target.value)}
              required
            >
              <option value="">Select status</option>
              <option value="complete">Complete</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMission;
