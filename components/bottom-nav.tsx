"use client"

import { MapPin, Map, Circle, User, Users } from "lucide-react"
import Link from "next/link"

interface BottomNavProps {
  activeTab: "explore" | "routes" | "record" | "profile" | "tours"
}

export function BottomNav({ activeTab }: BottomNavProps) {
  const navItems = [
    { id: "explore", label: "Explore", icon: MapPin, href: "/" },
    { id: "routes", label: "Map", icon: Map, href: "/routes" },
    { id: "tours", label: "Tours", icon: Users, href: "/tours" },
    { id: "record", label: "Record", icon: Circle, href: "/record" },
    { id: "profile", label: "Profile", icon: User, href: "/profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 min-w-[60px] transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-xs ${isActive ? "font-semibold" : "font-medium"}`}>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
