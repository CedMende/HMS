import React from "react";
import { LayoutDashboard, Users, CalendarDays, Settings, FileText, PlusSquare, LogOut, Package, Utensils, ClipboardList, BedDouble, CreditCard, FileSpreadsheet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const location = useLocation();
  const navigationLinks = [{
    path: "/",
    icon: <LayoutDashboard className="h-5 w-5 mr-3" />,
    label: "Dashboard"
  }, {
    path: "/patients",
    icon: <Users className="h-5 w-5 mr-3" />,
    label: "Patients"
  }, {
    path: "/appointments",
    icon: <CalendarDays className="h-5 w-5 mr-3" />,
    label: "Appointments"
  }, {
    path: "/doctors",
    icon: <PlusSquare className="h-5 w-5 mr-3" />,
    label: "Doctors"
  }, {
    path: "/pharmacy",
    icon: <div className="h-5 w-5 mr-3" />,
    label: "Pharmacy"
  }, {
    path: "/materials",
    icon: <Package className="h-5 w-5 mr-3" />,
    label: "Materials"
  }, {
    path: "/dietary",
    icon: <Utensils className="h-5 w-5 mr-3" />,
    label: "Dietary"
  }, {
    path: "/laboratory",
    icon: <div className="h-5 w-5 mr-3" />,
    label: "Laboratory"
  }, {
    path: "/emr",
    icon: <ClipboardList className="h-5 w-5 mr-3" />,
    label: "EMR"
  }, {
    path: "/adt",
    icon: <BedDouble className="h-5 w-5 mr-3" />,
    label: "ADT"
  }, {
    path: "/billing",
    icon: <CreditCard className="h-5 w-5 mr-3" />,
    label: "Billing"
  }, {
    path: "/reports",
    icon: <FileSpreadsheet className="h-5 w-5 mr-3" />,
    label: "Reports"
  }];
  return <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-teal-600 text-xl font-semibold">MediCare Plus</h1>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {navigationLinks.map(link => <Link key={link.path} to={link.path} className={`flex items-center px-4 py-3 rounded-lg ${location.pathname === link.path ? "text-teal-600 bg-teal-50" : "text-gray-600 hover:bg-gray-50"}`}>
              {link.icon}
              {link.label}
            </Link>)}
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Settings className="h-5 w-5 mr-3" />
          Settings
        </a>
        <a href="#" className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </a>
      </div>
    </div>;
};