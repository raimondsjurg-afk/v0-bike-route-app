"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"

interface FilterSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedVehicles: string[]
  onVehiclesChange: (vehicles: string[]) => void
  distance: string
  onDistanceChange: (distance: string) => void
  difficulty: string
  onDifficultyChange: (difficulty: string) => void
  surface: string
  onSurfaceChange: (surface: string) => void
}

export function FilterSheet({
  open,
  onOpenChange,
  selectedVehicles,
  onVehiclesChange,
  distance,
  onDistanceChange,
  difficulty,
  onDifficultyChange,
  surface,
  onSurfaceChange,
}: FilterSheetProps) {
  const vehicles = [
    { id: "foot", label: "Foot", icon: "🚶" },
    { id: "bicycle", label: "Bicycle", icon: "🚲" },
    { id: "ebike", label: "E-Bike", icon: "⚡" },
    { id: "cargo", label: "Cargo", icon: "📦" },
    { id: "bruntor", label: "Bruntor", icon: "🛴" },
  ]

  const distances = ["all", "Short (< 5km)", "Medium (5-15km)", "Long (> 15km)"]
  const difficulties = ["all", "Easy", "Moderate", "Hard"]
  const surfaces = ["all", "Asphalt", "Gravel", "Off-road"]

  const toggleVehicle = (vehicleId: string) => {
    if (selectedVehicles.includes(vehicleId)) {
      onVehiclesChange(selectedVehicles.filter((v) => v !== vehicleId))
    } else {
      onVehiclesChange([...selectedVehicles, vehicleId])
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Filters</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 overflow-y-auto max-h-[calc(85vh-120px)] pb-4">
          {/* Vehicle selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Vehicle Type</Label>
            <div className="grid grid-cols-2 gap-3">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => toggleVehicle(vehicle.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedVehicles.includes(vehicle.id) ? "border-primary bg-accent" : "border-border bg-card"
                  }`}
                >
                  <div className="text-2xl mb-1">{vehicle.icon}</div>
                  <div className="text-sm font-medium">{vehicle.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Distance */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Distance</Label>
            <div className="grid grid-cols-2 gap-2">
              {distances.map((dist) => (
                <button
                  key={dist}
                  onClick={() => onDistanceChange(dist)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    distance === dist ? "border-primary bg-accent text-accent-foreground" : "border-border bg-card"
                  }`}
                >
                  {dist === "all" ? "All" : dist}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Difficulty</Label>
            <div className="grid grid-cols-2 gap-2">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => onDifficultyChange(diff)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    difficulty === diff ? "border-primary bg-accent text-accent-foreground" : "border-border bg-card"
                  }`}
                >
                  {diff === "all" ? "All" : diff}
                </button>
              ))}
            </div>
          </div>

          {/* Surface */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Surface Type</Label>
            <div className="grid grid-cols-2 gap-2">
              {surfaces.map((surf) => (
                <button
                  key={surf}
                  onClick={() => onSurfaceChange(surf)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    surface === surf ? "border-primary bg-accent text-accent-foreground" : "border-border bg-card"
                  }`}
                >
                  {surf === "all" ? "All" : surf}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => {
                onVehiclesChange(["foot", "bicycle"])
                onDistanceChange("all")
                onDifficultyChange("all")
                onSurfaceChange("all")
              }}
            >
              Reset
            </Button>
            <Button className="flex-1" onClick={() => onOpenChange(false)}>
              Apply Filters
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
