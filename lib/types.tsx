

export type PageDataType = number
export type SubtitleDataType = {
    name: string; 
    id: string | number;
}
export type DashboardMenuType = {
    icon: string;
    title: string;
    desc?: string;
    link: string;
    subTitles?: SubtitleDataType[];
}
export type SettingsTabType = {
    tab: string;
}
export type RadioProps = {
    name: string;
    value: string | null;
    onChange: (value: any)=> void;
    items: {value: string, label: string, desc?: string}[]
}

export type UserRoles = {
    role: string;
    active: string;
}

export type UserRolesTableTypes = {
    name: string;
    type: string;
    created: string;
    status: string;
    users: {userID: string, avi: string}[];
}

export type AppContextType = {
    userInfo: any;
    activePage: PageDataType;
    dashboardMenuItems: DashboardMenuType[];
    handleActiveDashboardTab: (tab: number)=>void
    sideBarRef: React.RefObject<HTMLDivElement> | null;
    menuButtonRef: React.RefObject<HTMLButtonElement> | null;
    isMobileMenu: boolean;
    openSideBar:()=>void;
    closeSideBar: ()=>void;
    handleSideBar:(event: React.MouseEvent<HTMLDivElement>)=>void
}
