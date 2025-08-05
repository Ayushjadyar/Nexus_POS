import React from 'react';
import { FaSearch } from 'react-icons/fa';
import OrderList from './OrderList'; // Make sure this file exists and is exported properly

const RecentOrders = () => {
  return (
    <div className="w-full max-w-[600px] px-8 mt-6">
      <div className="bg-[#1a1a1a] rounded-xl flex flex-col h-[450px] shadow-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a
            href="#"
            className="text-[#025cca] text-sm font-semibold hover:underline"
          >
            View all
          </a>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] px-6 py-4 mx-6 rounded-[15px]">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-transparent outline-none text-[#f5f5f5] w-full placeholder:text-gray-400"
            aria-label="Search recent orders"
          />
        </div>

        {/* Order list */}
        <div className="mt-4 px-6 overflow-scroll h-[300px] scrollbar-hide">
          {/* Replace with real order items later */}
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
