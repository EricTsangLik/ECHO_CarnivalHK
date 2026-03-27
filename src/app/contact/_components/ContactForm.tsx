'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const eventTypeOptions = [
  '學校慶典',
  '企業活動',
  '商場推廣',
  '屋苑嘉年華',
  '生日派對',
  '節日活動',
  '教會及社福',
  '其他',
]

const serviceOptions = [
  '攤位遊戲租借',
  '充氣互動設施',
  '氣球佈置',
  '互動娛樂（小丑/魔術）',
  '手工藝工作坊',
  '體驗活動（拍照/小食）',
  '舞台表演',
  '獎品公仔訂購',
  '活動牌照及保險',
  '活動策劃及設計',
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    services: [] as string[],
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      `姓名: ${formData.name}`,
      `電話: ${formData.phone}`,
      formData.email ? `電郵: ${formData.email}` : '',
      `活動類型: ${formData.eventType}`,
      formData.eventDate ? `活動日期: ${formData.eventDate}` : '',
      formData.guestCount ? `預計人數: ${formData.guestCount}` : '',
      formData.services.length > 0 ? `所需服務: ${formData.services.join(', ')}` : '',
      formData.message ? `備註: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const encoded = encodeURIComponent(lines)
    window.open(`https://wa.me/85293910332?text=${encoded}`, '_blank')
  }

  return (
    <section className="section contact-form-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">快速查詢表格</h2>
          <p className="section-subtitle">填寫以下表格，我們會透過 WhatsApp 為您跟進</p>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Row 1: Name + Phone */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">姓名 *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="您的姓名"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">電話 *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="例如: 9391 0332"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2: Email + Event Type */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">電郵（選填）</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventType">活動類型 *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">請選擇活動類型</option>
                {eventTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Date + Guest Count */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventDate">活動日期（選填）</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guestCount">預計人數（選填）</label>
              <input
                type="text"
                id="guestCount"
                name="guestCount"
                placeholder="例如: 100-200人"
                value={formData.guestCount}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Services checkboxes */}
          <div className="form-group form-full">
            <label>所需服務（可多選）</label>
            <div className="form-services-grid">
              {serviceOptions.map((svc) => (
                <button
                  key={svc}
                  type="button"
                  className={`form-service-chip ${formData.services.includes(svc) ? 'chip-active' : ''}`}
                  onClick={() => handleServiceToggle(svc)}
                >
                  {formData.services.includes(svc) ? '✓ ' : ''}
                  {svc}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="form-group form-full">
            <label htmlFor="message">備註或特別要求（選填）</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="請描述您的活動需求、場地資訊或其他特別要求..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-submit-row">
            <button type="submit" className="form-submit-btn">
              💬 透過 WhatsApp 發送查詢
            </button>
            <p className="form-note">* 提交後將自動跳轉至 WhatsApp，方便即時溝通</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm
