import React, { useState, useEffect } from 'react'
import RequestFormStyle from './RequestFormStyle'
import Button from '../../atoms/Button/Button'
import SuccessPopup from '../../molecule/SuccessPopup/SuccessPopup'

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    messageRequest: '',
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [popupClass, setPopupClass] = useState('hide')

  useEffect(() => {
    const { name, email, phone, address, messageRequest } = formData
    if (name && email && phone && address && messageRequest) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [formData])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    setPopupClass('show')
    setShowSuccessPopup(true)
    setTimeout(() => {
      setPopupClass('hide')
      setTimeout(() => setShowSuccessPopup(false), 500)
    }, 3000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      messageRequest: '',
    })
  }

  return (
    <RequestFormStyle>
      <section className="container request-container">
        <h2 className="request-header-text">Send us a Request</h2>
        <form className="request-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <div className="input-container">
              <label htmlFor="name">
                Name<span> *</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Fredward Akinbola"
              />
            </div>

            <div className="input-container">
              <label htmlFor="email">
                Email<span> *</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="fredwardakinbola@gmail.com"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <div className="input-container">
              <label htmlFor="phone">
                Phone number<span> *</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="08089237547"
              />
            </div>
            <div className="input-container">
              <label htmlFor="address">
                Address<span> *</span>
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="33B Jakande road, Ikeja, Lagos state"
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="messageRequest">
              Enter message request<span> *</span>
            </label>
            <textarea
              id="messageRequest"
              value={formData.messageRequest}
              onChange={handleInputChange}
              placeholder="Type your message here"
            ></textarea>
          </div>
          <Button
            type="submit"
            className={`request-btn ${isButtonDisabled ? 'disabled' : ''}`}
            value="Send request"
            disabled={isButtonDisabled}
          />
        </form>
      </section>
      {showSuccessPopup && <SuccessPopup className={popupClass} />}
    </RequestFormStyle>
  )
}

export default RequestForm
