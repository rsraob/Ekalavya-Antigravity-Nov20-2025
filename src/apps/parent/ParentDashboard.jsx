import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Clock, Trophy, LogOut } from 'lucide-react';

const ParentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Parent Dashboard</h1>
        <Link to="/" className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </header>

      <main className="p-6 max-w-6xl mx-auto space-y-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Time Spent</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">2h 15m</p>
            <p className="text-sm text-gray-500">Today</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <Trophy size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Progress</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">Level 3</p>
            <p className="text-sm text-gray-500">English Module</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                <BarChart size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Activity</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">High</p>
            <p className="text-sm text-gray-500">Last 7 days</p>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {[
                { time: '10:30 AM', activity: 'Completed "Letter A" Tracing', score: 'Good' },
                { time: '10:15 AM', activity: 'Played Counting Game', score: 'Perfect' },
                { time: '09:45 AM', activity: 'Listened to "The Lion and Mouse"', score: '-' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{item.activity}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {['Animals', 'Drawing', 'Music', 'Numbers'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Based on Raja's interaction, he shows a strong interest in creative activities and animal stories.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
