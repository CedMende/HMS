import React, { useState } from "react";
import { Clock, Utensils, AlertTriangle, CheckCircle, Filter } from "lucide-react";
import { RequestAlert } from "./RequestAlert";
const mealRequests = [{
  id: 1,
  patientName: "John Smith",
  room: "304A",
  mealType: "Lunch",
  restrictions: ["Diabetic", "Low Sodium"],
  requestTime: "10:30 AM",
  status: "Pending",
  priority: "High"
}, {
  id: 2,
  patientName: "Mary Johnson",
  room: "201B",
  mealType: "Lunch",
  restrictions: ["Gluten Free"],
  requestTime: "10:45 AM",
  status: "In Progress",
  priority: "Normal"
}, {
  id: 3,
  patientName: "Robert Davis",
  room: "105C",
  mealType: "Lunch",
  restrictions: ["Vegetarian", "Nut Allergy"],
  requestTime: "11:00 AM",
  status: "Completed",
  priority: "Normal"
}];
const schedules = [{
  time: "7:00 AM - 8:30 AM",
  meal: "Breakfast",
  completed: 45,
  total: 52
}, {
  time: "12:00 PM - 1:30 PM",
  meal: "Lunch",
  completed: 12,
  total: 48
}, {
  time: "5:30 PM - 7:00 PM",
  meal: "Dinner",
  completed: 0,
  total: 50
}];
export const DietaryPage = () => {
  const [muted, setMuted] = useState(false);
  const [newRequest, setNewRequest] = useState(false);
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Requests</p>
              <p className="text-2xl font-semibold mt-1">24</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <Utensils className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">8 high priority</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Special Diets</p>
              <p className="text-2xl font-semibold mt-1">156</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">
              32 allergies, 124 restrictions
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Meals Served Today</p>
              <p className="text-2xl font-semibold mt-1">284</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">57 special requests</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incoming Requests */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Incoming Requests</h2>
              <div className="flex space-x-2">
                <RequestAlert muted={muted} onToggleMute={() => setMuted(!muted)} newRequest={newRequest} />
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mealRequests.map(request => <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{request.patientName}</p>
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          Room {request.room}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {request.mealType} • Requested at {request.requestTime}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${request.status === "Pending" ? "bg-yellow-100 text-yellow-800" : request.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {request.restrictions.map((restriction, index) => <span key={index} className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-full">
                        {restriction}
                      </span>)}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Today's Schedule</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {schedules.map((schedule, index) => <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{schedule.meal}</p>
                    <Clock className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{schedule.time}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{
                  width: `${schedule.completed / schedule.total * 100}%`
                }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {schedule.completed} of {schedule.total} meals served
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};