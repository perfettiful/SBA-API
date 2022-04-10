const db = require('./config/connection');
const RRFModel = require('./models/RRF-Model')

db.set('debug', true);

db.once('open', async () => {
  console.log("+++ Connected to MongoDB:\n ", RRFModel);

  try {
    //const results = await RRFModel.findById('622c1d5a65098fd13496f01f').exec();

    // const newRecord = new RRFModel({
    //   "LoanNumber": "1036439102",
    //   "ApprovalDate": '2021-06-17T05:00:00.000+00:00',
    //   "BusinessName": "Champs Diner", "BusinessAddress":
    //   "197 Meserole Street", "BusinessCity": "Brooklyn",
    //   "BusinessState": "NY",
    //   "BusinessZip": 1120,
    //   "GrantAmount": 1766654.57,
    //   "RuralUrbanIndicator": "U",
    //   "HubzoneIndicator": "Y", "CD": "NY-07",
    //   "grant_purp_cons_outdoor_seating": "N",
    //   "grant_purpose_covered_supplier": "N",
    //   "grant_purpose_debt": "N", "grant_purpose_food": "N",
    //   "grant_purpose_maintenance_indoor": "Y",
    //   "grant_purpose_operations": "N", "grant_purpose_payroll": "Y",
    //   "grant_purpose_rent": "Y", "grant_purpose_supplies": "Y",
    //   "grant_purpose_utility": "N",
    //   "LegalOrganizationType": "Subchapter S Corporation", "LMIIndicator": "Y",
    //    "SocioeconmicIndicator": "N", "VeteranIndicator": "N", 
    //    "WomenOwnedIndicator": "N", "RestaurantType": "Restaurant"
    // })

    // await newRecord.save();

    
    const results = await RRFModel
    .find(
      // {}
      ).limit(2).exec();

    console.log(results);

  } catch (err) {
    throw err;
  }
});
