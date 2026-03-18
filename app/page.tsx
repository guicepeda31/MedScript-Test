'use client';
import { useState } from 'react';

export default function Page() {
  const [page, setPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F6FAFE] text-slate-900">
      <header className="h-16 border-b bg-white flex items-center justify-between px-6">
        <div className="font-semibold">MedScript</div>
        <div className="flex gap-2">
          <button className="text-sm">Sign in</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Get started</button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-56 border-r bg-white p-4 space-y-2">
          {['dashboard','create','documents','billing','settings'].map(p => (
            <button key={p} onClick={() => setPage(p)}
              className={`block w-full text-left px-3 py-2 rounded ${page===p?'bg-blue-50 text-blue-700':'text-slate-600'}`}>
              {p}
            </button>
          ))}
        </aside>

        <main className="flex-1 p-6 space-y-6">
          {page === 'dashboard' && (
            <div>
              <h1 className="text-3xl font-semibold">Medical content from documents</h1>
              <p className="text-slate-600 mt-2">Turn clinical material into safe content.</p>
            </div>
          )}

          {page === 'create' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <div className="font-semibold">Create content</div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                  Generate
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <div className="font-semibold">Output</div>
                <p className="mt-3 text-sm text-slate-600">
                  Example medical content generated from source material.
                </p>
              </div>
            </div>
          )}

          {page === 'documents' && (
            <div className="bg-white p-6 rounded-xl border">
              Documents list
            </div>
          )}

          {page === 'billing' && (
            <div className="bg-white p-6 rounded-xl border">
              Billing overview
            </div>
          )}

          {page === 'settings' && (
            <div className="bg-white p-6 rounded-xl border">
              Settings
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
