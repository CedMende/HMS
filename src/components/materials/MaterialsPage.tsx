import React from "react";
import { Package, ShoppingCart, AlertTriangle, TrendingUp, Search, Plus, Filter } from "lucide-react";
const inventoryData = [{
  id: 1,
  name: "Surgical Masks",
  category: "PPE",
  batchNo: "SM-2023-001",
  stockLevel: 2450,
  minLevel: 1000,
  expiryDate: "2024-12-31",
  lastUpdated: "2023-10-15",
  status: "Adequate"
}, {
  id: 2,
  name: "Disposable Gloves",
  category: "PPE",
  batchNo: "DG-2023-045",
  stockLevel: 850,
  minLevel: 1000,
  expiryDate: "2024-06-30",
  lastUpdated: "2023-10-14",
  status: "Low Stock"
}, {
  id: 3,
  name: "Antiseptic Solution",
  category: "Medicine",
  batchNo: "AS-2023-089",
  stockLevel: 320,
  minLevel: 200,
  expiryDate: "2024-03-15",
  lastUpdated: "2023-10-13",
  status: "Adequate"
}, {
  id: 4,
  name: "Gauze Rolls",
  category: "Medical Supplies",
  batchNo: "GR-2023-167",
  stockLevel: 145,
  minLevel: 300,
  expiryDate: "2025-01-20",
  lastUpdated: "2023-10-12",
  status: "Critical"
}];
const purchaseOrders = [{
  id: "PO-2023-156",
  supplier: "MedSupply Co.",
  items: "Surgical Masks, Disposable Gloves",
  status: "Pending",
  date: "2023-10-15",
  amount: "$5,460"
}, {
  id: "PO-2023-155",
  supplier: "PharmaCare Ltd.",
  items: "Antiseptic Solution",
  status: "Delivered",
  date: "2023-10-12",
  amount: "$2,340"
}];
export const MaterialsPage = () => {
  return <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Items</p>
              <p className="text-2xl font-semibold mt-1">1,247</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-lg">
              <Package className="h-6 w-6 text-teal-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">86 categories</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <p className="text-2xl font-semibold mt-1">28</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-orange-500">Requires attention</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Orders</p>
              <p className="text-2xl font-semibold mt-1">12</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-500">$24,500 total value</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Consumption</p>
              <p className="text-2xl font-semibold mt-1">$45.8k</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500">+12.3% from last month</span>
          </div>
        </div>
      </div>
      {/* Inventory Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Inventory Status</h2>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="text" placeholder="Search inventory..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Batch No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock Level
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
                {inventoryData.map(item => <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.batchNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.stockLevel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.expiryDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === "Adequate" ? "bg-green-100 text-green-800" : item.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Purchase Orders</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {purchaseOrders.map(order => <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.supplier}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{order.items}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{order.date}</span>
                    <span className="font-medium">{order.amount}</span>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full px-4 py-2 border border-teal-500 text-teal-500 rounded-lg text-sm hover:bg-teal-50">
              View All Orders
            </button>
          </div>
        </div>
      </div>
    </div>;
};