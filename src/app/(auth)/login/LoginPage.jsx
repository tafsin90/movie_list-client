
"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { createAuthClient } from "better-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user)
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    // console.log(data)
    // console.log(error)
    if (data) {
      // toast
      router.push(callbackUrl);
    }
    if (error) {
      // toast
    }
  };

  const handelGoogle = async () => {
    const authClient = createAuthClient();
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#141414] px-4 py-10 text-white sm:px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,168,75,0.09),transparent_55%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Login card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#1c1c1c] shadow-[0_25px_100px_rgba(0,0,0,0.5)] sm:rounded-3xl">
        {/* Top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#e5a84b] to-transparent" />

        <div className="p-5 sm:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Login to your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Join StudyNook and find your perfect study room.
            </p>
          </div>

          <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
              className="w-full"
            >
              <Label className="text-sm font-medium text-white/75">
                Email
              </Label>

              <Input
                placeholder="john@example.com"
                className="mt-1 min-h-11 w-full rounded-lg border border-white/10 bg-[#252525] px-3 text-sm text-white outline-none transition placeholder:text-white/25 focus-within:border-[#e5a84b]/70"
              />

              <FieldError className="mt-1 text-sm text-red-400" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[a-z]/.test(value)) {
                  return "Password must contain at least one lowercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
              className="w-full"
            >
              <Label className="text-sm font-medium text-white/75">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="mt-1 min-h-11 w-full rounded-lg border border-white/10 bg-[#252525] px-3 text-sm text-white outline-none transition placeholder:text-white/25 focus-within:border-[#e5a84b]/70"
              />

              <Description className="mt-2 text-xs leading-5 text-white/35">
                Must be at least 8 characters with 1 uppercase, 1 lowercase and
                1 number
              </Description>

              <FieldError className="mt-1 text-sm text-red-400" />
            </TextField>

            {/* Buttons */}
            <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                className="min-h-11 w-full flex-1 rounded-lg bg-[#e5a84b] px-4 py-2.5 font-semibold text-[#141414] transition hover:bg-[#f0bd68] sm:w-auto"
              >
                Login
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="min-h-11 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 font-medium text-white/70 transition hover:border-white/30 hover:bg-white/5 hover:text-white sm:w-auto"
              >
                Reset
              </Button>
            </div>

            <Button
              className="min-h-11 w-full rounded-lg border border-white/10 bg-[#252525] text-sm font-medium text-white transition hover:border-[#e5a84b]/40 hover:bg-[#2d2d2d]"
              variant="tertiary"
              onClick={handelGoogle}
            >
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>

            <div
              className="mt-2 text-center text-sm text-white/45"
            >
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#e5a84b] transition hover:text-[#f0bd68] hover:underline"
              >
                Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
