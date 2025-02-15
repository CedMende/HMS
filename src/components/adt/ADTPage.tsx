import React from "react";
import { BedDouble, Users, ArrowRight, Clock, Search, Filter, Plus } from "lucide-react";
const bedStatus = [{
  id: 1,
  patientName: "John Smith",
  roomNumber: "201A",
  bedNumber: "1",
  admissionDate: "2023-10-12",
  status: "Occupied",
  department: "General Medicine",
  expectedDischarge: "2023-10-18"
}, {
  id: 2,
  roomNumber: "201B",
  bedNumber: "2",
  status: "Available",
  department: "General Medicine"
}, {
  id: 3,
  patientName: "Emma Thompson",
  roomNumber: "202A",
  bedNumber: "1",
  admissionDate: "2023-10-14",
  status: "Occupied",
  department: "Surgery",
  expectedDischarge: "2023-10-20"
}];
const recentActivity = [{
  id: 1,
  type: "Admission",
  patientName: "Michael Chen",
  roomNumber: "303",
  time: "10:30 AM",
  doctor: "Dr. Sarah Wilson"
}, {
  id: 2,
  type: "Discharge",
  patientName: "Lisa Anderson",
  roomNumber: "105",
  time: "09:45 AM",
  doctor: "Dr. James Murphy"
}, {
  id: 3,
  type: "Transfer",
  patientName: "Robert Davis",
  fromRoom: "202",
  toRoom: "305",
  time: "09:15 AM",
  doctor: "Dr. Emily Parker"
}];
export const ADTPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Beds</p>
              <p className="text-2xl font-semibold mt-1">200</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <BedDouble className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">85% occupancy rate</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today's Admissions</p>
              <p className="text-2xl font-semibold mt-1">24</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <ArrowRight className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">8 pending</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Expected Discharges</p>
              <p className="text-2xl font-semibold mt-1">18</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Today</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bed Status */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Bed Status</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-2" />
                  New Admission
                </button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search beds..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {bedStatus.map(bed => <div key={bed.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">
                          Room {bed.roomNumber}
                        </span>
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          Bed {bed.bedNumber}
                        </span>
                      </div>
                      {bed.patientName && <p className="text-sm text-gray-500 mt-1">
                          Patient: {bed.patientName}
                        </p>}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${bed.status === "Available" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                      {bed.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Department: {bed.department}</p>
                    {bed.admissionDate && <p>Admission Date: {bed.admissionDate}</p>}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map(activity => <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">
                        {activity.patientName}
                      </p>
                      <p className="text-xs text-gray-500">{activity.doctor}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${activity.type === "Admission" ? "bg-green-100 text-green-800" : activity.type === "Discharge" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {activity.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      {activity.type === "Transfer" ? `Room ${activity.fromRoom} → ${activity.toRoom}` : `Room ${activity.roomNumber}`}
                    </span>
                    <span className="text-gray-500">{activity.time}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};