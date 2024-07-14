"use client";
import { motion } from "framer-motion";
import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  comments: string;
}

const Contact_us: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    comments: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, subject, email, comments } = formData;
    const mailtoLink = `mailto:gurungngr@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nComments: ${comments}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="md:h-screen md:w-full bg-white">
      <div className="md:flex md:flex-row flex flex-col space-y-3 md:h-full md:w-full md:py-9 md:px-20 p-4 py-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex flex-col md:w-1/2 md:p-14 md:space-y-6"
        >
          <h3>Let’s Start a Conversation</h3>
          <div className="text-black space-y-3">
            <h4>Ask how we can help you:</h4>
            <div className="flex flex-col ">
              <p className="font-semibold">See our platform in action</p>
              <p className="">
                Request a personalized demo of Waa partner marketing platform.
              </p>
            </div>
            <div className="flex flex-col ">
              <p className="font-semibold">Master performance marketing</p>
              <p className="">
                From Waa Tech get best of the best services from us.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Get in Touch</p>
              <p>
                Have any questions or need further information? Contact our
                support team and we’ll be happy to assist you.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex-1 flex flex-col space-y-3 md:p-20"
        >
          <form onSubmit={handleSubmit} className="md:w-[500px] flex flex-col space-y-4">
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="comments"
              fullWidth
              label="Comments"
              multiline
              minRows={4}
              variant="outlined"
              value={formData.comments}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-neutral-800 hover:bg-black rounded-lg border-2"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact_us;
