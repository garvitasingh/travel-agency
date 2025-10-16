import React, { useEffect, useState } from 'react';
import { TOURS, DESTINATIONS, Slider } from '../data/siteData';
import colors from './colors';

function ContactModal({ isOpen, onClose, initialTourId }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '', phone: '', country: '' },
    travelInfo: { destination: '', dates: '', duration: '', travelers: 1, budget: '' },
    preferences: { accommodation: '', activities: [], dietary: '', special: '' },
    tourId: initialTourId || ''
  });

  const totalSteps = 3;

  useEffect(() => {
    if (initialTourId) {
      setFormData(prev => ({ ...prev, tourId: initialTourId }));
    }
  }, [initialTourId]);

  const handleSubmit = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Quote request submitted successfully! We\'ll contact you within 24 hours.');
      onClose();
      setStep(1);
      setFormData({
        personalInfo: { name: '', email: '', phone: '', country: '' },
        travelInfo: { destination: '', dates: '', duration: '', travelers: 1, budget: '' },
        preferences: { accommodation: '', activities: [], dietary: '', special: '' },
        tourId: ''
      });
    } catch (error) {
      alert('Failed to submit request. Please try again.');
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform scale-100 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ❌
            </button>
          </div>
        </div>

        <div className="w-full items-start">
          <div
            className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: colors.white }}
          >
            {/* <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>
              Send Us a Message
            </h2> */}
            <form className="space-y-5">
              <div>
                <label className="block font-medium mb-2" style={{ color: colors.lightText }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block font-medium mb-2" style={{ color: colors.lightText }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block font-medium mb-2" style={{ color: colors.lightText }}>
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: colors.primary, color: colors.white }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
