"use client";

import * as React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Monitor, FileText, BarChart, AlertCircle, FileText as ReportsIcon, Settings } from "lucide-react";

// Sample Data
const data = {
    navMain: [
        { title: "Dashboard", href: "/dashboard", icon: <LayoutDashboard /> },
        { title: "Monitoring", href: "/dashboard/monitoring", icon: <Monitor /> },
        { title: "Assets", href: "/dashboard/assets", icon: <FileText /> },
        { title: "Analytics", href: "/dashboard/analytics", icon: <BarChart /> },
        { title: "Alerts", href: "/dashboard/alerts", icon: <AlertCircle /> },
        { title: "Reports", href: "/dashboard/reports", icon: <ReportsIcon /> },
        { title: "Settings", href: "/dashboard/settings", icon: <Settings /> },
    ],
};

export function AppSidebar(props) {
    // Use collapsed from props or default to false
    const collapsed = props.collapsed ?? false;

    return (
        <Sidebar collapsible="icon" {...props} className="sidebar">
            <SidebarHeader  className="p-4">
                <div className="flex justify-center">
                    {collapsed ? (
                        <img src="/EcoGrid-Logo-Icon.svg" alt="Logo Icon" style={{ width: 32, height: 32, margin: "auto" }} />
                    ) : (
                        <img src="/EcoGrid Systems Logo.svg" alt="Logo" style={{ width: '80%', height: 'auto' }} />
                    )}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup className="p-4">
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.href} className="flex items-center gap-2">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
