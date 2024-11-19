import { useState } from "react";
import axios from "axios";

import phone from "../img/phone_icon_sm.png";
import chat from "../img/chat_icon_sm.png";

const ContactPage = () => {
  const formId = "rTNh71Rf";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ class: "", text: "" });

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      email: formEmail,
      name: formName,
      message: formMessage,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "Thanks, I will be in touch shortly.",
      });
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-red-500",
        text: "Sorry, something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="py-[60px] h-full w-full px-2 md:px-20 flex justify-center items-center">
      <div class="glass h-full lg:h-[500px] flex flex-col items-center rounded-lg border shadow-md sm:flex-row sm:max-w-7xl grid grid-cols-5 min-h-[450px]">
        <div class="flex justify-center items-center p-4 leading-normal col-start-1 col-end-3 grid grid-rows-2">
          <img class="object-cover w-[200px]" src={chat} alt="00" />
          <img class="object-cover w-[200px] bottom-0" src={phone} alt="00" />
        </div>
        <div class="justify-between p-4 leading-normal col-start-3 col-end-6 ">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white mono">
            Get in touch
          </h5>
          <p class="mb-3 font-normal text-gray-300">
            Feel free to contact me any time. I will get back to you as soon as
            possible.
          </p>
          <form onSubmit={submitForm}>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="name"
                onChange={(e) => setFormName(e.target.value)}
                value={formName}
                className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="email"
                onChange={(e) => setFormEmail(e.target.value)}
                value={formEmail}
                className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                onChange={(e) => setFormMessage(e.target.value)}
                value={formMessage}
                className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Message
              </label>
            </div>
            <button
              type="submit"
              disabled={submitting}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {submitting ? "Sending..." : "Send"}
            </button>
            {message && (
              <div
                className={
                  message.class
                    ? `mt-6 text-white w-full p-3 text-sm ${message.class}`
                    : ""
                }
              >
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
