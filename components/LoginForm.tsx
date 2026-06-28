"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IconMail, IconLock, IconLoader2 } from "@tabler/icons-react";
import { useLogin } from "@/app/hook/query/useLogin";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-md bg-background/60 border-white/10 shadow-2xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      {loginMutation.isError && (
        <div className="px-6 pb-2 text-sm text-red-500 text-center">
          {(loginMutation.error as any)?.response?.data?.message || 'Login failed. Please check your credentials.'}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-4">
          <div className="space-y-2 relative">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <div className="relative">
              <IconMail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                className="pl-10 bg-background/50 border-white/20 focus:border-primary transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2 relative">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <a href="#" className="text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <IconLock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                className="pl-10 bg-background/50 border-white/20 focus:border-primary transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 mt-2">
          <Button 
            type="submit" 
            className="w-full font-semibold shadow-lg hover:shadow-primary/25 transition-all"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? <IconLoader2 className="animate-spin w-5 h-5 mr-2" /> : null}
            {loginMutation.isPending ? "Signing In..." : "Sign In"}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="/register" className="font-semibold text-primary hover:underline transition-colors">
              Sign up
            </a>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
