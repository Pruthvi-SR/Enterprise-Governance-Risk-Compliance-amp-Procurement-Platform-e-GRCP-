import { combineReducers } from "@reduxjs/toolkit";

import auth from "../features/auth/authSlice";
import dashboard from "../features/dashboard/dashboardSlice";
import procurement from "../features/procurement/procurementSlice";
import vendor from "../features/vendor/vendorSlice";
import risk from "../features/risk/riskSlice";
import compliance from "../features/compliance/complianceSlice";
import audit from "../features/audit/auditSlice";
import reports from "../features/reports/reportSlice";
import notifications from "../features/notifications/notificationSlice";
import settings from "../features/settings/settingsSlice";

export default combineReducers({
auth,
dashboard,
procurement,
vendor,
risk,
compliance,
audit,
reports,
notifications,
settings,
});