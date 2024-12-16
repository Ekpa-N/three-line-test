import Image from "next/image"
import useContextHook from "@/hooks/useContextHook"
import { DashboardMenuType, SubtitleDataType } from "@/lib/types"
import { Fragment, useEffect, useLayoutEffect, useState } from "react"
import SideBarItem from "./SideBarItem"


export default function SideBar() {
    const { dashboardMenuItems, handleActiveDashboardTab } = useContextHook()


    return (
        <nav className="bg-[#FFFFFF] flex flex-col h-full w-[280px] pl-[20px] pr-[10px] pt-[20px] shadow-lg gap-[10px]">
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

        </nav>
    )
}