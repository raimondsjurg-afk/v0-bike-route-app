"use client"

import { MapPin, Locate } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapView() {
  return (
    <div className="relative w-full h-full bg-secondary">
      {/* Placeholder map - in production, use a real map library like Mapbox or Google Maps */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Map View</p>
            <p className="text-xs mt-1">Routes will appear here</p>
          </div>
        </div>

        {/* Sample route markers */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background">
            <span className="text-primary-foreground text-xs font-bold">1</span>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background">
            <span className="text-primary-foreground text-xs font-bold">2</span>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-background">
            <span className="text-primary-foreground text-xs font-bold">3</span>
          </div>
        </div>
      </div>

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
          <Locate className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
