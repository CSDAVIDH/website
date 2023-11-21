import RedSocial from "../navbar/Redsocial"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-white p-4 text-center left-0 w-full">
      <div className=" min-h-fit flex flex-col">
        <div className="flex justify-center gap-4 py-2">
          <RedSocial />
        </div>
      </div>
      © Copyright @ 2023 Edit by 
      <Link href="#" className="hover:text-green-700 text-blue-600"> Seseeit Srl. </Link>
      | all rights reserved!
    </footer>
  )

}