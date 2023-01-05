
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);


  const apiKey = process.env.PUBLIC_ACCESS_KEY || "";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Tselayagwe Webapp",
      subject: "New General Enquiry Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <div className="flex justify-center items-center w-screen h-fit bg-transparent z-10">
        {/* COMPONENT CODE */}
        <div className="container mx-auto px-4 lg:px-20">
          <div className="w-full p-8 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-3xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-2xl text-primary mt-10 ">
                Send us a <br /> message
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}></input>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-secondary rounded-md hover:bg-secondary-focus focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-accent rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold text-white uppercase text-4xl my-4">
                Drop by our office
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Main Office</h2>
                    <p className="text-white">
                      5555 Tailwind RD, Pleasant Grove, UT 73533
                    </p>
                  </div>
                </i>
              </div>
              <i className="fab fa-map-marker-alt pt-2 pr-2">
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fab fa-phone-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl"> Call or Email Us</h2>
                      <p className="text-white"> <FaPhoneAlt /> Tel: +267-76628432</p>
                      <p className="text-white"> <FaEnvelope />email: info@tselayagwe.com</p>
                    </div>
                  </i>
                </div>
                <i className="fab fa-phone-alt pt-2 pr-2">
                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                    >
                    <FaFacebookF />
                    </a>
                    <i className="fab fa-facebook-f text-blue-900">
                      <a
                        href="https://www.linkedin.com-"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                      >
                        <i className="fab fa-linkedin-in text-blue-900"></i>
                      </a>
                      <FaLinkedinIn />
                    </i>
                  </div>
                  <i className="fab fa-facebook-f text-blue-900">
                    <i className="fab fa-linkedin-in text-blue-900"></i>
                  </i>
                </i>
              </i>
            </div>
            <i className="fas fa-map-marker-alt pt-2 pr-2">
              <i className="fas fa-phone-alt pt-2 pr-2">
                <i className="fab fa-facebook-f text-blue-900">
                  <i className="fab fa-linkedin-in text-blue-900"></i>
                </i>
              </i>
            </i>
          </div>
          <i className="fas fa-map-marker-alt pt-2 pr-2">
            <i className="fas fa-phone-alt pt-2 pr-2">
              <i className="fab fa-facebook-f text-blue-900">
                <i className="fab fa-linkedin-in text-blue-900"></i>
              </i>
            </i>
          </i>
        </div>
        <i className="fas fa-map-marker-alt pt-2 pr-2">
          <i className="fas fa-phone-alt pt-2 pr-2">
            <i className="fab fa-facebook-f text-blue-900">
              <i className="fab fa-linkedin-in text-blue-900">
                {/* COMPONENT CODE */}
              </i>
            </i>
          </i>
        </i>
      </div>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
