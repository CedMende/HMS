import React from "react";
import { Users, Clock, CalendarCheck, TrendingUp, BedDouble } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
const occupancyData = [{
  name: "Mon",
  value: 75
}, {
  name: "Tue",
  value: 82
}, {
  name: "Wed",
  value: 68
}, {
  name: "Thu",
  value: 78
}, {
  name: "Fri",
  value: 85
}, {
  name: "Sat",
  value: 72
}, {
  name: "Sun",
  value: 65
}];
export const Dashboard = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Patients</p>
              <p className="text-2xl font-semibold mt-1">1,482</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">+8.1%</span>
            <span className="text-gray-500 ml-2">From last month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Bed Occupancy</p>
              <p className="text-2xl font-semibold mt-1">78%</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <BedDouble className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">164 beds occupied</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Wait Time</p>
              <p className="text-2xl font-semibold mt-1">18 min</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">-12%</span>
            <span className="text-gray-500 ml-2">From last week</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Appointments Today</p>
              <p className="text-2xl font-semibold mt-1">24</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <CalendarCheck className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">8 completed</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Weekly Bed Occupancy</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#0d9488" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Patients</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <img src={`https://i.pravatar.cc/40?img=${i}`} alt="Patient" className="h-10 w-10 rounded-full" />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Patient Name {i}</p>
                    <p className="text-xs text-gray-500">Admitted: 2h ago</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                  Stable
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};