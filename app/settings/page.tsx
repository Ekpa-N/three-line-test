"use client"
import Image from "next/image";
import { settingsTabMenu, userAdminRoles } from "@/lib/constants";
import { Fragment, useEffect, useState } from "react";
import { SettingsTabType, UserRoles } from "@/lib/types";
import EnhancedTable from "@/components/TableContainer";
import { testUsers } from '@/lib/constants';
import axios from "axios";

export default function Settings() {
    const [activeTab, setActiveTab] = useState<number>(5)
    const [mail, setMail] = useState<string>("primary")
    const [activeRole, setActiveRole] = useState<string>("")
    const [userRoles, setUserRoles] = useState<[]>([])

    useEffect(() => {
        async function fetchRoles() {
            try {
                const rolesResponse = await axios.get("https://three-line-test-server.vercel.app/roles")
                console.log("response: ", rolesResponse)

                if (rolesResponse.status == 200) {
                    setUserRoles(rolesResponse.data.roles)
                }
                else {
                    setUserRoles([])
                }
            }
            catch (error: any) {
                setUserRoles([])
            }
        }
        fetchRoles()
    }, [])

    function handleActiveTab(idx: number) {
        setActiveTab(() => {
            return idx
        })
    }
    function handleActiveRole(role: string) {
        setActiveRole(() => {
            return role
        })
    }

    function handleMailSelection(mail: string) {
        // console.log("")
        setMail(mail)
    }

    return (
        <div className="flex flex-col px-[5px]">
            <ul className="w-full border-[#D0D5DD] overflow-x-auto flex">
                {settingsTabMenu.map((tab: SettingsTabType, index: number) => {
                    if (index == 0) {
                        return (
                            <button onClick={() => { handleActiveTab(index) }} className={`text-[14px] ${activeTab == index && "bg-[#F9FAFB]"} hover:bg-[#F9FAFB] border-t border-b text-center cursor-pointer min-w-[101px] py-[9px] border-r border-l rounded-l-[10px] border-[#D0D5DD] px-[16px] leading-[20px] font-[500]`}>{tab.tab}</button>
                        )
                    }
                    if (index == settingsTabMenu.length - 1) {
                        return (
                            <button onClick={() => { handleActiveTab(index) }} className={`text-[14px] ${activeTab == index && "bg-[#F9FAFB]"} hover:bg-[#F9FAFB] border-t border-b text-center cursor-pointer min-w-[101px] py-[9px] border-r rounded-r-[10px] border-[#D0D5DD] px-[16px] leading-[20px] font-[500]`}>{tab.tab}</button>
                        )
                    }
                    return (
                        <button onClick={() => { handleActiveTab(index) }} className={`text-[14px] ${activeTab == index && "bg-[#F9FAFB]"} hover:bg-[#F9FAFB] border-t border-b text-center cursor-pointer min-w-[101px] py-[9px] border-r border-[#D0D5DD] px-[16px] leading-[20px] font-[500]`}>{tab.tab}</button>
                    )
                })}
            </ul>
            <div className="flex flex-col text-[#667085]  mt-[20px] pb-[20px] border-b border-[#EAECF0]">
                <h2 className="font-[500] text-[18px] leading-[28px]">User Roles</h2>
                <h2 className="font-[400] text-[14px] leading-[20px]">Update your roles details and information.</h2>
            </div>

            <div className="flex flex-col md:flex-row pb-[20px] border-b border-[#EAECF0] pt-[20px] gap-[20px]">
                <div className="flex borde flex-col text-[#667085] borde min-w-[135px]">
                    <h2 className="font-[500] text-[14px] leading-[20px]">Connected email</h2>
                    <h2 className="font-[400] text-[14px] leading-[20px]">Select role account</h2>
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                    <div className="flex flex-col borde">
                        <div className="gap-[10px] flex items-center">
                            <div onClick={() => { handleMailSelection("primary") }} className={`w-[16px] h-[16px] flex items-center justify-center border border-[#7F56D9] rounded-[50%]`}>
                                <div className={`w-[6px] h-[6px] ${mail == "alternate" && "hidden"} border bg-[#7F56D9] rounded-[50%]`}></div>
                            </div>
                            <input
                                name="mail"
                                type="radio"
                                value={""}
                                id="primary"
                                className="hidden"
                                onChange={() => { handleMailSelection("primary") }}
                                checked={mail == "primary"}
                            />
                            <label className="font-[500] text-[14px] leading-[20px]" htmlFor="primary">My account email</label>
                        </div>
                        <h2 className="font-[400] text-[14px] leading-[20px] ml-[26px]">olivia@untitledui.com</h2>

                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <div className="gap-[10px] borde items-center flex">
                            <div onClick={() => { handleMailSelection("alternate") }} className={`w-[16px] h-[16px] flex items-center justify-center border border-[#7F56D9] rounded-[50%]`}>
                                <div className={`w-[6px] h-[6px] ${mail == "primary" && "hidden"} border bg-[#7F56D9] rounded-[50%]`}></div>
                            </div>
                            <input
                                name="mail"
                                type="radio"
                                value={""}
                                id="alternate"
                                className="hidden"
                                onChange={() => { handleMailSelection("alternate") }}
                                checked={mail == "alternate"}

                            />
                            <label className="font-[500] text-[14px] leading-[20px]" htmlFor="alternate">An alternate email</label>
                        </div>
                        <div className="flex relative pl-[26px] w-full lg:w-[400px]">
                            <div className="flex relative gap-[10px] h-[44px] items-center pl-[10px] pr-[5px] rounded-[8px] bg-white border border-[#EAECF0] w-full lg:w-[400px]">
                                <div className="relative w-[20px] border h-[20px]">
                                    <Image src="/images/mail-one.svg" alt="" fill={true} />
                                </div>
                                <input type="text" className="bg-[inherit] grow h-[20px] borde outline-none active:bg-[#EAECF0]" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row pb-[20px] border-b border-[#EAECF0] pt-[20px] gap-[20px]">
                <div className="flex borde flex-col text-[#667085]">
                    <h2 className="font-[500] text-[14px] leading-[20px]">Active Role</h2>
                    <h2 className="font-[400] text-[14px] leading-[20px]">Select active role available for user.</h2>
                </div>
                <div className="flex flex-col gap-[12px] borde md:grow">
                    {userAdminRoles.map((role: UserRoles, index: number) => {
                        return (
                            <Fragment key={role.role}>
                                <input
                                    name="roles"
                                    type="radio"
                                    value={""}
                                    id={role.role}
                                    className="hidden"
                                    onChange={() => { handleActiveRole(role.role) }}
                                    checked={activeRole == role.role}

                                />

                                <label htmlFor={role.role} className={`flex ${activeRole == role.role && "bg-[#d6bbfb4d]"} ${activeRole != role.role && "bg-[white]"} justify-between w-full h-[100px] cursor-pointer p-[16px] rounded-[10px] border hover:bg-[#d6bbfb4d]`}>
                                    <div className="flex gap-[10px]">
                                        <div className="border w-[45px] h-[32px] rounded-[5px] flex items-center justify-center">
                                            <div className="relative w-[22px] h-[18px]">
                                                <Image src="/images/users.svg" alt="" fill={true} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col borde">
                                            <h2 className={`font-[500] text-[14px] leading-[20px] ${activeRole == role.role && "text-[#53389E]"}`}>{role.role}</h2>
                                            <h2 className={`font-[400] text-[14px] ${activeRole == role.role && "text-[#7F56D9]"} leading-[20px]`}>Last active <span>{role.active}</span></h2>
                                            <div className="flex gap-[15px]">
                                                <button className={`font-[500] text-[14px] ${activeRole == role.role && "text-[#9E77ED]"} leading-[20px]`}>Set as default</button>
                                                <button className={`font-[500] text-[14px] ${activeRole == role.role && "text-[#6941C6]"} leading-[20px]`}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`h-[16px] w-[16px]  ${activeRole == role.role && "bg-[#7F56D9]"} rounded-[50%] border-2 flex justify-center items-center`}>
                                        <div className={`relative w-[10px] h-[10px] ${activeRole != role.role && "hidden"}`}>
                                            <Image src="/images/check.svg" alt="" fill={true} />
                                        </div>
                                    </div>
                                </label>
                            </Fragment>
                        )
                    })}
                </div>
            </div>

            <div className="mt-[20px]">
                <EnhancedTable roleUsers={userRoles} />
            </div>


        </div>
    )
}
