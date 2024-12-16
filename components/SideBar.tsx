import Image from "next/image"
import useContextHook from "@/hooks/useContextHook"
import { DashboardMenuType, SubtitleDataType } from "@/lib/types"
import { Fragment, useEffect, useLayoutEffect, useState } from "react"
import SideBarItem from "./SideBarItem"


export default function SideBar() {
    const { dashboardMenuItems, handleActiveDashboardTab } = useContextHook()


    return (
        <nav className="bg-[#FFFFFF] flex flex-col h-full w-[280px] pl-[20px] pr-[10px] pt-[20px] shadow-lg gap-[10px] overflow-y-auto pb-[20px]">
            <div className="flex gap-[10px] items-center">
                <div className="relative w-[32px] h-[32px]">
                    <Image src="/images/logo.svg" alt="logo" fill={true} />
                </div>
                <h2 className="text-[#101828] text-[] font-[700]">
                    Untitled UI
                </h2>
            </div>
            <div className="w-full h-[44px] rounded">
                Search Bar
            </div>

            <ul className="flex flex-col w-full">
                {dashboardMenuItems.length > 0 && dashboardMenuItems.map((item: DashboardMenuType, index: number) => {
                    return (
                        <Fragment key={index}>
                            <SideBarItem item={item} index={index} />
                        </Fragment>
                    )
                })}
            </ul>

            <div className="bg-[#F9FAFB] p-[10px] gap-[10px] rounded-[10px] w-full h-[292px] flex flex-col">
                <h2 className="borde">New features available!</h2>
                <h2>
                    Check out the new dashboard view. Pages now load faster.
                </h2>

                <div className="relative w-full h-[136px]">
                    <Image src="/images/new-dashboard.svg" alt="" fill={true}/>
                </div>
                <div className="flex gap-[20px]">
                    <button className="text-[#667085] font-[500] text-[14px] leading-[20px]">Dismiss</button>
                    <button className="text-[#6941C6] font-[500] text-[14px] leading-[20px]">What's new?</button>
                </div>
            </div>

            <div className="flex border-t pt-[20px] justify-around">
                <div className="w-[40px] h-[40px] rounded-[50%] relative">
                    <Image src="/images/avone.svg" alt="" fill={true}/>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[#101828] font-[500] text-[14px] leading-[20px]">Olivia Rhye</h2>
                    <h2 className="text-[#667085] font-[400] text-[14px] leading-[20px]">olivia@untitledui.com</h2>
                </div>
                <button className="relative w-[20px] h-[20px]">
                    <Image src="/images/logout.svg" alt="" fill={true}/>
                </button>
            </div>

        </nav>
    )
}