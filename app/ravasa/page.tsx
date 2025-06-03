'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';

export default function RavasaPage() {
  const searchParams = useSearchParams();
  const ravasaNumber = searchParams?.get('number') || '';
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/fortunes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        setMessage('');
        setShowForm(false);
        alert('Mulțumim pentru gândul tău!');
      } else {
        alert('A apărut o eroare. Te rog încearcă din nou.');
      }
    } catch (error) {
      alert('A apărut o eroare. Te rog încearcă din nou.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white flex-col items-center justify-center pt-10">
      <Image
        src="/LogoDark.svg"
        alt="Logo Darl"
        width={200}
        height={100}
        priority
        className="mx-auto"
      />
      
      <div className="bg-white p-8 m-2 rounded-lg shadow-xl text-center">
        <p className="text-1xl font-bold m-4 text-gray-800">
          Nu numai cultivarea unei prietenii vechi si incercate, ci si inceputul si pregatirea alteia noi iti dau o mare multumire. intre cel care si-a facut si cel care isi face acum un prieten este aceeasi diferenta ca intre taranui care secera si cel care seamana. 
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Vrei să-mi dai și tu un gând la care să reflectez?
        </button>

        {showForm && (
          <div className="mt-6">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={4}
              placeholder="Scrie gândul tău aici..."
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !message.trim()}
              className={`mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg ${
                isSubmitting || !message.trim()
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-purple-700'
              } transition-colors`}
            >
              {isSubmitting ? 'Se trimite...' : 'Trimite gândul'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 