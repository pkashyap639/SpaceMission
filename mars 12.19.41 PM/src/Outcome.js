import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
const Outcome = () => {
    const {id} = useParams();
  const [outcomes, setOutcomes] = useState([
    {
      type: "Success",
      description: "Mission completed successfully",
      status: "Complete",
      missionid:111
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Add Outcome Button */}
      <div className="mb-4">
        <Link to={`/newoutcome/${id}`} className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition">
          Add Outcome
        </Link>
      </div>

      {/* Outcomes Table */}
      <table className="table-auto w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Outcome Type</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {outcomes.map((outcome, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2">{outcome.type}</td>
              <td className="px-4 py-2">{outcome.description}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 text-sm font-semibold rounded-full ${
                    outcome.status === "Complete"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {outcome.status}
                </span>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Outcome;
