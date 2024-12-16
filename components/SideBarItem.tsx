"use client"
import Image from "next/image"
import { DashboardMenuType, SubtitleDataType } from "@/lib/types"
import SubMenuItem from "./SubMenu"
import { useState, useEffect, useLayoutEffect, Fragment } from "react"
import useContextHook from "@/hooks/useContextHook"
import Link from "next/link"


export default function SideBarItem({ index, item }: { index: number, item: DashboardMenuType }) {
    const { userInfo, activePage, handleActiveDashboardTab } = useContextHook()
    const [height, setHeight] = useState<number | undefined>(40)

    const isActive = activePage == index ? true : false
    const hasSubs = item.hasOwnProperty("subTitles") ? true : false

    useLayoutEffect(() => {
        if (!isActive) {
            setHeight(() => {
                return 40
            })
        }
    }, [isActive])

    function handleHeight(size: string) {
        if (isActive) {
            return
        }

        if (size == "full" && item.subTitles) {
            setHeight(() => {
                return 30 + 10 + ((item.subTitles as Array<SubtitleDataType>).length * 40)
            })
            return
        }

        setHeight(() => {
            return 40
        })
    }


    return (
        <Link href={item.link}>
            <li style={{ height: `${height}px` }} onMouseOut={() => { handleHeight("") }} onMouseOver={() => { handleHeight("full") }} onClick={() => { handleActiveDashboardTab(index) }} key={index} className={`flex overflow-hidden flex-col borde group rounded-[6px] font-[500] text-[16px] leading-[24px] text-[#101828] w-full relative items-center ${isActive && "bg-[#F9FAFB]"} transition-all linear duration-[1s]`}>
                <div className={`flex w-full relative borde items-center gap-[10px] h-[38px] cursor-pointer hover:bg-[#F9FAFB]`}>
                    <div className="h-[24px] w-[24px] relative">
                        <Image src={item.icon} alt="menu item icon" fill={true} />
                    </div>
                    <h2>{item.title}</h2>
                </div>
                {item.subTitles && (
                    <ul className={`flex flex-col w-full pl-[10px] absolute top-[20px] mt-[15px]`}>
                        {item.subTitles?.map((sub: any) => {
                            return (
                                <Fragment key={sub.name}>
                                    <SubMenuItem sub={sub} index={index} />
                                </Fragment>
                            )
                        })}
                    </ul>
                )}
            </li>
        </Link>
    )
}