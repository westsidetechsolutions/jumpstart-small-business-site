import React, { useState, FormEvent } from 'react';
import Button from '../pieces/Button';
import { validateEmail, validatePhone } from '../../utils/validation';

type FormErrors = {
  fromName?: string;
  fromEmail?: string;
  subject?: string;
  phone?: string;
  body?: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fromName: '',
    fromEmail: '',
    subject: '',
    phone: '',
    body: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({});
    setNotice(null);
    setError(null);

    // Placeholder: Replace this with actual validation and submission logic
    const newErrors: FormErrors = {};
    if (!formData.fromName) newErrors.fromName = 'Name is required';
    if (!formData.fromEmail) {
      newErrors.fromEmail = 'Email is required';
    } else if (!validateEmail(formData.fromEmail)) {
      newErrors.fromEmail = 'Invalid email address';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.body) newErrors.body = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Placeholder for form submission logic, e.g., API call
    // Example:
    // const response = await submitForm(formData);
    // if (response.success) {
    //   setNotice('Your message has been sent successfully.');
    // } else {
    //   setError('There was an error sending your message.');
    // }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-primary py-6 px-6 md:py-6 md:px-6 space-y-4 rounded-xl container grid grid-cols-2 gap-4 max-w-3xl"
      >
        <div className="col-span-2">
          <h2 className="text-white text-2xl md:text-4xl font-bold">Contact Us Today</h2>
          <p className="text-white">
            Please fill out the form below and we will reach out to schedule your service.
          </p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3><label htmlFor="fromName" className="text-white">Name</label></h3>
          <input
            type="text"
            name="fromName"
            id="fromName"
            value={formData.fromName}
            onChange={handleChange}
            autoComplete="name"
            className="w-full input"
          />
          {errors.fromName && <div className="text-error mt-2">{errors.fromName}</div>}
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3><label htmlFor="fromEmail" className="text-white">Email</label></h3>
          <input
            type="email"
            name="fromEmail"
            id="fromEmail"
            value={formData.fromEmail}
            onChange={handleChange}
            autoComplete="email"
            className="w-full input"
          />
          {errors.fromEmail && <div className="text-error mt-2">{errors.fromEmail}</div>}
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3><label htmlFor="subject" className="text-white">Subject</label></h3>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full input"
          />
          {errors.subject && <div className="text-error mt-2">{errors.subject}</div>}
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3><label htmlFor="phone" className="text-white">Phone Number</label></h3>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full input"
          />
          {errors.phone && <div className="text-error mt-2">{errors.phone}</div>}
        </div>

        <div className="col-span-2">
          <h3><label htmlFor="body" className="text-white">How can we help you?</label></h3>
          <textarea
            name="body"
            id="body"
            value={formData.body}
            onChange={handleChange}
            rows={3}
            className="w-full input"
          ></textarea>
          {errors.body && <div className="text-error mt-2">{errors.body}</div>}
        </div>

        <div className="col-span-2">
          <Button type="submit" aesthetic="secondary" text="Submit" />
          {notice && <p className="message notice text-white">{notice}</p>}
          {error && <p className="message error text-error">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
