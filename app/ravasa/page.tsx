'use client';

// import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Import Finger Paint font
import { Finger_Paint } from 'next/font/google';

const fingerPaint = Finger_Paint({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RavasaPage() {
  //   const searchParams = useSearchParams();
  //   const ravasaNumber = searchParams?.get('number') || '';
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for animation
  const logoRef = useRef(null);
  const introRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);



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
      console.log(error);
      alert('A apărut o eroare. Te rog încearcă din nou.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className={`min-h-screen bg-white flex-col items-center justify-center pt-10 ${fingerPaint.className}`}>
      <div ref={logoRef}>
        <Image
          src="/LogoDark.svg"
          alt="Logo Darl"
          width={200}
          height={100}
          priority
          className="mx-auto"
        />
      </div>

      <p ref={introRef} className="text-1xl font-bold m-4 text-gray-800">
        Bulele merg cu un subiect bun.
      </p>


      <div ref={quoteRef} className="text-1xl font-bold m-4 text-gray-800">
        <p>
          Nu numai cultivarea unei prietenii vechi si incercate, ci si inceputul si pregatirea alteia noi iti dau o mare multumire.
        </p>
        <button
          ref={buttonRef}
          onClick={() => setShowForm(!showForm)}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Vrei să-mi dai și tu un gând la care să reflectez?
        </button>
      </div>

      


    </div>
  );
} 