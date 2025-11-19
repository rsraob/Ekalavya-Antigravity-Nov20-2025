import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentLogin from './apps/student/StudentLogin';
import StudentLayout from './apps/student/StudentLayout';
import StudentDashboard from './apps/student/StudentDashboard';
import EnglishDashboard from './apps/student/english/EnglishDashboard';
import ReadingSection from './apps/student/english/ReadingSection';
import LetterViewer from './apps/student/english/LetterViewer';
import WritingSection from './apps/student/english/WritingSection';
import MathsDashboard from './apps/student/maths/MathsDashboard';
import CountingGame from './apps/student/maths/CountingGame';
import ParentLogin from './apps/parent/ParentLogin';
import ParentDashboard from './apps/parent/ParentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Student Routes */}
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="english" element={<EnglishDashboard />} />
          <Route path="english/read" element={<ReadingSection />} />
          <Route path="english/read/letter/:letter" element={<LetterViewer />} />
          <Route path="english/write" element={<WritingSection />} />
          <Route path="maths" element={<MathsDashboard />} />
          <Route path="maths/counting" element={<CountingGame />} />
          <Route path="maths/tables" element={<div className="text-center mt-10 text-2xl">Tables Coming Soon</div>} />
          <Route path="maths/operations" element={<div className="text-center mt-10 text-2xl">Operations Coming Soon</div>} />
        </Route>

        <Route path="/parent" element={<ParentLogin />} />
        <Route path="/parent/dashboard" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
