"use client"

import { Input } from "@/components/ui/input"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"


export function Search() {

  const router = useRouter()
  const pathname = usePathname();

  const [inputText, setInputText] = useState("")
  const [isError, setIsError] = useState('')

  const fetchingCars = async () => {

    if (!inputText.trim()) {
      return;
    }

    try {

      const data = await client.fetch(
        `*[_type == "car" && (tags[] match $inputText + "*" || type match $inputText + "*" || name match $inputText + "*")]`,
        { inputText }
      );

      // Save the search result in local storage as a JSON string
      const savedData = localStorage.setItem("searchResult", JSON.stringify(data));

      router.replace("/search")
      
      if (pathname === "/search") {
        setTimeout(() => {

          window.location.reload()

        }, 200);
      }

      console.log("savedData: ", savedData);

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log("error: ", err);
        setIsError(err.message);
      } else {
        console.log("An unexpected error occurred: ", err);
        setIsError("An unexpected error occurred");
      }
    }
  }

  return (
    <>
      <div className="relative flex items-center w-full max-w-xl gap-x-10">
        <Input
          type="text"
          placeholder="Search something here"
          className="pl-10 pr-4 py-2 w-full rounded-lg md:rounded-full border text-black border-gray-200"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => fetchingCars()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
          {/* <SlidersHorizontal className="h-5 w-5 text-gray-500" /> */}
          <Image src={"/assets/filter.png"} alt="Filter" height={1000} width={10000} className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <>
        {
          isError &&
          <div className='overflow-hidden '>
            <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
              <div className='text-2xl font-bold text-black text-center '>
                {isError}
              </div>
            </div>
          </div>
        }
      </>
    </>
  )
}