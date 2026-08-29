export const ValidateForm = (form) => {
  let newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (form.name.length < 6) {
    newErrors.name = "Minimun 6 characters";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Invalid email";
  }

  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  } else if (form.message.length < 10) {
    newErrors.message = "Minimum 10 characters";
  }

  return newErrors;
};
