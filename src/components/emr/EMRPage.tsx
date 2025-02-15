import React from "react";
import { Search, Filter, ClipboardList, FileText, Clock, AlertCircle, Download } from "lucide-react";
const recentRecords = [{
  id: "REC-2023-001",
  patientName: "John Smith",
  recordType: "Progress Notes",
  department: "Cardiology",
  updatedBy: "Dr. Sarah Wilson",
  updatedAt: "10:30 AM",
  status: "Updated"
}, {
  id: "REC-2023-002",
  patientName: "Emma Thompson",
  recordType: "Lab Results",
  department: "Internal Medicine",
  updatedBy: "Dr. James Murphy",
  updatedAt: "09:45 AM",
  status: "New"
}, {
  id: "REC-2023-003",
  patientName: "Michael Chen",
  recordType: "Radiology Report",
  department: "Radiology",
  updatedBy: "Dr. Emily Parker",
  updatedAt: "09:15 AM",
  status: "Critical"
}];
const documents = [{
  id: 1,
  name: "Admission Report",
  type: "PDF",
  size: "2.4 MB",
  updatedAt: "2023-10-15"
}, {
  id: 2,
  name: "Surgery Notes",
  type: "DOC",
  size: "1.8 MB",
  updatedAt: "2023-10-14"
}, {
  id: 3,
  name: "Discharge Summary",
  type: "PDF",
  size: "3.2 MB",
  updatedAt: "2023-10-13"
}];
export const EMRPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Records</p>
              <p className="text-2xl font-semibold mt-1">1,247</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <ClipboardList className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">145 updated today</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Recent Updates</p>
              <p className="text-2xl font-semibold mt-1">28</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Last hour</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Reviews</p>
              <p className="text-2xl font-semibold mt-1">12</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertCircle className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-orange-500">4 urgent reviews</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Records */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Medical Records</h2>
              <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search records..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentRecords.map(record => <div key={record.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{record.patientName}</p>
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full ${record.status === "Critical" ? "bg-red-100 text-red-800" : record.status === "New" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                          {record.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {record.recordType}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">{record.department}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>Updated by: {record.updatedBy}</div>
                    <div>{record.updatedAt}</div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Documents */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Documents</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {documents.map(doc => <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded">
                      <FileText className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-gray-500">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="h-4 w-4 text-gray-600" />
                  </button>
                </div>)}
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-teal-500 text-teal-500 rounded-lg text-sm hover:bg-teal-50">
              View All Documents
            </button>
          </div>
        </div>
      </div>
    </div>;
};