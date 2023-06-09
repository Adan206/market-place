/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";

type sellItemForm = {
  name: string;
  description: string;
  price: number;
};

const SellAnItem: NextPage = () => {
  const { register, handleSubmit } = useForm<sellItemForm>();
  const onSubmit = (formData: sellItemForm) => console.log(formData);
  return (
    <>
      <Head>
        <title>Sell An Item</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1f182a] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1>Sell Item</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium  dark:text-white"
              >
                Item Name
              </label>
              <input
                id="name"
                className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium  dark:text-white"
              >
                Description
              </label>
              <textarea
                id="desciption"
                className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                {...register("description", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium dark:text-white"
              >
                Price
              </label>
              <input
                id="price"
                className="block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                type="number"
                step={0.01}
                {...register("price", { required: true })}
              />
            </div>
            <button
              type="submit"
              className=" rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SellAnItem;
