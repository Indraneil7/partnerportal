import { useState } from 'react'
// Import assets that exist (based on your screenshot)
import bollardImage from '../assets/images/bollard-image.jpg'
import chargerImage from '../assets/images/charger.jpg'
import bollardDimension from '../assets/images/bollard-dimension.png'
import pedestalDimensions from '../assets/images/pedestal-dimensions.png'
import chargerDimensions from '../assets/images/charger-dimensions.png'
import specificationsBollard from '../assets/images/specifications-bollard.png'
import productBrochure from '../assets/documents/prodcut-brochure.pdf' // Note the typo in filename
import installationManual from '../assets/documents/installation-manual.pdf'

function ProductInstallation() {
  const [activeTab, setActiveTab] = useState('products')

  const products = [
    {
      name: "EV Bollard Charger",
      image: bollardImage,
      dimensions: bollardDimension,
      specs: specificationsBollard
    },
    {
      name: "EV Pedestal Charger",
      image: chargerImage,
      dimensions: pedestalDimensions,
      specs: specificationsBollard
    },
    {
      name: "Wall-mounted Charger",
      image: chargerImage,
      dimensions: chargerDimensions,
      specs: specificationsBollard
    }
  ]

  const installationDocs = [
    {
      name: "Installation Manual",
      description: "Complete installation guide for all products",
      link: installationManual
    },
    {
      name: "Installation Checklist",
      description: "Pre and post installation checklist",
      link: "#" // This file is missing, so use a placeholder link
    }
  ]

  return (
    <div className="w-full py-8">
      <div className="flex gap-4 border-b border-gray-200 mb-12">
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'products' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button 
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'installation' 
              ? 'text-primary border-b-2 border-primary' 
              : 'text-gray-600 hover:text-primary'
          }`}
          onClick={() => setActiveTab('installation')}
        >
          Installation Guide
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">Our Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <img src={product.dimensions} alt={`${product.name} Dimensions`} className="w-full h-32 object-contain" />
                    <img src={product.specs} alt={`${product.name} Specifications`} className="w-full h-32 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                  <a href={productBrochure} 
                     className="btn-secondary w-full text-center" 
                     download>
                    Download Specifications
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'installation' && (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Installation Guide</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Pre-Installation Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Power supply verification</li>
                  <li>Site survey completion</li>
                  <li>Network connectivity check</li>
                  <li>Mounting surface preparation</li>
                  <li>Required tools and equipment</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Installation Process</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Physical mounting</li>
                  <li>Electrical connections</li>
                  <li>Network setup</li>
                  <li>Initial testing</li>
                  <li>Safety checks</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {installationDocs.map((doc, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <a href={doc.link} className="btn-secondary w-full text-center" download>
                  Download {doc.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductInstallation
