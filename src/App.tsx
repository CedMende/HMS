import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { MaterialsPage } from "./components/materials/MaterialsPage";
import { DietaryPage } from "./components/dietary/DietaryPage";
import { PatientsPage } from "./components/patients/PatientsPage";
import { AppointmentsPage } from "./components/appointments/AppointmentsPage";
import { DoctorsPage } from "./components/doctors/DoctorsPage";
import { PharmacyPage } from "./components/pharmacy/PharmacyPage";
import { LaboratoryPage } from "./components/laboratory/LaboratoryPage";
import { EMRPage } from "./components/emr/EMRPage";
import { ADTPage } from "./components/adt/ADTPage";
import { BillingPage } from "./components/billing/BillingPage";
import { ReportsPage } from "./components/reports/ReportsPage";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
export function App() {
  return <Router>
      <div className="flex w-full h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/dietary" element={<DietaryPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/pharmacy" element={<PharmacyPage />} />
            <Route path="/laboratory" element={<LaboratoryPage />} />
            <Route path="/emr" element={<EMRPage />} />
            <Route path="/adt" element={<ADTPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </div>
      </div>
    </Router>;
}