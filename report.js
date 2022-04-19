const db = require("./config/connection");
const RRFModel = require("./models/RRF-Model");
const fs = require("fs");

db.set("debug", true);

db.once("open", async () => {
  console.log("\n+++ Connected to MongoDB: ", { RRFModel });

  try {
    const results = await RRFModel.aggregate([
      { $match: { FranchiseName: { $exists: true } } },
      {
        $group: {
          _id: "$FranchiseName",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 50,
      },
    ]);

    console.log(results);

    fs.writeFile(
      "./output/franchiseCounts.json",
      JSON.stringify(results),
      function () {
        console.log("\n +++ File exported to output/franchiseCounts.json \n");
      }
    );
  } catch (err) {
    throw err;
  }

  try {
    const results = await RRFModel.aggregate([
      { $match: { FranchiseName: { $exists: true } } },
      {
        $group: {
          _id: { FranchiseName: "$FranchiseName", currency: "$currency" },
          sum: { $sum: "$GrantAmount" },
        },
      },
      {
        $sort: {
          sum: -1,
        },
      },
      {
        $limit: 50,
      },
    ]);

    console.log(results);

    fs.writeFile(
      "./output/grantTotals.json",
      JSON.stringify(results),
      function () {
        console.log("\n +++ File exported to output/grantTotals.json \n");
        process.exit(0);
      }
    );
  } catch (err) {
    throw err;
  }
});
