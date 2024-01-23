"use client"
import React, { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import linkedInIcon from "./images/icons8-linkedin-circled.svg";
import gitHubIcon from "./images/icons8-github.svg";
import Layout from "../../layout/Layout"

const ContactMe: React.FC = () => {
  const emailData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [notifHandler, setNotifhandler] = useState({
    state: false,
    message: "",
    error: false,
  });

  const form = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const sendEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zet50dv",
        "template_dbwxqxg",
        form.current,
        "4phmAnua7oJF8YSkF"
      )
      .then(
        (result: Object) => {
          console.log(result);
          setNotifhandler({
            ...notifHandler,
            state: true,
            message: "Email Sent Successfully!",
            error: false,
          });
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            setNotifhandler({ ...notifHandler, state: false });
          }, 5000);
        },
        (error: PromiseRejectedResult) => {
          console.error(error)
          setNotifhandler({
            ...notifHandler,
            state: true,
            message: "Email Could Not Be Sent.",
            error: true,
          });
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            setNotifhandler({ ...notifHandler, state: false });
          }, 5000);
        }
      );
  };
  return (
    <div>
      <div className="flex">
        <h1 className="font-sans text-5xl m-10 text-gray-200">My Socials</h1>
      </div>
      <Layout>
        <div className="border-2 border-solid my-4" />
        {notifHandler.state && (
          <div
            className={`${
              notifHandler.error ? "bg-red-100" : "bg-teal-100"
            } border-t-4 ${
              notifHandler.error ? "border-red-500" : "border-teal-500"
            }  rounded-b ${
              notifHandler.error ? "text-red-900 " : "text-teal-900"
            } px-4 py-3 shadow-md w-1/4`}
            role="alert"
            style={{ margin: "15px auto" }}
          >
            <div className="flex justify-center items-center">
              <div className="py-1">
                <svg
                  className={`fill-current h-6 w-6 ${
                    notifHandler.error ? "text-red-500" : "text-teal-500"
                  } mr-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">{notifHandler.message}</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex w-full relative content-evenly ">
          <div
            className="w-2/4 border-2 border-solid m-4 text-lg rounded overflow-hidden shadow-lg"
            style={{ height: "84vh" }}
          >
            <div className="m-4 text-2xl text-gray-900">Social Media</div>
            <div className="m-4">
              <div>
                <span>LinkedIn</span>
                <img src={linkedInIcon} className="h-10" />
              </div>
              <div>
                <span>GitHub</span>
                <img src={gitHubIcon} className="h-10" />
              </div>
              <div className="bottom-4 absolute my-4">
                <a href="https://github.com/ashwin-ram-1999/portfolio/blob/main/public/Ashwin/Sundar%20Ram%20-%20Full%20Stack%20Developer.pdf" target="_blank" download>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-4 rounded inline-flex items-center">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Download My Resume!</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-3/4 rounded overflow-hidden shadow-lg border-2 border-solid m-4">
            <div className="m-4 text-2xl text-gray-300">Email Me!</div>
            <form ref={form} onSubmit={() => sendEmail}>
              <div className="border-2 border-solid p-4 m-4 flex flex-col mb-4">
                {Object.keys(emailData).map((inp) => {
                  if (!inp.match("message")) {
                    return (
                      <>
                        <label className="ml-5 text-gray-300 ">
                          {inp.charAt(0).toUpperCase() + inp.slice(1)}
                        </label>
                        <input
                          name={inp}
                          className="border-2 border-solid border-gray-300 m-4 rounded h-10"
                          key={inp}
                        />
                      </>
                    );
                  }
                })}
                <label className="ml-5 text-gray-300">Message</label>
                <textarea
                  name="message"
                  className="border-2 border-solid border-gray-300 m-4 rounded-md"
                  style={{ padding: "0 0 170px 0", wordBreak: "break-word" }}
                />
                <button
                  className="border-2 border-solid block bg-blue-300 hover:bg-blue-400 text-black uppercase text-lg mx-auto p-4 rounded-md"
                  type="submit"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ContactMe;