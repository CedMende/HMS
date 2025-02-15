import React from "react";
import { Search, Filter, Plus, Clock, AlertCircle, FileCheck } from "lucide-react";
const testRequests = [{
  id: "LAB-2023-001",
  patientName: "John Smith",
  testType: "Blood Chemistry",
  requestedBy: "Dr. Sarah Wilson",
  priority: "Urgent",
  status: "Processing",
  collectedAt: "09:30 AM",
  expectedAt: "11:30 AM"
}, {
  id: "RAD-2023-045",
  patientName: "Emma Thompson",
  testType: "Chest X-Ray",
  requestedBy: "Dr. James Murphy",
  priority: "Routine",
  status: "Completed",
  collectedAt: "08:45 AM",
  expectedAt: "10:45 AM"
}, {
  id: "LAB-2023-002",
  patientName: "Michael Chen",
  testType: "Complete Blood Count",
  requestedBy: "Dr. Emily Parker",
  priority: "STAT",
  status: "Pending",
  collectedAt: "10:15 AM",
  expectedAt: "11:15 AM"
}];
const recentResults = [{
  id: "RES-2023-156",
  patientName: "Sarah Connor",
  testType: "MRI Scan",
  result: "Abnormal",
  reviewedBy: "Dr. Miles Dyson",
  completedAt: "09:15 AM"
}, {
  id: "RES-2023-157",
  patientName: "Kyle Reese",
  testType: "Blood Culture",
  result: "Normal",
  reviewedBy: "Dr. Peter Silberman",
  completedAt: "09:30 AM"
}];
export const LaboratoryPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Tests</p>
              <p className="text-2xl font-semibold mt-1">24</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <div className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">8 urgent requests</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <p className="text-2xl font-semibold mt-1">12</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Est. completion: 45 mins</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Completed Today</p>
              <p className="text-2xl font-semibold mt-1">45</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <FileCheck className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">92% on-time completion</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Test Requests */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Test Requests</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-2" />
                  New Request
                </button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search tests..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {testRequests.map(request => <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{request.patientName}</p>
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${request.priority === "STAT" ? "bg-red-100 text-red-800" : request.priority === "Urgent" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`}>
                          {request.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {request.testType}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${request.status === "Completed" ? "bg-green-100 text-green-800" : request.status === "Processing" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>Requested by: {request.requestedBy}</div>
                    <div>Expected: {request.expectedAt}</div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Recent Results */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Results</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentResults.map(result => <div key={result.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">
                        {result.patientName}
                      </p>
                      <p className="text-sm text-gray-500">{result.testType}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${result.result === "Normal" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {result.result}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{result.reviewedBy}</span>
                    <span className="text-gray-500">{result.completedAt}</span>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-teal-500 text-teal-500 rounded-lg text-sm hover:bg-teal-50">
              View All Results
            </button>
          </div>
        </div>
      </div>
    </div>;
};