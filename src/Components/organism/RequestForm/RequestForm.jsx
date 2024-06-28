import React from 'react'
import RequestFormStyle from './RequestFormStyle'
import Button from '../../atoms/Button/Button'

const RequestForm = () => {
  return (
    <RequestFormStyle>
      <section className="container request-container">
        <h2 className="request-header-text">Send us a Request</h2>
        <form className="request-form">
          <div className="input-wrapper">
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>

            <div className="input-container">
              <label htmlFor="mail">Email</label>
              <input type="email" id="mail" />
            </div>
          </div>

          <div className="input-wrapper">
            <div className="input-container">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" />
            </div>
            <div className="input-container">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="Request">Enter request</label>
            <textarea name="" id="Request"></textarea>
          </div>
          <Button type={'submit'} className="request-btn" value={'Send request'} />
        </form>
      </section>
    </RequestFormStyle>
  )
}

export default RequestForm
