import React from "react";
import { FileSpreadsheet, Download, LineChart, Search, Filter, Plus, FileText } from "lucide-react";
const reports = [{
  id: "REP-2023-001",
  name: "Monthly Patient Statistics",
  type: "Analytics",
  generatedBy: "Dr. Sarah Wilson",
  date: "2023-10-15",
  status: "Ready",
  size: "2.4 MB"
}, {
  id: "REP-2023-002",
  name: "Department Performance",
  type: "Performance",
  generatedBy: "System Admin",
  date: "2023-10-14",
  status: "Processing",
  size: "1.8 MB"
}, {
  id: "REP-2023-003",
  name: "Financial Summary Q3",
  type: "Financial",
  generatedBy: "Finance Dept",
  date: "2023-10-13",
  status: "Ready",
  size: "3.2 MB"
}];
const scheduledReports = [{
  id: 1,
  name: "Daily Patient Census",
  frequency: "Daily",
  nextRun: "Tomorrow, 6:00 AM",
  recipients: 5
}, {
  id: 2,
  name: "Weekly Revenue Report",
  frequency: "Weekly",
  nextRun: "Monday, 8:00 AM",
  recipients: 8
}];
export const ReportsPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available Reports</p>
              <p className="text-2xl font-semibold mt-1">124</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <FileSpreadsheet className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">12 categories</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Generated Today</p>
              <p className="text-2xl font-semibold mt-1">28</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <LineChart className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">5 in progress</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Scheduled Reports</p>
              <p className="text-2xl font-semibold mt-1">15</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">Next run in 6h</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reports List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Reports</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Generate Report
                </button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search reports..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {reports.map(report => <div key={report.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{report.name}</p>
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {report.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {report.id} • {report.size}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Download className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>Generated by: {report.generatedBy}</div>
                    <div>{report.date}</div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Scheduled Reports */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Scheduled Reports</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {scheduledReports.map(report => <div key={report.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{report.name}</p>
                      <p className="text-xs text-gray-500">
                        {report.frequency}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {report.recipients} recipients
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      Next run: {report.nextRun}
                    </p>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-teal-500 text-teal-500 rounded-lg text-sm hover:bg-teal-50">
              View All Schedules
            </button>
          </div>
        </div>
      </div>
    </div>;
};