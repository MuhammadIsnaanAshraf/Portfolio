import React from "react";
import animationData from "../Components/Animation - 1748454588199.json";
import Lottie from "react-lottie";
import Title from "../Components/Title";
import axios from "axios";
import Button from "../Components/Button";
import { toast } from 'react-toastify';

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contact_No: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Invalid contact number")
    .min(10, "Contact No must be at least 10 digits")
    .required("Contact No is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
});

// Custom Field Component with Floating Label
const FloatingLabelField = ({ label, name, type = "text", ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Field name={name}>
      {({ field, meta, errors }) => {
        const hasValue = field.value && field.value.length > 0;
        const shouldFloat = isFocused || hasValue;
        const hasError = meta.touched && meta.error;
        // console.log("🚀 ~ FloatingLabelField ~ showError:", showError)

        return (
          <div className="relative mb-4">
            {type === "textarea" ? (
              <textarea
                {...field}
                {...props}
                id={name}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all bg-transparent duration-200 text-white resize-none min-h-[120px]
                  //  {showError
                  //   ? "border-red-400 focus:border-red-300"
                  //   : "border-gray-300 focus:border-cyan-300"
                  // }
                    `}
              />
            ) : (
              <input
                {...field}
                {...props}
                type={type}
                id={name}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all bg-transparent duration-200 text-white 
                  // {showError
                  //   ? "border-red-400 focus:border-red-300"
                  //   : "border-gray-300 focus:border-cyan-300"
                  // }
                    `}
              />
            )}
            {label && label !== "Subject" && (
              <label
                htmlFor={name}
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${shouldFloat
                    ? "-top-2.5 text-sm  rounded-[2px] px-2"
                    : "top-3 text-base"
                  } 
                    ${ shouldFloat
                      ? "text-cyan-300"
                      : "text-gray-400"
                  }
                      `}
                style={{
                  background: shouldFloat
                    ? "#020618" // Use solid white background to mask the border
                    : // ? '#1a1b3a' // Use solid white background to mask the border
                    "transparent",
                }}
              >
                {label}
              </label>
            )}
            {errors?.[name] && (
              <div className="text-red-500 text-sm mt-1">   
                {errors?.[name]}
              </div>
            )}
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-500 text-sm "
            />
          </div>
        );
      }}
    </Field>
  );
};

export default function FloatingLabelForm() {
  const [isLoading, setIsLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const initialValues = {
    fullName: "",
    email: "",
    contact_No: "",
    subject: "",
  };

  // const handleSubmit = (values, { setSubmitting, resetForm }) => {
  //   console.log("Form Data:", values);
  //   alert("Form saved successfully!");
  //   setSubmitting(false);
  //   // Optionally reset form after submission
  //   // resetForm();
  // };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsLoading(true);
    console.log("Form Data:", values);
    
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";
    try {
      const res = await axios.post(apiUrl, values);
      if (res?.status === 200) {
        toast.success("Form submitted successfully!");
        if (typeof resetForm === 'function') resetForm();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
      console.log("Response:", res);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      if (typeof setSubmitting === 'function') setSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      <Title text="Contact Us" />
      <style>{`
        /* Keep autofilled inputs matching site theme (dark background + white text) and keep border visible */
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #020618 inset !important;
          box-shadow: 0 0 0px 1000px #020618 inset !important;
          -webkit-text-fill-color: #ffffff !important;
          /* keep the border visible when browser autofills */
          border-color: #f4f4f4 !important; /* gray-300 */
          border-style: solid !important;
          border-width: 2px !important;
        }
        /* Firefox autofill */
        input:-moz-autofill,
        textarea:-moz-autofill {
          box-shadow: 0 0 0px 1000px #020618 inset !important;
          -moz-text-fill-color: #ffffff !important;
          border-color: #f4f4f4 !important;
          border-style: solid !important;
          border-width: 2px !important;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br  flex  items-center justify-center sm:p-4 mt-10 sm:mt-2">
        <div className=" rounded-2xl shadow-xl w-full max-w-8xl flex sm:flex-row flex-col justify-between items-center overflow-hidden">
          {/* Left Side - Form */}
          <div className=" sm:p-8 p-4 w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty, errors, touched, submitCount  }) => {
                console.log("🚀 ~ FloatingLabelForm ~ touched:", touched)
                console.log("Errorsss:", errors);
                return (
                  <Form className="space-y-6">
                    <FloatingLabelField
                      name="fullName"
                      type="text"
                      label="Full Name"
                    />
                    {errors?.fullName  && (
                      <div role="alert" className="text-red-500 text-xs ">
                        {errors.fullName}
                      </div>
                    )}
                    <FloatingLabelField name="email" type="email" label="Email" />
                    {errors?.email && touched && (
                      <div role="alert" className="text-red-500 text-xs ">
                        {errors.email}
                      </div>
                    )}
                    <FloatingLabelField
                      name="contact_No"
                      type="tel"
                      label="Contact_No"
                    />
                    {errors?.contact_No && (
                      <div role="alert" className="text-red-500 text-xs ">
                        {errors.contact_No}
                      </div>
                    )}

                    <FloatingLabelField
                      name="subject"
                      type="textarea"
                      label="Subject"
                      placeholder="Write your message here..."
                    />
                    {errors?.subject && (
                      <div role="alert" className="text-red-500 text-xs ">
                        {errors.subject}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting || !isValid || !dirty}
                      className={`w-full font-semibold py-3 px-4 cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
                      $
                    {isSubmitting || !isValid || !dirty
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-transparent   text-white focus:ring-blue-500"
                    }
                    bg-cyan-500  hover:bg-cyan-500 hover:text-white
                    `}
                    >
                      {isSubmitting ? "Saving..." : "Save"}
                    </button>
                    {/* <div disabled={isSubmitting || !isValid || !dirty}>
                    <Button text="Submit" width="w-full" />
                  </div> */}
                  </Form>
                );
              }}
            </Formik>
          </div>


          <div className="right w-full ">
            {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
            <div className="flex flex-col  justify-center  h-full lg:px-8 sm:px-2 py-4   text-cyan-300 mx-2">
              <div className="mb-6 flex gap-x-2 items-center">
                <p className="font-semibold sm:text-xl">Email:</p>
                <p>ashrafmuhammadisnaan@gmail.com</p>
              </div>
              <div className="mb-6 flex gap-x-2 items-center">
                <p className="font-semibold sm:text-xl">Phone:</p>
                <p>+92 3227479402</p>
              </div>

              <div className="mb-6 flex gap-x-2 items-center">
                <p className="font-semibold sm:text-xl">Address:</p>
                <p>Allama Iqbal colony Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
