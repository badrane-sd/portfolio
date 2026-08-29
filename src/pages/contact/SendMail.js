import emailjs from "@emailjs/browser";
import { SETTINGS } from "./SettingsMail.js";

export const SendMail = async (
  formRef,
  setSucces,
  setLoadingMail,
  setForm,
  setSubmitted,
) => {
  try {
    await emailjs
      .sendForm(
        SETTINGS.SERVICE_ID,
        SETTINGS.TEMPLATE_ID,
        formRef,
        SETTINGS.PUBLIC_KEY,
      )
      .then(() => {
        setSucces(true);
      });
  } catch (error) {
    setSucces(false);
    console.log(error);
  } finally {
    setLoadingMail(false);
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
  }
};
