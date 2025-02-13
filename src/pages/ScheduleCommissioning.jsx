import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function ScheduleCommissioning() {
  const validationSchema = Yup.object({
    companyName: Yup.string().required('Required'),
    contactName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    installationAddress: Yup.string().required('Required'),
    chargerSerialNumbers: Yup.string().required('Required'),
    preferredDate: Yup.date()
      .min(new Date(), 'Date cannot be in the past')
      .required('Required'),
    preferredTime: Yup.string().required('Required'),
    timeZone: Yup.string().required('Required'),
    additionalNotes: Yup.string()
  })

  const initialValues = {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    installationAddress: '',
    chargerSerialNumbers: '',
    preferredDate: '',
    preferredTime: '',
    timeZone: '',
    additionalNotes: ''
  }

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ]

  const timeZones = [
    'Eastern Time (ET)',
    'Central Time (CT)',
    'Mountain Time (MT)',
    'Pacific Time (PT)'
  ]

  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would typically send the data to your backend
    console.log(values)
    alert('Commissioning request submitted successfully!')
    setSubmitting(false)
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Schedule Commissioning Call</h1>
        <p className="text-gray-600">
          Schedule a call with our IT team to set up and configure your charging stations
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="card space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="companyName" className="block font-medium">
                  Company Name
                </label>
                <Field
                  type="text"
                  name="companyName"
                  className="input-field"
                />
                <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactName" className="block font-medium">
                  Contact Name
                </label>
                <Field
                  type="text"
                  name="contactName"
                  className="input-field"
                />
                <ErrorMessage name="contactName" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  name="phone"
                  className="input-field"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="installationAddress" className="block font-medium">
                Installation Address
              </label>
              <Field
                as="textarea"
                name="installationAddress"
                rows="2"
                className="input-field"
              />
              <ErrorMessage name="installationAddress" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="space-y-2">
              <label htmlFor="chargerSerialNumbers" className="block font-medium">
                Charger Serial Numbers
              </label>
              <Field
                as="textarea"
                name="chargerSerialNumbers"
                rows="2"
                placeholder="Enter each serial number on a new line"
                className="input-field"
              />
              <ErrorMessage name="chargerSerialNumbers" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="preferredDate" className="block font-medium">
                  Preferred Date
                </label>
                <Field
                  type="date"
                  name="preferredDate"
                  className="input-field"
                  min={new Date().toISOString().split('T')[0]}
                />
                <ErrorMessage name="preferredDate" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="preferredTime" className="block font-medium">
                  Preferred Time
                </label>
                <Field
                  as="select"
                  name="preferredTime"
                  className="input-field"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </Field>
                <ErrorMessage name="preferredTime" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="timeZone" className="block font-medium">
                  Time Zone
                </label>
                <Field
                  as="select"
                  name="timeZone"
                  className="input-field"
                >
                  <option value="">Select time zone</option>
                  {timeZones.map(zone => (
                    <option key={zone} value={zone}>{zone}</option>
                  ))}
                </Field>
                <ErrorMessage name="timeZone" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="block font-medium">
                Additional Notes
              </label>
              <Field
                as="textarea"
                name="additionalNotes"
                rows="3"
                placeholder="Any specific requirements or questions?"
                className="input-field"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Commissioning Call'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ScheduleCommissioning 