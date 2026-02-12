"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserIcon, BellIcon } from "lucide-react"; // Import icons from lucide-react
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"; // Import dropdown components
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar"; // Adjust the import path as necessary
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { toast } from 'sonner'; // Import toast from sonner
import { useEffect } from 'react'; // Import useEffect

export default function Page({ user, children }) { // Include children in the parameters
    const router = useRouter(); // Initialize the router

    // Check if user is defined
    const userName = user?.name || "Demo";
    const userEmail = user?.email || "demo@example.com";
    const userAvatar = user?.avatar || "/default-avatar.png"; // Provide a default avatar path

    // Logout function
    const handleLogout = () => {
        // Perform logout logic here (e.g., clear user session, call API, etc.)
        // For example, you might want to clear user data from local storage or context
        // localStorage.removeItem('user'); // Example of clearing user data

        // Show a notification
        toast.success("You have successfully logged out!");

        // Redirect to the login page
        router.push('/login'); // Adjust the path as necessary
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 bg-white shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                    </div>

                    <div className="flex items-center gap-4 pr-4">
                        <BellIcon className="h-5 w-5 cursor-pointer" /> {/* Notification icon */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center cursor-pointer">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={userAvatar} alt={userName} />
                                        <AvatarFallback className="rounded-lg">DE</AvatarFallback>
                                    </Avatar>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{userName}</span>
                                            <span className="truncate text-xs">{userEmail}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                <main className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-[#f3f3f3]">
                    {children} {/* Render children here */}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
