import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// Import assets
import bollardImage from '../assets/images/bollard-image.jpg'
import chargerImage from '../assets/images/charger.jpg'

function OrderForm() {
  const [selectedProducts, setSelectedProducts] = useState([])

  const products = [
    {
      id: 'bollard',
      name: 'EV Bollard Charger',
      image: bollardImage,
      description: 'Elegant and robust bollard-style EV charger',
      specs: [
        'Up to 22kW output',
        'RFID authentication',
        'IP54 rated',
        'LED status indicator'
      ]
    },
    {
      id: 'pedestal',
      name: 'EV Pedestal Charger',
      image: chargerImage,
      description: 'Commercial-grade pedestal charging station',
      specs: [
        'Up to 22kW output',
        'Touch screen display',
        'OCPP compliant',
        'Load balancing'
      ]
    },
    {
      id: 'wallmount',
      name: 'Wall-mounted Charger',
      image: chargerImage,
      description: 'Space-saving wall-mounted charging solution',
      specs: [
        'Up to 22kW output',
        'Compact design',
        'Smart metering',
        'WiFi connectivity'
      ]
    }
  ]

  const initialValues = {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    installationAddress: '',
    additionalNotes: ''
  }

  const validationSchema = Yup.object({
    companyName: Yup.string().required('Required'),
    contactName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),
    productType: Yup.string().required('Required'),
    quantity: Yup.number().required('Required').positive('Must be positive'),
    installationAddress: Yup.string().required('Required')
  })

  const handleProductSelect = (productId) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId)
      }
      return [...prev, productId]
    })
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Order Products</h1>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="card space-y-6">
            <div className="space-y-2">
              <label htmlFor="companyName" className="block font-medium">Company Name</label>
              <Field
                type="text"
                name="companyName"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="space-y-2">
              <label htmlFor="contactName" className="block font-medium">Contact Name</label>
              <Field
                type="text"
                name="contactName"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <ErrorMessage name="contactName" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">Phone</label>
                <Field
                  type="tel"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="productType" className="block font-medium">Product Type</label>
                <Field
                  as="select"
                  name="productType"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a product</option>
                  <option value="charger">EV Charger</option>
                  <option value="bollard">Charging Bollard</option>
                  <option value="pedestal">Charging Pedestal</option>
                </Field>
                <ErrorMessage name="productType" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity" className="block font-medium">Quantity</label>
                <Field
                  type="number"
                  name="quantity"
                  min="1"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="installationAddress" className="block font-medium">Installation Address</label>
              <Field
                as="textarea"
                name="installationAddress"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <ErrorMessage name="installationAddress" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="block font-medium">Additional Notes</label>
              <Field
                as="textarea"
                name="additionalNotes"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OrderForm
