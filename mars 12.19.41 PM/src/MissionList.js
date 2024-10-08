import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const MissionList = () => {
  const [missions, setMissions] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/missions')
        .then(result => setMissions(result.data))
        .catch(err=> console.log(err))

  },[])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Create Mission Button */}
      <div className="mb-4">
        <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition">
          Create Mission
        </Link>
      </div>

      {/* Mission Table */}
      <table className="table-auto w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Launch Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Manage</th> {/* New Column */}
            <th className="px-4 py-2 text-left">Actions</th> {/* Moved Column */}
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2">{mission.missionName}</td>
              <td className="px-4 py-2">{mission.launchDate}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 text-sm font-semibold rounded-full ${
                    mission.status === "upcoming"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {mission.missionStatus}
                </span>
              </td>
              <td className="px-4 py-2"> {/* Manage Column */}
                <Link to={`/outcome/${mission.id}`} className="mr-2 bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600 transition">
                  Outcomes
                </Link>
                <Link to="/resources" className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600 transition">
                  Resources
                </Link>
              </td>
              <td className="px-4 py-2"> {/* Actions Column */}
                <Link to={`/edit/${mission.id}`} className="mr-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  Edit
                </Link>
                <Link className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
