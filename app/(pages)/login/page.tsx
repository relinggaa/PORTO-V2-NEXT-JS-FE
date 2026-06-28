"use client";

import React from "react";
import { LoginForm } from "@/components/LoginForm";
import NavbarLanding from "@/components/ui/NavbarLanding";
import { IconStars } from "@tabler/icons-react";


export default function LoginPage() {
    return (
        <div className="dark min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
            {/* Include the Navbar if desired, or skip it for a standalone auth page */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-chart-1 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-chart-2 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="fixed top-0 w-full z-50">
                <NavbarLanding />
            </div>

            <div className="flex-1 flex flex-col md:flex-row w-full z-10 pt-20">
                {/* Left Side (Branding/Graphic) */}
                <div className="hidden md:flex md:w-1/2 flex-col justify-center items-start p-12 lg:p-24 relative">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
                            <IconStars className="w-4 h-4" />
                            <span className="text-sm font-medium">Welcome to the future</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Unlock Your <br /> Creative Potential.
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-md">
                            Sign in to access your personalized dashboard, manage your portfolio, and discover new opportunities.
                        </p>
                    </div>
                </div>

                {/* Right Side (Form) */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}