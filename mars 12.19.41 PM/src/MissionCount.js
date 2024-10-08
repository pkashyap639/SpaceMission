const MissionCount = () => {
    const completedMissions = 10;
    const onGoingMissions = 20;
    const upcomingMissions = 30;
  
    return (
      <div className="flex justify-evenly my-8">
        {/* Completed Missions */}
        <div className="w-60 h-60 bg-pink-600 text-white rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{completedMissions}</h1>
          <p className="text-lg">Completed</p>
        </div>
        
        {/* Ongoing Missions */}
        <div className="w-60 h-60 bg-yellow-600 text-white rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{onGoingMissions}</h1>
          <p className="text-lg">Ongoing</p>
        </div>
        
        {/* Upcoming Missions */}
        <div className="w-60 h-60 bg-blue-600 text-white rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{upcomingMissions}</h1>
          <p className="text-lg">Upcoming</p>
        </div>
      </div>
    );
  };
  
  export default MissionCount;
  