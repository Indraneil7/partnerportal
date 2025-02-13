import { useState } from 'react'

function Support() {
  const [activeTab, setActiveTab] = useState('faq')

  const faqs = [
    {
      question: "How do I start the commissioning process?",
      answer: "Contact our support team through the Schedule Commission button or call our support hotline to initiate the process."
    },
    {
      question: "What's included in the warranty?",
      answer: "Our comprehensive warranty covers parts, labor, and software updates for 3 years from installation."
    },
    {
      question: "How often are software updates released?",
      answer: "We release software updates quarterly, with critical security updates as needed."
    }
  ]

  const errorCodes = [
    {
      code: "E001",
      description: "Communication Error",
      solution: "Check network connection and restart the unit"
    },
    {
      code: "E002",
      description: "Power Supply Issue",
      solution: "Verify input voltage and circuit breaker status"
    },
    {
      code: "E003",
      description: "Charging Session Error",
      solution: "End current session and reinitiate charging"
    }
  ]

  return (
    <div className="w-full py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Support Center</h1>

      <div className="flex gap-4 border-b border-gray-200 mb-8">
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'faq' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'errors' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('errors')}
        >
          Error Codes
        </button>
      </div>

      {activeTab === 'faq' && (
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'errors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {errorCodes.map((error, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-red-500 font-mono font-bold">{error.code}</span>
                <h3 className="font-semibold">{error.description}</h3>
              </div>
              <p className="text-gray-600">{error.solution}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Support
