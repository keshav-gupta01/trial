import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  Rocket,
  History,
  Activity,
  Wallet,
  Bell,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, href: "/overview", color: "#8B5CF6" },
  { name: "Launch Campaign", icon: Rocket, href: "/launch", color: "#10B981" },
  { name: "Previous Campaigns", icon: History, href: "/previous", color: "#3B82F6" },
  { name: "Analytics", icon: Activity, href: "/analytics", color: "#6EE7B7" },
  { name: "Wallet", icon: Wallet, href: "/wallet", color: "#6366F1" },
];

const icons = {
  notification: <Bell size={20} color="#F59E0B" />,
  profile: <User size={20} color="#3B82F6" />,
  settings: <Settings size={20} color="#6EE7B7" />,
  logout: <LogOut size={20} color="#DC2626" />,
};

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleItemClick = (name) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, '-');
    setActiveTab(formattedName);
  };

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-blue-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-blue-700 transition-colors max-w-fit"
        >
          <Menu size={24} color="white" />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => {
            const tabKey = item.name.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeTab === tabKey;

            return (
              <motion.div
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`flex items-center p-4 text-sm font-medium rounded-lg transition-colors mb-2 cursor-pointer ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                  className="mr-4"
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export { Sidebar, icons };
