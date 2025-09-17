"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Server,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Zap,
  FileText,
  Calendar,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <nav className="fixed bg-white/70 backdrop-blur-2xl w-full z-20 shadow-lg p-4 flex items-center justify-between ">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg shadow-lg">
          <Server className="w-6 h-6 text-white" />
        </div>
        {
          <div className="md:flex hidden items-center gap-6 outfit pr-2">
            <Link href={""}>About</Link>
            <Link href={""}>Features</Link>
            <Link href={""}>Contact</Link>
            <Link
              href={"login"}
              className="border px-6 py-2 rounded-lg bg-black text-white"
            >
              Sign in
            </Link>
          </div>
        }
        {
          <div className="md:hidden">
            <Menu onClick={() => setNavIsOpen(true)} />
          </div>
        }
      </nav>

      <div
        className={`
          fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden
          transition-all duration-300 ease-in-out
          ${navIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setNavIsOpen(false)}
      />

      <div
        className={`fixed right-0 w-64 bg-white shadow-2xl h-full z-50 md:hidden transform transition-transform ease-in-out duration-300 ${
          navIsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <X
          className="absolute right-0 m-4 border p-1 rounded-full bg-black text-white cursor-pointer"
          size={35}
          onClick={() => setNavIsOpen(false)}
        />
        <div className="mt-18 flex flex-col items-center gap-6 p-4 outfit text-lg">
          <Link href={""} className="transition ease-in-out duration-300 hover:scale-110">About</Link>
          <Link href={""} className="transition ease-in-out duration-300 hover:scale-110">Features</Link>
          <Link href={""} className="transition ease-in-out duration-300 hover:scale-110">Contact</Link>
          <Link
            href={"login"}
            className="border px-6 py-2 rounded-lg bg-black text-white"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="pt-30 relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-16">
        <div className="backdrop-blur-sm bg-gradient-to-br from-black via-gray-950 to-gray-800 rounded-3xl p-12 text-center">
          {/* Main content */}
          <div className="relative z-10 space-y-8">
            {/* Logo/Brand area */}
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl mb-4 shadow-lg">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-medium text-white text-balance outfit">
                ServeFlow
              </h1>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-300 font-[family-name:var(--font-outfit)] text-balance">
                Streamlining Our IT Unit's Workflows
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-300 opensans leading-relaxed text-pretty max-w-lg mx-auto">
                Automating paperwork, sharing feedback, and managing tasks with
                ease.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3  py-6">
              <div className="flex flex-col items-center space-y-2 p-4">
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 opensans">
                  Task Management
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4">
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 opensans">
                  Asset Tracking
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4">
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 opensans">
                  Team Collaboration
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-gradient-to-br from-blue-600 to-blue-500 text-black hover:bg-[#97cff5c9] hover:text-black font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-[family-name:var(--font-outfit)] text-lg group"
                >
                  Continue to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white urban">
              Everything You Need to Manage IT Operations
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 outfit max-w-2xl mx-auto">
              Built specifically for our church IT ministry team to streamline
              workflows and improve collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Task Management
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Create, assign, and track IT tasks with progress monitoring
                  and deadline management.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Asset Tracking
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Monitor church equipment, software licenses, and IT resources
                  in one centralized system.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Meeting Notes
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Document team meetings, decisions, and action items with easy
                  sharing and follow-up.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Feedback System
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Collect and manage feedback from church staff and volunteers
                  on IT services.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Document Management
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Store and organize IT documentation, procedures, and knowledge
                  base articles.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Secure Access
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Role-based access control ensures sensitive IT information
                  stays protected.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="p-12 bg-gradient-to-r from-sky-500/10 to-sky-600/10 dark:from-sky-400/10 dark:to-sky-500/10 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white urban">
              Why Our Team Loves ServeFlow
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/50 rounded-2xl flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Save Time
                </h4>
                <p className="text-gray-600 dark:text-gray-300 opensans">
                  Reduce administrative overhead by 60% with automated workflows
                  and centralized information.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/50 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Increase Efficiency
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-[family-name:var(--font-inter)]">
                  Streamlined processes help our team focus on serving the
                  church community better.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/50 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-[family-name:var(--font-outfit)]">
                  Better Collaboration
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-[family-name:var(--font-inter)]">
                  Keep everyone on the same page with shared dashboards and
                  real-time updates.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="border border-black flex flex-col items-center justify-center p-4 md:py-8 rounded-xl bg-black text-white gap-2 text-center">
          <h3 className="urban text-3xl font-bold">Need Help?</h3>
          <p className="opensans text-white/75">
            If you have issues logging in or using the system, please reach out
            to the IT support team.
          </p>
          <button className="mt-4 px-6 py-2 rounded-lg bg-white text-black outfit font-bold">
            Contact Support
          </button>
        </div>

        {/* Footer */}
        <div className="text-center space-y-4 pb-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-[family-name:var(--font-inter)]">
            Designed with ❤️ for our church IT ministry team
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-[family-name:var(--font-inter)]">
            ServeFlow v1.0 • Built for internal use
          </p>
        </div>
      </div>
    </div>
  );
}
