import { useState } from 'react'
import { Link } from 'react-router-dom'

function Commissioning() {
  const [activeTab, setActiveTab] = useState('steps')

  const commissioningSteps = [
    {
      title: "1. Pre-Commissioning Checklist",
      description: "Ensure all prerequisites are met before scheduling",
      steps: [
        "Installation completed according to manual",
        "Power supply properly connected and tested",
        "Network connectivity available (Ethernet/WiFi)",
        "Charger powers up and display is functional",
        "Serial numbers documented and accessible"
      ]
    },
    {
      title: "2. Commissioning Process",
      description: "What happens during commissioning",
      steps: [
        "Access EnergyMÆSTRO platform",
        "Register charger using serial number",
        "Configure network settings",
        "Set up load management parameters",
        "Configure user authentication method"
      ]
    },
    {
      title: "3. Testing & Verification",
      description: "Final checks and validation",
      steps: [
        "Perform test charging session",
        "Verify remote monitoring connection",
        "Test emergency stop functionality",
        "Validate power output levels",
        "Check all safety features"
      ]
    }
  ]

  const documents = [
    {
      title: "Installation Manual",
      description: "Complete installation guide with technical specifications",
      icon: "📖",
      link: "/src/assets/documents/installation-manual.pdf"
    },
    {
      title: "Network Requirements",
      description: "Network setup and configuration guide",
      icon: "🌐",
      link: "/src/assets/documents/network-requirements.pdf"
    },
    {
      title: "Commissioning Checklist",
      description: "Detailed checklist for commissioning preparation",
      icon: "✓",
      link: "/src/assets/documents/commissioning-checklist.pdf"
    }
  ]

  return (
    <div className="w-full py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Commissioning Process</h1>
        <p className="text-xl text-gray-600 mb-8">
          Guide to preparing and completing the commissioning process
        </p>
        <Link 
          to="/schedule-commissioning" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>Schedule Commissioning Call</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      <div className="flex gap-4 border-b border-gray-200 mb-8">
        <button 
          className={`tab-button ${activeTab === 'steps' ? 'active' : ''}`}
          onClick={() => setActiveTab('steps')}
        >
          Process Steps
        </button>
        <button 
          className={`tab-button ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveTab('docs')}
        >
          Documentation
        </button>
      </div>

      {activeTab === 'steps' && (
        <div className="space-y-8">
          {commissioningSteps.map((section, index) => (
            <div key={index} className="card">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-3">
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'docs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="card">
              <div className="text-4xl mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <a 
                href={doc.link}
                className="text-primary hover:text-primary-hover flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Commissioning
