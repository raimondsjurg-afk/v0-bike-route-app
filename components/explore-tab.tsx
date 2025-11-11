"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapView } from "@/components/map-view"
import { RouteList } from "@/components/route-list"
import { FilterSheet } from "@/components/filter-sheet"

export function ExploreTab() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(["foot", "bicycle"])
  const [distance, setDistance] = useState("all")
  const [difficulty, setDifficulty] = useState("all")
  const [surface, setSurface] = useState("all")
  const [hasRentals, setHasRentals] = useState("all")

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header with search and filters */}
        <div className="bg-background border-b border-border p-4 space-y-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search area, route name, POI..." className="pl-10 h-11 text-base" />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 bg-transparent"
              onClick={() => setShowFilters(true)}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>

          {/* Active filters chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {selectedVehicles.map((vehicle) => (
              <div
                key={vehicle}
                className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap"
              >
                {vehicle === "foot" && "🚶 Foot"}
                {vehicle === "bicycle" && "🚲 Bicycle"}
                {vehicle === "ebike" && "⚡ E-Bike"}
                {vehicle === "cargo" && "📦 Cargo"}
                {vehicle === "bruntor" && "🛴 Bruntor"}
              </div>
            ))}
            {distance !== "all" && (
              <div className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap">
                {distance}
              </div>
            )}
            {difficulty !== "all" && (
              <div className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap">
                {difficulty}
              </div>
            )}
            {hasRentals !== "all" && (
              <div className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap">
                🚲 Rentals {hasRentals.toLowerCase()}
              </div>
            )}
          </div>
        </div>

        {/* Map view */}
        <div className="flex-1 relative">
          <MapView />
        </div>

        {/* Bottom sheet with route list */}
        <RouteList
          filters={{
            vehicles: selectedVehicles,
            distance,
            difficulty,
            surface,
            hasRentals,
          }}
        />
      </div>

      <FilterSheet
        open={showFilters}
        onOpenChange={setShowFilters}
        selectedVehicles={selectedVehicles}
        onVehiclesChange={setSelectedVehicles}
        distance={distance}
        onDistanceChange={setDistance}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
        surface={surface}
        onSurfaceChange={setSurface}
        hasRentals={hasRentals}
        onHasRentalsChange={setHasRentals}
      />
    </>
  )
}
