"use client"
import Image from "next/image"
import { SubtitleDataType } from "@/lib/types"
import useContextHook from "@/hooks/useContextHook"


export default function SubMenuItem({ sub, index }: { sub: SubtitleDataType, index: any }) {
    const { userInfo, activePage, handleActiveDashboardTab } = useContextHook()


    return (
        <li key={sub.id} onClick={()=>{handleActiveDashboardTab(index)}} className="flex cursor-pointer justify-between border-left">
            <div className="flex w-full h-[40px] items-center gap-[10px] cursor-pointer hover:bg-[#F9FAFB]">
                <div className="h-[24px] w-[24px] relative">
                    <Image src="/images/users.svg" alt="menu item icon" fill={true} />
                </div>
                <h2>{sub.name}</h2>
            </div>
        </li>
    )
}