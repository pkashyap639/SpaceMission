import { Link } from "react-router-dom";

const CreateMission = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Create Mission</h1>
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mission Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter mission name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Launch Date</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select status</option>
              <option value="complete">Complete</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
            </select>
          </div>
          <Link
            to="#"
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 text-center"
          >
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateMission;
