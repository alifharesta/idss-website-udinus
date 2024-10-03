// src/components/dashboard/DashboardContent.jsx
import React from 'react';

function DashboardContent() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Berita</h2>
          <p className="text-3xl font-bold">10</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Event</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Publikasi</h2>
          <p className="text-3xl font-bold">15</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Anggota</h2>
          <p className="text-3xl font-bold">25</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;