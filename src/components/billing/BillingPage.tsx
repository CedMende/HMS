import React from "react";
import { DollarSign, CreditCard, Receipt, Search, Filter, Plus, FileText } from "lucide-react";
const invoices = [{
  id: "INV-2023-001",
  patientName: "John Smith",
  amount: 1250.0,
  status: "Pending",
  dueDate: "2023-10-25",
  insurance: "Blue Cross",
  type: "Medical Service"
}, {
  id: "INV-2023-002",
  patientName: "Emma Thompson",
  amount: 3450.0,
  status: "Paid",
  dueDate: "2023-10-20",
  insurance: "Aetna",
  type: "Surgery"
}, {
  id: "INV-2023-003",
  patientName: "Michael Chen",
  amount: 850.0,
  status: "Overdue",
  dueDate: "2023-10-15",
  insurance: "Medicare",
  type: "Consultation"
}];
const recentPayments = [{
  id: 1,
  patientName: "Sarah Connor",
  amount: 750.0,
  method: "Credit Card",
  date: "2023-10-15",
  status: "Completed"
}, {
  id: 2,
  patientName: "James Wilson",
  amount: 1200.0,
  method: "Insurance",
  date: "2023-10-14",
  status: "Processing"
}];
export const BillingPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-2xl font-semibold mt-1">$45,250</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500">+12% from last month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Payments</p>
              <p className="text-2xl font-semibold mt-1">$12,450</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Receipt className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-orange-500">15 invoices pending</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Insurance Claims</p>
              <p className="text-2xl font-semibold mt-1">28</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">12 in process</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Invoices */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Invoices</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-2" />
                  New Invoice
                </button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search invoices..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {invoices.map(invoice => <div key={invoice.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{invoice.patientName}</p>
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {invoice.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{invoice.id}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${invoice.status === "Paid" ? "bg-green-100 text-green-800" : invoice.status === "Overdue" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {invoice.status}
                    </span>
                  </div>
                  <div className="mt-3 flex justify-between items-center text-sm">
                    <div className="text-gray-500">
                      Insurance: {invoice.insurance}
                    </div>
                    <div className="font-medium">
                      ${invoice.amount.toFixed(2)}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Recent Payments */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Payments</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentPayments.map(payment => <div key={payment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">
                        {payment.patientName}
                      </p>
                      <p className="text-xs text-gray-500">{payment.method}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${payment.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                      {payment.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{payment.date}</span>
                    <span className="font-medium">
                      ${payment.amount.toFixed(2)}
                    </span>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-teal-500 text-teal-500 rounded-lg text-sm hover:bg-teal-50">
              View All Payments
            </button>
          </div>
        </div>
      </div>
    </div>;
};