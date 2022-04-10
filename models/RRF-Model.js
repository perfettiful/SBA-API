const { Schema, model, ObjectId } = require('mongoose');

const rrfSchema = new Schema({
  LoanNumber:  String,
  ApprovalDate: Date,
  BusinessName: String,
  BusinessAddress: String,
  BusinessCity: String,
  BusinessState: String,
  BusinessZip: Number,
  GrantAmount: Number,
  RuralUrbanIndicator: String,
  HubzoneIndicator: String,
  CD: String,
  grant_purp_cons_outdoor_seating: String,
  grant_purpose_covered_supplier: String,
  grant_purpose_debt: String,
  grant_purpose_food: String,
  grant_purpose_maintenance_indoor: String,
  grant_purpose_operations: String,
  grant_purpose_payroll: String,
  grant_purpose_rent: String,
  grant_purpose_supplies: String,
  grant_purpose_utility: String,
  LegalOrganizationType: String,
  LMIIndicator: String,
  SocioeconmicIndicator: String,
  VeteranIndicator: String,
  WomenOwnedIndicator: String,
  RestaurantType: String
  },
  { collection : 'restaurant_revitalization_fund' }
);

const RRFModel = model('restaurant_revitalization_fund', rrfSchema);

module.exports = RRFModel;
