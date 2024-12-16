import { DashboardMenuType, SettingsTabType, UserRoles, UserRolesTableTypes } from "./types"

const dashboardMenu:DashboardMenuType[] = [
    {
        icon:"/images/home.svg",
        title:"Home",
        link:"/",
        desc:"View general information here"
    },
    {
        icon:"/images/bar-chart-2.svg",
        title:"Dashboard",
        link:"/dashboard",
        desc:"View dashboard information here"
    },
    {
        icon:"/images/3-layers.svg",
        title:"Projects",
        link:"/projects",
        desc:"View project information here"
    },
    {
        icon:"/images/check-square.svg",
        title:"Task",
        link:"/task",
        desc:"View task information here"
    },
    {
        icon:"/images/flag.svg",
        title:"Reporting",
        link:"/reporting",
        desc:"View reporting information here"
    },
    {
        icon:"/images/users.svg",
        title:"Users",
        link:"/users",
        subTitles: [
        ]
    },
    {
        icon:"/images/life-buoy.svg",
        title:"Support",
        link:"/support",
        desc:"View general information here"
    },
    {
        icon:"/images/settings.svg",
        title:"Settings",
        link:"/settings",
        desc:"Manage your team and preferences here"
    }
]

const settingsTabMenu:SettingsTabType[] = [
    {
        tab: "My Details"
    },
    {
        tab: "Profile"
    },
    {
        tab: "Password"
    },
    {
        tab: "Team"
    },
    {
        tab: "Plan"
    },
    {
        tab: "Roles"
    },
    {
        tab: "Notifications"
    },
    {
        tab: "Integrations"
    },
    {
        tab: "API"
    },
]

const userAdminRoles: UserRoles[] = [
    {
        role: "Superadmin",
        active:"06/2023",
    },
    {
        role: "Developeradmin",
        active:"06/2023",
    },
    {
        role: "Supportadmin",
        active:"06/2023",
    },
] 

const testUsers:UserRolesTableTypes[] = [
    {
        name: "Superadmin",
        type: "DEFAULT",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Merchantadmin",
        type: "DEFAULT",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Supportadmin",
        type: "CUSTOM",
        created:"Jan 1, 2023",
        status:"inactive",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Sales personnel",
        type: "CUSTOM",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Deputy pales personnel",
        type: "CUSTOM",
        created:"Jan 1, 2023",
        status:"inactive",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Developeradmin",
        type: "SYSTEM-CUSTOM",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
        ]
    },
    {
        name: "Developer-basic",
        type: "SYSTEM-CUSTOM",
        created:"Jan 1, 2023",
        status:"active",
        users: [
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            },
            {
                userID: "3",
                avi: "/images/avone.svg"
            }
        ]
    },
]



export {dashboardMenu, settingsTabMenu, userAdminRoles, testUsers}