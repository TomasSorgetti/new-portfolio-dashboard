"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { URL_BASE } from "@/constants";
import axios from "axios";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (data.email && data.password) {
      setLoading(true);
      try {
        await axios.post(`${URL_BASE}/user/login`, data).then((response) => {
          if (!response.data.error) {
            setLoading(false);
            const token = response.data.data;
            localStorage.setItem("token", token);
            router.push("/");
          }
        });
      } catch (error) {
        setLoading(false);
        if (error.response.data.error) {
          console.log(error.response.data);
          setErr(error.response.data.message);
        }
      }
    }
  };

  return (
    <main className="login_container text-white flex flex-col justify-center">
      <div className="text-center w-full absolute top-5">
        <ClipLoader
          color="#D4D4D4"
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl font-bold uppercase">Tomás Sorgetti</h1>
        <span className="text-base font-medium uppercase">Dashboard</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[477px] h-[549px] bg-glassColor border-[1px] rounded-[28px] mx-auto flex flex-col items-center p-20 justify-between"
      >
        <div className="flex flex-col gap-6 w-full">
          <h2 className="uppercase font-bold shadow-shadow text-center">
            login
          </h2>
          <span className="text-red-600 text-center h-2">{err}</span>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Email:
            </label>
            <input
              type="text"
              className="h-10 rounded text-bgColor"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Password:
            </label>
            <input
              type="password"
              className="h-10 rounded text-bgColor"
              {...register("password")}
            />
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
        </div>

        <button className="font-bold uppercase py-3 px-20 bg-gradient-to-r from-pinkColor2 to-pinkColor rounded">
          Login
        </button>
      </form>
    </main>
  );
}
