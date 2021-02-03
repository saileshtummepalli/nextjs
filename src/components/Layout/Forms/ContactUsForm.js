import React from "react";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createDataSaga } from "../../../redux/PostQuery/actions";

function ContactUsForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = useCallback((data) => {
    dispatch(createDataSaga({ data }));
  }, []);

  return (
    <div>
      <div className="container mx-auto px-6 py-1">
        <form
          className="form bg-white p-6 my-10 relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-2xl text-gray-900 font-semibold">
            Let us call you!
          </h3>
          <p className="text-gray-600"> To help you choose your Buddy</p>
          <div className="flex space-x-5 mt-3">
            <input
              type="text"
              name="firstName"
              ref={register({ required: true, maxLength: 10 })}
              placeholder="Your Name*"
              className="border p-2 w-1/2"
            />

            <input
              type="tel"
              name="Your Number"
              ref={register({ required: true, minLength: 10, maxLength: 15 })}
              placeholder="Your Number*"
              className="border p-2 w-1/2"
            />
          </div>
          <input
            type="email"
            name="Your Email"
            ref={register({ required: true, maxLength: 20 })}
            placeholder="Your Email*"
            className="border p-2 w-full mt-3"
          />
          <textarea
            name="Tell us about desired Dog"
            ref={register({ required: true, maxLength: 30 })}
            cols="10"
            rows="3"
            placeholder="Tell us about desired Dog*"
            className="border p-2 mt-3 w-full"
          ></textarea>
          <input
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
