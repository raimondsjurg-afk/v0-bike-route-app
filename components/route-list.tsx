"use client"

import { useState } from "react"
import { ChevronUp, TrendingUp, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const routes = [
  {
    id: 1,
    name: "Gauja Valley Trail",
    distance: "12 km",
    duration: "2h 30min",
    elevation: "+250m",
    difficulty: "moderate",
    vehicles: ["foot", "bicycle", "ebike"],
    hasRentals: true,
    tags: ["Forest trail", "River views", "E-bike rental available"],
    image: "/forest-trail-with-river-views-in-latvia.jpg",
  },
  {
    id: 2,
    name: "Riga Coastal Loop",
    distance: "8 km",
    duration: "1h 45min",
    elevation: "+45m",
    difficulty: "easy",
    vehicles: ["foot", "bicycle", "ebike", "cargo", "bruntor"],
    hasRentals: true,
    tags: ["Beach views", "Paved path", "Bruntor friendly"],
    image: "/coastal-path-in-riga-latvia.jpg",
  },
  {
    id: 3,
    name: "Sigulda Adventure",
    distance: "18 km",
    duration: "4h 15min",
    elevation: "+420m",
    difficulty: "hard",
    vehicles: ["foot", "bicycle"],
    hasRentals: false,
    tags: ["Mountain trail", "Castle views", "Photo spots"],
    image: "/mountain-trail-near-castle-in-sigulda.jpg",
  },
]

export function RouteList() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-2xl transition-all duration-300 ${
        expanded ? "h-[70%]" : "h-auto"
      }`}
    >
      {/* Drag handle */}
      <button onClick={() => setExpanded(!expanded)} className="w-full pt-4 pb-2 flex justify-center">
        <div className="w-12 h-1.5 bg-border rounded-full" />
      </button>

      {/* Header */}
      <div className="px-4 pb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-balance">{routes.length} routes found</h2>
        <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="text-muted-foreground">
          {expanded ? "Show less" : "Show all"}
          <ChevronUp className={`ml-1 h-4 w-4 transition-transform ${expanded ? "" : "rotate-180"}`} />
        </Button>
      </div>

      {/* Route cards */}
      <div className={`px-4 pb-4 space-y-4 ${expanded ? "overflow-y-auto max-h-[calc(100%-80px)]" : ""}`}>
        {routes.map((route) => (
          <Link key={route.id} href={`/route/${route.id}`}>
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
              <div className="relative h-40">
                <img src={route.image || "/placeholder.svg"} alt={route.name} className="w-full h-full object-cover" />
                <div
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    route.difficulty === "easy"
                      ? "bg-green-500 text-white"
                      : route.difficulty === "moderate"
                        ? "bg-yellow-500 text-white"
                        : "bg-primary text-primary-foreground"
                  }`}
                >
                  {route.difficulty}
                </div>
                {route.hasRentals && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                    Rentals
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-base text-balance mb-2">{route.name}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {route.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {route.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    {route.elevation}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {route.vehicles.includes("foot") && <span className="text-lg">🚶</span>}
                  {route.vehicles.includes("bicycle") && <span className="text-lg">🚲</span>}
                  {route.vehicles.includes("ebike") && <span className="text-lg">⚡</span>}
                  {route.vehicles.includes("cargo") && <span className="text-lg">📦</span>}
                  {route.vehicles.includes("bruntor") && <span className="text-lg">🛴</span>}
                </div>

                <div className="flex flex-wrap gap-2">
                  {route.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
