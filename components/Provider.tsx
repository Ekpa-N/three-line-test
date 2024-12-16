"use client";
import React, { createContext, useState, useEffect, useLayoutEffect, useRef } from "react";
import { AppContextType, DashboardMenuType, PageDataType } from "@/lib/types"
import { usePathname } from "next/navigation"
import { dashboardMenu } from "@/lib/constants";


export const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<any>([])
    const [activePage, setActivePage] = useState<PageDataType>(0)
    const [dashboardMenuItems, setDashboardMenuItems] = useState<DashboardMenuType[]>(dashboardMenu)
    const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)
    const sideBarRef: React.RefObject<HTMLDivElement> = useRef(null)
    const menuButtonRef: React.RefObject<HTMLButtonElement> = useRef(null)

    const contextValue: AppContextType = {
        userInfo,
        activePage,
        dashboardMenuItems,
        handleActiveDashboardTab,
        sideBarRef,
        isMobileMenu,
        openSideBar,
        closeSideBar,
        menuButtonRef,
        handleSideBar
    }

    useEffect(() => {
        simulateUserData()
    }, [])

    async function simulateUserData() {
        await holdPlay(5000)
        const newDashboardMenu = dashboardMenu.map((menu: any) => {
            if (menu.title == "Users") {
                const newUserMenu = {
                    ...menu, subTitles: [
                        {
                            name: "Ekpa",
                            id: 1
                        },
                        {
                            name: "Emmanuel",
                            id: 2
                        },
                        {
                            name: "Ntan",
                            id: 3
                        },
                    ]
                }
                return newUserMenu
            }
            return menu
        })
        // debugger
        setDashboardMenuItems(newDashboardMenu)
    }

    function holdPlay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function checkMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor;
        return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    }



    function handleResize() {
        setIsMobileMenu(false)
    }

    function openSideBar() { setIsMobileMenu(true) }
    function closeSideBar() { setIsMobileMenu(false) }

    useEffect(() => {
        const isMobileDevice = checkMobileDevice()
        if (!isMobileDevice) {
            window.addEventListener("resize", handleResize)
        }
        return () => {
            if (!isMobileDevice) {
                window.removeEventListener("resize", handleResize);
            }
        }
    }, [])



    function handleSideBar(event: React.MouseEvent<HTMLDivElement>) {
        if (menuButtonRef.current && menuButtonRef.current.contains(event.target as Node)) {
            // debugger
            if (isMobileMenu) {
                console.log("current state:", isMobileMenu)
            }
            setIsMobileMenu(!isMobileMenu)
            return
        }
        if (sideBarRef.current && sideBarRef.current.contains(event.target as Node)) {
            return
        }
        setIsMobileMenu(false)
    }

    function handleActiveDashboardTab(tab: number): void {
        setActivePage(tab)
    }

    return (
        <AppContext.Provider value={contextValue}>
            {isLoading ? (
                <>
                    <div>
                        loading...
                    </div>
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </AppContext.Provider>
    );
};

export default AppProvider
