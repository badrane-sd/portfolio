import { useState, useEffect, useRef } from "react";
// init: bibli emailJS
import { init } from "@emailjs/browser";
import styles from "./contact.module.css";
import { ValidateForm } from "../../components/validate form/ValidateForm";
import { ValidateField } from "../../components/validate form/ValidateField";
import { SETTINGS } from "./SettingsMail.js";
import Spinner from "../../components/animation/Spinner.jsx";
import { SendMail } from "./SendMail.js";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSucces] = useState(false);
  // const [failed, setFailed] = useState(false);
  // const [touched, setTouched] = useState({});
  const [loadingMail, setLoadingMail] = useState(false);

  const formRef = useRef();
  // init : pour l'nvoi du mail
  useEffect(() => {
    init(SETTINGS.PUBLIC_KEY);

    return () => {};
  }, []);

  // Gestion des inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    setErrors((prev) => ({
      ...prev,
      [name]: ValidateField(name, value),
    }));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    // setTouched((prev) => ({
    //   ...prev,
    //   [name]: true,
    // }));
    setErrors((prev) => ({
      ...prev,
      [name]: ValidateField(name, value),
    }));
    // console.log("l'objet touched : ", touched);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingMail(true);

    if (submitted) setSubmitted(false);
    const validationErrors = ValidateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("message sent  :", form);

      SendMail(
        formRef.current,
        setSucces,
        setLoadingMail,
        setForm,
        setSubmitted,
      );
    } else {
      console.log(validationErrors);
    }
  };

  return (
    <section className={styles.contact}>
      <h1 className={styles.sectionTitle}>Get In Touch</h1>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.lineFields}>
          {/* Name */}
          <div className={styles.field}>
            <input
              className={`${form.name ? styles.active : ""}`}
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Name</label>
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          {/* Email */}
          <div className={styles.field}>
            <input
              type="text"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Email</label>
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
        </div>

        {/* TEXTAREA */}
        <div className={styles.field}>
          <textarea
            required
            rows="8"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className={styles.labelTextarea}>Message</label>
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>
        {/* Start Notification send or not Message */}
        {submitted && (
          <div
            className={`${styles.notif} ${success ? styles.success : styles.failed}`}
          >
            {success ? "Message Sent" : "something went wrong"}
          </div>
        )}

        {/* End Notification send or not Message */}
        {/* <input type="submit" value="Envoyer" className={styles.submit} /> */}
        <button type="submit" className={styles.submit}>
          Envoyer
        </button>
      </form>
      {loadingMail ? <Spinner /> : ""}
    </section>
  );
}
