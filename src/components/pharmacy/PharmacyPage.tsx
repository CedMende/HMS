import React from "react";
import { Search, Filter, Plus, AlertTriangle, ClipboardCheck, Package } from "lucide-react";
const medicationList = [{
  id: 1,
  name: "Amoxicillin",
  category: "Antibiotic",
  dosage: "500mg",
  stock: 2450,
  minLevel: 1000,
  expiryDate: "2024-12-31",
  manufacturer: "PharmaCorp",
  status: "In Stock"
}, {
  id: 2,
  name: "Lisinopril",
  category: "ACE Inhibitor",
  dosage: "10mg",
  stock: 850,
  minLevel: 1000,
  expiryDate: "2024-06-30",
  manufacturer: "MediPharm",
  status: "Low Stock"
}, {
  id: 3,
  name: "Metformin",
  category: "Antidiabetic",
  dosage: "850mg",
  stock: 320,
  minLevel: 500,
  expiryDate: "2024-08-15",
  manufacturer: "HealthCare Ltd",
  status: "Low Stock"
}];
const prescriptionRequests = [{
  id: "RX-2023-001",
  patientName: "John Smith",
  medication: "Amoxicillin 500mg",
  doctor: "Dr. Sarah Wilson",
  status: "Pending",
  requestTime: "10:30 AM"
}, {
  id: "RX-2023-002",
  patientName: "Emma Thompson",
  medication: "Lisinopril 10mg",
  doctor: "Dr. James Murphy",
  status: "Processing",
  requestTime: "11:15 AM"
}];
export const PharmacyPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Medications</p>
              <p className="text-2xl font-semibold mt-1">1,247</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <div className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">45 categories</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Prescriptions</p>
              <p className="text-2xl font-semibold mt-1">28</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <ClipboardCheck className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">12 urgent requests</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Alerts</p>
              <p className="text-2xl font-semibold mt-1">15</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-orange-500">Requires reorder</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Medication Inventory */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Medication Inventory</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medication
                </button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search medications..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicationList.map(medication => <tr key={medication.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {medication.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {medication.dosage}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {medication.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {medication.stock} units
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {medication.expiryDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${medication.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {medication.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        {/* Prescription Requests */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Prescriptions</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {prescriptionRequests.map(prescription => <div key={prescription.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{prescription.id}</p>
                      <p className="text-sm text-gray-500">
                        {prescription.patientName}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${prescription.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                      {prescription.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {prescription.medication}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      Dr. {prescription.doctor}
                    </span>
                    <span className="text-gray-500">
                      {prescription.requestTime}
                    </span>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-teal-500 text-teal-500 rounded-lg text-sm hover:bg-teal-50">
              View All Prescriptions
            </button>
          </div>
        </div>
      </div>
    </div>;
};