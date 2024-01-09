import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Landings from './component/Landings/Landings';
import Login from './component/Login/Login';
import DoctorAccount from './component/Manager/DoctorAccount';
import NurseAccount from './component/Manager/NurseAccount';
import SignUp from './component/SignUp/SignUp';
import PatientProfile from './component/Patient/PatientProfile';
import NurseProfile from './component/Nurse/NurseProfile';
import NursePatientList from './component/Nurse/NursePatientList';

import PatientHistory from './component/Patient/PatientHistory'
import PatientAppointment from './component/Patient/PatientAppointment'

import DoctorProfile from './component/Doctor/DoctorProfile';
import DoctorWaitingList from './component/Doctor/DoctorWaitingList';
import ManagerDrug from './component/Manager/ManagerDrug';
import ManagerEquipment from './component/Manager/ManagerEquipment';
import ManagerDepartment from './component/Manager/ManagerDepartment';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landings} />
        <Route exact path="/login" component={Login} />
        {/* patient */}
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/patient/get_profile" component={PatientProfile} />
        <Route exact path="/patient/get_history" component={PatientHistory} />
        <Route exact path="/patient/make_appointment" component={PatientAppointment
        } />

        {/* doctor */}
        <Route exact path="/doctor/get_profile" component={DoctorProfile} />
        <Route exact path="/doctor/waiting_list" component={DoctorWaitingList} />

        {/* nurse  */}
        <Route exact path="/nurse/get_profile" component={NurseProfile} />
        <Route exact path="/nurse/patient_list" component={NursePatientList} />

        {/* manager */}
        <Route exact path="/manager/doctor_account" component={DoctorAccount} />
        <Route exact path="/manager/nurse_account" component={NurseAccount} />
        <Route exact path="/manager/drug" component={ManagerDrug} />
        <Route exact path="/manager/equipment" component={ManagerEquipment} />
        <Route exact path="/manager/department" component={ManagerDepartment} />


      </Router>
    </div>
  );
}
export default App;
