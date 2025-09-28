import React, { useEffect, useState, useRef } from 'react';
import { TOURS, DESTINATIONS, Slider } from '../data/siteData';
// Enhanced Quote Modal
function QuoteModal({ isOpen, onClose, initialTourId }) {
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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform scale-100 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Plan Your Journey</h3>
              <p className="text-gray-600 mt-1">Step {step} of {totalSteps}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ❌
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(step / totalSteps) * 100}%`,
                background: '#0077B6'
              }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="transition-all duration-300">
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.personalInfo.name}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, name: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.personalInfo.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, email: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.personalInfo.phone}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, phone: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <select
                    value={formData.personalInfo.country}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, country: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Travel Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={formData.travelInfo.destination}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, destination: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Destination</option>
                    {DESTINATIONS.map(dest => (
                      <option key={dest.id} value={dest.name}>{dest.name}</option>
                    ))}
                    <option value="Custom">Custom Destination</option>
                  </select>
                  <input
                    type="date"
                    value={formData.travelInfo.dates}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, dates: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <select
                    value={formData.travelInfo.duration}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, duration: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Trip Duration</option>
                    <option value="3-5 days">3-5 days</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="3+ weeks">3+ weeks</option>
                  </select>
                  <input
                    type="number"
                    min="1"
                    placeholder="Number of Travelers"
                    value={formData.travelInfo.travelers}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, travelers: parseInt(e.target.value) }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <select
                  value={formData.travelInfo.budget}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    travelInfo: { ...prev.travelInfo, budget: e.target.value }
                  }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Budget Range (per person)</option>
                  <option value="under-2000">Under $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Preferences & Special Requests</h4>
                <select
                  value={formData.preferences.accommodation}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, accommodation: e.target.value }
                  }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Accommodation Preference</option>
                  <option value="budget">Budget-friendly</option>
                  <option value="mid-range">Mid-range</option>
                  <option value="luxury">Luxury</option>
                  <option value="unique">Unique experiences (glamping, etc.)</option>
                </select>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Activities (select multiple)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Adventure Sports', 'Cultural Tours', 'Wildlife', 'Photography', 'Culinary', 'Wellness'].map(activity => (
                      <label key={activity} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded text-blue-500"
                          onChange={(e) => {
                            const activities = formData.preferences.activities;
                            if (e.target.checked) {
                              setFormData(prev => ({
                                ...prev,
                                preferences: {
                                  ...prev.preferences,
                                  activities: [...activities, activity]
                                }
                              }));
                            } else {
                              setFormData(prev => ({
                                ...prev,
                                preferences: {
                                  ...prev.preferences,
                                  activities: activities.filter(a => a !== activity)
                                }
                              }));
                            }
                          }}
                        />
                        <span className="text-sm">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Dietary Requirements"
                  value={formData.preferences.dietary}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, dietary: e.target.value }
                  }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />

                <textarea
                  placeholder="Special requests or additional information..."
                  value={formData.preferences.special}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, special: e.target.value }
                  }))}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex gap-3">
            {step < totalSteps ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300"
                style={{ background: '#0077B6' }}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300"
                style={{ background: '#0077B6' }}
              >
                Submit Request
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuoteModal;