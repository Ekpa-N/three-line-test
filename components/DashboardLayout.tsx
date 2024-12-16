"use client"
import AppContext from "@/components/Provider"
import SideBar from "./SideBar"
import NavBar from "./Nav"
import useContextHook from "@/hooks/useContextHook"
import { dashboardMenu } from "@/lib/constants"
import { useEffect, useState, useRef, useLayoutEffect } from "react"



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { userInfo, activePage, handleActiveDashboardTab, sideBarRef, isMobileMenu, handleSideBar } = useContextHook()

    return (
        <div onClick={(e)=>{handleSideBar(e)}} className="flex flex-col lg:flex-row h-screen">
            <div className="w-full lg:hidden px-[5px] z-[50]">
                <NavBar />
            </div>
            <div ref={sideBarRef} className={`transition-all min-w-[280px] linear duration-[1s] z-[40] lg:hidden h-full overflow-y-auto h-screen absolute ${isMobileMenu ? "left-[0px]":"left-[-290px]"}`}>
                <SideBar />
            </div>
            <div className="hidden lg:block h-full overflow-y-auto min-w-[280px] h-screen">
                <SideBar />
            </div>
            <main className="grow overflow-y-auto bg-[#F9FAFB] z-[30] pt-[20px] flex flex-col px-[10px] gap-[15px]">
                <div className="flex flex-col px-[5px]">
                    <h2 className="font-[500] p-0 text-[#101828] text-[30px] leading-[38px]">{dashboardMenu[activePage].title}</h2>
                    <h2 className="text-[#667085] p-0 text-[#667085] text-[16px] leading-[24px]">{dashboardMenu[activePage].desc}</h2>
                </div>
                {children}
            </main>
        </div>
    )
}