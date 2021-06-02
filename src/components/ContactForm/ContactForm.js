import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Title from '../Title/Title';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  'name-123': Yup.string()
    .min(2, 'שם קצר מידי')
    .max(50, 'מידי')
    .required('חובה להזין שם'),
  'email-123': Yup.string().email('מייל לא תקין').required('חובה להזין מייל'),
  'tel-123': Yup.number()
    .typeError("יש להזין מספר טלפון")
    .positive("לא יכול להכיל תוים, רק מסרים")
    .integer("לא יכול להכיל תוים, רק מסרים")
    .min(8)
    .required('יש להזין מספר טלפון'),
});

const ContactForm = ({ formOnly = false }) => {
  const formik = useFormik({
    validationSchema: DisplayingErrorMessagesSchema,
    initialValues: {
      'name-123': '',
      'email-123': '',
      'tel-123': '',
    },
  });
  return (
    <>
      <Title text="צור קשר" subtext="Contant me" />

      {!formOnly &&
        <div dir="rtl" className="site-font">
          טלפון: <a href="tel:0533044233">053-304-4233</a>
          <br />
        מייל: <a href="mailto:riki.avisror@gmail.com">riki.avisror@gmail.com</a>
          <br />
          <address>
            רחוב בן חור 12, פתח תקווה
        </address>
          <br />
        </div>
      }

      <Form dir="rtl"
        method="post"
        action="https://ordering.motherslovecooking.co.il/contact-us.php"
      >
        <Form.Field>
          <label htmlFor="name-123">שם מלא</label>
          <input type="text"
            placeholder="להזין שם מלא"
            id="name-123"
            name="name-123"
            onChange={formik.handleChange}
            value={formik.values['name-123']} />
          {formik.errors['name-123'] && formik.values['name-123'].length > 0 &&
            <Message color='red'>{formik.errors['name-123']}</Message>
          }
        </Form.Field>
        <Form.Field>
          <label htmlFor="email-123">דואר אלקטרוני</label>
          <input type="text"
            placeholder="להזין אי-מייל"
            id="email-123"
            name="email-123"
            onChange={formik.handleChange}
            value={formik.values['email-123']} />
          {formik.errors['email-123'] && formik.values['email-123'].length > 0 &&
            <Message color='red'>{formik.errors['email-123']}</Message>
          }
        </Form.Field>
        <Form.Field>
          <label htmlFor="tel-123">טלפון</label>
          <input type="tel"
            placeholder="להזין מספר טלפון"
            id="tel-123"
            name="tel-123"
            onChange={formik.handleChange}
            value={formik.values['tel-123']} />
          {formik.errors['tel-123'] && formik.values['tel-123'].length > 0 &&
            <Message color='red'>{formik.errors['tel-123']}</Message>
          }
        </Form.Field>
        <Button disabled={!(formik.isValid && formik.dirty)} type='submit'>שלח</Button>
      </Form >
    </>
  );
}

export default ContactForm;
