import { useState } from 'react'
// Import assets
import flyerImage from '../assets/images/flyer.jpg'
import placeholder1Image from '../assets/images/placeholder1.jpg'
import placeholder2Image from '../assets/images/placeholder2.jpg'
import bundleImage from '../assets/images/bundle-image.jpg'
import salesDeck2024 from '../assets/documents/sales-deck-2024.pdf'

function SalesMarketing() {
  const [activeTab, setActiveTab] = useState('overview')

  const benefits = [
    {
      title: "Smart Load Management",
      description: "Advanced load balancing ensures optimal power distribution",
      icon: "⚡"
    },
    {
      title: "Remote Monitoring",
      description: "24/7 access to charging station analytics",
      icon: "📊"
    },
    {
      title: "Future-Proof Design",
      description: "Regular updates and modular hardware design",
      icon: "🔄"
    }
  ]

  const keyPoints = [
    "Industry-leading charging solutions",
    "24/7 Partner support",
    "Competitive pricing structure",
    "Quick installation process",
    "Comprehensive warranty coverage",
    "Regular software updates"
  ]

  const marketingMaterials = [
    {
      title: "Product Flyer",
      image: flyerImage,
      description: "High-resolution product flyer for print and digital use"
    },
    {
      title: "Brand Guidelines",
      image: placeholder1Image,
      description: "Official brand colors, logos, and usage guidelines"
    },
    {
      title: "Social Media Kit",
      image: placeholder2Image,
      description: "Ready-to-use social media assets and templates"
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Smart EV Charging Solutions</h1>
        <p className="text-xl text-gray-600">Future-proof charging infrastructure for your customers</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-8">
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'overview' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'sales' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('sales')}
        >
          Sales Resources
        </button>
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'marketing' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('marketing')}
        >
          Marketing Materials
        </button>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold">Why Partner With Us?</h2>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="card">
                    <span className="text-4xl mb-4 block">{benefit.icon}</span>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card overflow-hidden">
              <img 
                src={bundleImage} 
                alt="Schön EV Charging Solutions" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        )}

        {activeTab === 'sales' && (
          <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-12">
            <div className="card h-fit">
              <h2 className="text-2xl font-semibold mb-6">Partner Benefits</h2>
              <ul className="space-y-4">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Sales Deck 2024</h2>
              <iframe 
                src={salesDeck2024} 
                title="Sales Deck 2024"
                className="w-full h-[700px] rounded-lg border border-gray-200"
              />
            </div>
          </div>
        )}

        {activeTab === 'marketing' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Marketing Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingMaterials.map((material, index) => (
                <div key={index} className="card overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={material.image} 
                      alt={material.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
                    <p className="text-gray-600 mb-4">{material.description}</p>
                    <button className="btn-secondary w-full">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SalesMarketing
