'use client'
import { translate } from "@/libs/translate";
import Image from "next/image";
import { useState } from "react"
import DropdownComponent from "./Dropdown";


const Form = () => {
    const [trans, setTrans] = useState("");
    const [target, setTarget] = useState("");
    const [source, setSource] = useState("");
    const [tanslation, setTanslation] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => { 
      e.preventDefault();
      setLoading(true)
        let parseData = await translate(trans, target, source);
        console.log(parseData)
        setTanslation(parseData.data.translations[0].translatedText)
        setLoading(false)
     }
  return (
    <div className="m-auto py-2 px-3 w-[80vw]  bg-gray-300 border-2 shadow-lg ">
      <div className="flex justify-center space-y-2 items-center flex-col md:justify-between lg:justify-between md:flex-row lg:flex-row">

    <div>
      <h2 className="font-medium">Source language</h2>
      <select value={source} onChange={(e)=>{ setSource(e.target.value)}}>
        <option value="">Select an option</option>
        <option value="ur">Urdu</option>
        <option value="ar">Arabic</option>
        <option value="ps">Pashto</option> 
        <option value="en">English</option>
      </select>
    </div>
    <div>
      <h2 className="font-medium">Target language</h2>
      <select value={target} onChange={(e)=>{ setTarget(e.target.value)}}>
        <option value="">Select an option</option>
        <option value="ur">Urdu</option>
        <option value="ar">Arabic</option>
        <option value="ps">Pashto</option> 
        <option value="en">English</option>
      </select>
    </div>
    </div>
        <form onSubmit={handleSubmit} action="" className="text-center">
            <h1 className="my-2 text-xl font-bold">Enter or Type your text</h1>


            {/* 1. Translate this textarea */}
            <div className="flex flex-col items-center gap-4 justify-center">


            <textarea onChange={(e)=>{ setTrans(e.target.value)}} name="trans" id="trans" cols="70" rows="3" className="outline-none text-2xl w-[80%] rounded-md p-1" value={trans} />

            {/* 2. Translated textarea */}
            {/* <textarea name="translated" id="translated" cols="70" rows="3" className="outline-none text-2xl w-[80%] rounded-md p-1" value={tanslation} /> */}
            {tanslation.length>=1 && <div className="text-2xl border-2 border-gray-400  h-[80%]  w-[80%] rounded-md p-1">
              <Image className="object-contain relative right-0 top-0" src="/copy.svg" width={15} height={15}  alt="copy" />
              {tanslation}
              </div>}
            </div>
            <div className="btns flex justify-center mt-6">
            <button onSubmit={handleSubmit} type="submit" className=" bg-blue-500 text-white py-1 px-2 rounded-md">{loading ? "Translate...":"Translate"}</button>

            </div>

        </form>
    </div>
  )
}

export default Form