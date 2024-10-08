const express = require("express");
const mongoose = require("mongoose");
const Mission = require("./schema/MissionSchema");
const app = express();
const PORT = 3000;

// connection for mongo db
const MONGODB_URI = `mongodb+srv://pkashyap148:spacemission@spacemission.z4pt6.mongodb.net/?retryWrites=true&w=majority&appName=spacemission`;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Mission List");
});

app.post("/addmission", (req, res) => {
  const mission = new Mission({
    missionName: "Appolo 11",
    launchDate: "1969-07-16T00:00:00Z",
    missionStatus: "completed",
    outcome: {
      outcomeType: "Type 1",
      description: "Mission Description",
      outcomeStatus: "success",
    },
    resources: {
      resourceType: "Type 3",
      allocatedAmount: "2",
      usedAmount: "1",
    },
  })
    .save()
    .then(() => {
      console.log("Mission Addes");
      (err) => {
        console.error(err);
      };
    });
  res.send("Mission Added");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is Successfully Running, 
                   and App is listening on port ${PORT}`);
  else console.log("Error occurred, server can't start", error);
});
