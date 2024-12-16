"use client"
import Image from "next/image"
import useContextHook from "@/hooks/useContextHook"


export default function NavBar() {
    const {menuButtonRef} = useContextHook()
    return (
        <nav className="bg-[#FFFFFF] flex justify-between items-center h-[64px] w-full border-b-2 shadow-md">
            <div className="flex gap-[10px] items-center">
                <div className="relative w-[32px] h-[32px]">
                    <Image src="/images/logo.svg" alt="logo" fill={true} />
                </div>
                <h2 className="text-[#101828] text-[] font-[700]">
                    Untitled UI
                </h2>
            </div>

            <button ref={menuButtonRef} className="flex flex-col gap-[2px] justify-between">
                <div className="bg-[#101828] rounded h-[3px] w-[18px]"></div>
                <div className="bg-[#101828] rounded h-[3px] w-[80%]"></div>
                <div className="bg-[#101828] rounded h-[3px] w-[18px]"></div>
            </button>
        </nav>
    )
}