import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useFormik } from 'formik';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      'name-123': '',
      'email-123': '',
      'tel-123': '',
    },
    onSubmit: async values => {
      const API_CONTACT = 'https://ordering.motherslovecooking.co.il/wp-json/contact-form-7/v1/contact-forms/15523/feedback'
      const results = await axios.post(API_CONTACT, {
        ...values
      });
      alert('תודה, אנו ניצור איתך קשר בהקדם!')
    },
  });
  return (
    <Form dir="rtl" onSubmit={formik.handleSubmit}>
      <Form.Field>
        <label htmlFor="name-123">שם מלא</label>
        <input type="text"
          placeholder="להזין שם מלא"
          id="name-123"
          name="name-123"
          onChange={formik.handleChange}
          value={formik.values['name-123']} />
      </Form.Field>
      <Form.Field>
        <label htmlFor="email-123">דואר אלקטרוני</label>
        <input type="email"
          placeholder="להזין אימייל"
          id="email-123"
          name="email-123"
          onChange={formik.handleChange}
          value={formik.values['email-123']} />
      </Form.Field>
      <Form.Field>
        <label htmlFor="tel-123">טלפון</label>
        <input type="tel"
          placeholder="להזין מספר טלפון"
          id="tel-123"
          name="tel-123"
          onChange={formik.handleChange}
          value={formik.values['tel-123']} />
      </Form.Field>
      <Button type='submit'>שלח</Button>
    </Form >
  );
}

export default ContactForm;
