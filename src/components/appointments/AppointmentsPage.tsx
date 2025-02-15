import React from "react";
import { Calendar, Clock, Users, CheckCircle, Plus, Search } from "lucide-react";
const appointments = [{
  id: 1,
  patientName: "Emma Thompson",
  type: "Follow-up",
  doctor: "Dr. Sarah Wilson",
  department: "Cardiology",
  time: "09:00 AM",
  status: "Confirmed"
}, {
  id: 2,
  patientName: "Michael Chen",
  type: "Initial Consultation",
  doctor: "Dr. James Murphy",
  department: "Neurology",
  time: "10:30 AM",
  status: "In Progress"
}, {
  id: 3,
  patientName: "Sofia Rodriguez",
  type: "Check-up",
  doctor: "Dr. Emily Parker",
  department: "Pediatrics",
  time: "11:45 AM",
  status: "Waiting"
}];
export const AppointmentsPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today's Appointments</p>
              <p className="text-2xl font-semibold mt-1">24</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">4 remaining</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Wait Time</p>
              <p className="text-2xl font-semibold mt-1">12 min</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">-25% from last week</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Completed Today</p>
              <p className="text-2xl font-semibold mt-1">18</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">75% completion rate</span>
          </div>
        </div>
      </div>
      {/* Calendar Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Today's Schedule</h2>
              <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                <Plus className="h-4 w-4 mr-2" />
                New Appointment
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search appointments..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {appointments.map(appointment => <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{appointment.patientName}</p>
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {appointment.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {appointment.doctor} • {appointment.department}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">
                        {appointment.time}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${appointment.status === "Confirmed" ? "bg-green-100 text-green-800" : appointment.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Department Summary</h2>
          <div className="space-y-4">
            {[{
            name: "Cardiology",
            count: 8,
            color: "bg-red-100"
          }, {
            name: "Neurology",
            count: 5,
            color: "bg-blue-100"
          }, {
            name: "Pediatrics",
            count: 6,
            color: "bg-green-100"
          }, {
            name: "Orthopedics",
            count: 3,
            color: "bg-yellow-100"
          }, {
            name: "Dermatology",
            count: 2,
            color: "bg-purple-100"
          }].map((dept, index) => <div key={index} className={`${dept.color} p-4 rounded-lg`}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{dept.name}</span>
                  <span className="text-sm">{dept.count} appointments</span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};