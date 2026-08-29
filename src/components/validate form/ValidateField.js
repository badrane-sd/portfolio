// Validation champ par champ
export const ValidateField = (name, value) => {
  console.log("Hello from validateField");
  let message = "";
  if (name === "name") {
    if (!value.trim()) message = "Name is required";
    else if (value.length < 6) message = "Minimun 6 characters";
  }
  if (name === "email") {
    if (!value.trim()) message = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(value)) message = "Invalid email";
  }
  if (name === "message") {
    if (!value.trim()) message = "Message is required";
    else if (value.length < 10) message = "Minimum 10 characters";
  }

  // setErrors((prev) => ({
  //   ...prev,
  //   [name]: message,
  // }));

  // console.log("errors from validateField : ", errors);
  return message;
};

// Fin validation champs par champs
