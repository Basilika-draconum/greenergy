"use client";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

const formConfigContact = {
  defaultValues: {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  }
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm(formConfigContact);

  useFormPersist("contactFormData", {
    watch,
    setValue,
  });

  const onSubmit = handleSubmit((data) => {
   
    toast.success(`Thank you, ${data.fullName}! We have received your message and will contact you soon!`,
      { duration: 5000, position: "top-center" });
     reset();
  });
  return (
    <form onSubmit={onSubmit} className="bg-bgForm px-3 py-9 tablet:w-[342px] tablet:px-6 desktop:w-[596px] desktop:p-12">
      <div className="relative">
        <div className="mb-7 ">
          <label className="block text-description mb-2">* Full name:</label>
          <input
            className="bg-white/[.05] pb-2 py-2 pt-1 w-full border-b-[1px] border-accentColor text-question desktop:text-[20px] desktop:placeholder:text-[20px] placeholder:text-description placeholder:font-extralight placeholder:leading-6 "
            placeholder="John Rosie"
            {...register("fullName", {
              required: "This is required",
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                message: "Wrong Fullname",
              },
            })}
          />
        </div>
        <div className="flex absolute right-0 bottom-[-20px]">
          <p className="text-errorColor font-normal text-xs tracking-[-0.48px] ">
            {errors.fullName?.message}
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="mb-7 ">
          <label className="block mb-2 text-description">* E-mail:</label>
          <input
            className="bg-white/[.05] pb-2 py-2 pt-1 w-full border-b-[1px] border-accentColor text-question desktop:text-[20px] desktop:placeholder:text-[20px] placeholder:text-description placeholder:font-extralight placeholder:leading-6 "
            placeholder="johnrosie@gmail.com"
            {...register("email", {
              required: "This is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Wrong Email",
              },
            })}
          />
        </div>
        <div className="flex absolute right-0 bottom-[-20px]">
          <p className="text-errorColor font-normal text-xs tracking-[-0.48px]">
            {errors.email?.message}
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="mb-7">
          <label className="block mb-2 text-description">* Phone:</label>
          <input
            className="bg-white/[.05] pb-2 py-2 pt-1 w-full border-b-[1px] border-accentColor text-question desktop:text-[20px] desktop:placeholder:text-[20px] placeholder:text-description placeholder:font-extralight placeholder:leading-6 "
            placeholder="380961234567"
            {...register("phone", {
              required: "This is required",
              pattern: {
                value: /^380\d{9}$/,
                message: "Wrong Phone",
              },
            })}
          />
        </div>
        <div className="flex absolute right-0 bottom-[-20px]">
          <p className="text-errorColor font-normal text-xs tracking-[-0.48px]">
            {errors.phone?.message}
          </p>
        </div>
      </div>
      <div className="mb-4 desktop:mb-8">
        <label className="block mb-2 text-description">* Message:</label>
        <textarea
          className="bg-white/[.05] pb-2 pl-2 pr-2 w-full border-b-[1px] resize-none border-accentColor text-question desktop:text-[20px] desktop:placeholder:text-[20px] placeholder:text-description placeholder:font-extralight placeholder:leading-6 "
          rows={5}
          placeholder="My message..."
          {...register("message", { required: "This is required" })}
        />
      </div>
      <div className="flex justify-end relative">
        <input
          className="cursor-pointer capitalize border border-accentColor rounded-full flex items-center p-[10px] pl-3 pr-11 gap-3 text-description hover:bg-primaryColor hover:border-primaryColor hover:text-accentColor transition ease duration-300"
          type="submit"
          value="send"
        />
        <div className="bg-accentColor rounded-full p-2 absolute top-1 right-1">
          <Image
            width={16}
            height={16}
            src="/icons/arrow-right.svg"
            alt="Arrow"
          />
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
