import { useId } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import * as Yup from "yup";

import style from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .matches(/^[0-9-]*$/, "Only digits and dashes are allowed!")
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required!"),
});

const initialValues = {
  username: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values.username);
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.contactForm}>
        <div className={style.contactFormRow}>
          <label htmlFor={nameFieldId} className={style.contactFormLabel}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            className={style.contactFormInput}
            id={nameFieldId}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={style.contactFormErrorSpan}
          />
        </div>
        <div className={style.contactFormRow}>
          <label htmlFor={numberFieldId} className={style.contactFormLabel}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            className={style.contactFormInput}
            id={numberFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={style.contactFormErrorSpan}
          />
        </div>
        <button type="submit" className={style.contactFormBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
