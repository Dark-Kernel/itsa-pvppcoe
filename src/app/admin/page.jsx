'use client';

import { useState } from 'react';
import axios from 'axios';

export default function AdminPage() {
  const [newCode, setNewCode] = useState('');
  const [checkValue, setCheckValue] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const handleGenerate = async () => {
    const res = await axios.post('/api/admin/createCode');
    setNewCode(res.data.code);
  };

  const handleCheck = async () => {
    const res = await axios.post('/api/admin/checkCode', { value: checkValue });
    setCheckResult(res.data.valid ? '✅ Valid Code' : '❌ Invalid Code');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <button
        onClick={handleGenerate}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 transition"
      >
        Generate 12-digit Code
      </button>

      {newCode && (
        <div className="mt-4 text-xl font-mono text-green-400">
          Generated Code: <span className="underline">{newCode}</span>
        </div>
      )}

      <div className="mt-10 w-full max-w-sm">
        <input
          value={checkValue}
          onChange={(e) => setCheckValue(e.target.value)}
          placeholder="Enter code to check"
          className="w-full px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 text-white"
        />
        <button
          onClick={handleCheck}
          className="mt-2 w-full bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Check Code
        </button>
        {checkResult && (
          <p className="mt-2 text-center font-semibold">{checkResult}</p>
        )}
      </div>
    </div>
  );
}
