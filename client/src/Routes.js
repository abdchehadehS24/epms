import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AssessmentsTable from "./components/assessment";
import SignIn from "./pages/signIn";
import HomePage from "./pages/homepage";
import Profile from "./components/profile";
import UsersTabel from "./components/users";
import TicketsTable from "./components/tickets";
import AdminDashboard from "./pages/adminDashboard";
import UserDashboard from "./pages/userDashboard";
// import PrivateRoute from "./auth/privateRoute";
// import AdminRoute from "./auth/adminRoute";
import PersistentDrawerLeft from "./components/sidebar";
import CustomizedTimeline from "./components/timeline";
import CreateUserGroup from "./components/userGroup";
import CreatePatient from "./components/patient";
import CreateAssessmentType from "./components/assessmentType";
import CreateAssessment from "./components/assessment";
const Routes = () => {
  return (
    <BrowserRouter>
      <PersistentDrawerLeft />
      <Switch>
        <Route path="/" exact default component={HomePage} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/timeline" exact component={CustomizedTimeline} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/user/create" exact component={AssessmentsTable} />
        <Route path="/user_group/create" exact component={CreateUserGroup} />
        <Route path="/patients" exact component={CreatePatient} />
        <Route
          path="/create/assessments-type"
          exact
          component={CreateAssessmentType}
        />
        <Route path="/create/assessments" exact component={CreateAssessment} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/admin/users" exact component={UsersTabel} />
        <Route path="/admin/tickets" exact component={TicketsTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
