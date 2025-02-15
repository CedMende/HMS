import React from "react";
import { Users, Search, Filter, Plus, Stethoscope, Clock, Award, ClipboardList, Pill, CalendarDays } from "lucide-react";
const doctorsList = [{
  id: 1,
  name: "Dr. Sarah Wilson",
  specialty: "Cardiology",
  patients: 45,
  schedule: "Morning Shift",
  status: "Available",
  rating: 4.8,
  image: "https://i.pravatar.cc/150?img=32"
}, {
  id: 2,
  name: "Dr. James Murphy",
  specialty: "Neurology",
  patients: 38,
  schedule: "Evening Shift",
  status: "In Surgery",
  rating: 4.9,
  image: "https://i.pravatar.cc/150?img=12"
}, {
  id: 3,
  name: "Dr. Emily Parker",
  specialty: "Pediatrics",
  patients: 52,
  schedule: "Morning Shift",
  status: "Available",
  rating: 4.7,
  image: "https://i.pravatar.cc/150?img=23"
}];
const patientSchedule = [{
  id: 1,
  patientName: "Emma Thompson",
  time: "09:30 AM",
  type: "Follow-up",
  condition: "Post-Surgery",
  status: "Scheduled"
}, {
  id: 2,
  patientName: "John Smith",
  time: "10:15 AM",
  type: "Consultation",
  condition: "Cardiac Assessment",
  status: "In Progress"
}, {
  id: 3,
  patientName: "Michael Chen",
  time: "11:00 AM",
  type: "Check-up",
  condition: "Regular Monitoring",
  status: "Pending"
}];
const labRequests = [{
  id: "LAB-001",
  patientName: "Sarah Connor",
  testType: "Blood Work",
  urgency: "High",
  requestedAt: "08:45 AM",
  status: "Pending"
}, {
  id: "LAB-002",
  patientName: "James Wilson",
  testType: "ECG",
  urgency: "Normal",
  requestedAt: "09:15 AM",
  status: "Processing"
}];
const recentDiagnoses = [{
  id: 1,
  patientName: "Robert Davis",
  diagnosis: "Hypertension",
  date: "2023-10-15",
  notes: "Prescribed beta blockers",
  followUp: "2 weeks"
}, {
  id: 2,
  patientName: "Lisa Anderson",
  diagnosis: "Arrhythmia",
  date: "2023-10-14",
  notes: "Referred to specialist",
  followUp: "1 week"
}];
export const DoctorsPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Doctors</p>
              <p className="text-2xl font-semibold mt-1">124</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <Stethoscope className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">12 departments</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">On Duty</p>
              <p className="text-2xl font-semibold mt-1">64</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">8 in surgery</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Specialists</p>
              <p className="text-2xl font-semibold mt-1">86</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">15 departments</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Doctors Directory</h2>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Doctor
                  </button>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input type="text" placeholder="Search doctors..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {doctorsList.map(doctor => <div key={doctor.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center">
                    <img className="h-16 w-16 rounded-full" src={doctor.image} alt={doctor.name} />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">{doctor.name}</h3>
                      <p className="text-sm text-gray-500">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Patients</span>
                      <span className="font-medium">{doctor.patients}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Schedule</span>
                      <span className="font-medium">{doctor.schedule}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rating</span>
                      <span className="font-medium">{doctor.rating}/5.0</span>
                    </div>
                    <div className="pt-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${doctor.status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {doctor.status}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Today's Patient Schedule
                </h2>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  View Full Schedule
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {patientSchedule.map(appointment => <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">
                            {appointment.patientName}
                          </p>
                          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {appointment.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {appointment.condition}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium">
                          {appointment.time}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${appointment.status === "In Progress" ? "bg-blue-100 text-blue-800" : appointment.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Lab Requests</h2>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <div className="h-4 w-4 mr-2" />
                  New Request
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {labRequests.map(request => <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-sm">
                          {request.patientName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {request.testType}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${request.urgency === "High" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"}`}>
                        {request.urgency}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">
                        {request.requestedAt}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${request.status === "Processing" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`}>
                        {request.status}
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Recent Diagnoses</h2>
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <ClipboardList className="h-4 w-4 mr-2" />
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentDiagnoses.map(diagnosis => <div key={diagnosis.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-sm">
                          {diagnosis.patientName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {diagnosis.diagnosis}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {diagnosis.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {diagnosis.notes}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        Follow-up in {diagnosis.followUp}
                      </span>
                      <button className="flex items-center px-2 py-1 text-teal-600 hover:bg-teal-50 rounded">
                        <Pill className="h-4 w-4 mr-1" />
                        Prescribe
                      </button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};