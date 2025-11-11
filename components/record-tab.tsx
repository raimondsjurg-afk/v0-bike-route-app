"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, StopCircle, Camera, MapPin, PersonStanding, Bike, Zap, Package } from "lucide-react"
import { useState } from "react"

export function RecordTab() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null)

  const vehicles = [
    { id: "walking", name: "Walking", icon: PersonStanding },
    { id: "bicycle", name: "Bicycle", icon: Bike },
    { id: "ebike", name: "E-Bike", icon: Zap },
    { id: "bruntor", name: "Bruntor", icon: Package },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background border-b border-border px-4 py-4">
        <h1 className="text-2xl font-semibold text-foreground">Record Route</h1>
        <p className="text-sm text-muted-foreground mt-1">Create your own route and share with others</p>
      </header>

      <div className="p-4 space-y-4">
        {!isRecording && !selectedVehicle && (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-center">Choose Your Vehicle</h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Select how you'll be traveling on this route
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {vehicles.map((vehicle) => {
                    const Icon = vehicle.icon
                    return (
                      <Button
                        key={vehicle.id}
                        variant="outline"
                        className="h-24 flex-col gap-2 hover:bg-primary hover:text-white hover:border-primary bg-transparent"
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <Icon className="h-8 w-8" />
                        <span className="font-medium">{vehicle.name}</span>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedVehicle && (
          <>
            {/* Selected Vehicle Display */}
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {(() => {
                    const vehicle = vehicles.find((v) => v.id === selectedVehicle)
                    if (!vehicle) return null
                    const Icon = vehicle.icon
                    return (
                      <>
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Vehicle</div>
                          <div className="font-semibold">{vehicle.name}</div>
                        </div>
                      </>
                    )
                  })()}
                </div>
                {!isRecording && (
                  <Button variant="ghost" size="sm" onClick={() => setSelectedVehicle(null)}>
                    Change
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Recording Status */}
            <Card className={isRecording ? "border-primary bg-primary/5" : ""}>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <Badge variant={isRecording ? "default" : "secondary"} className="px-4 py-1">
                      {isRecording ? (isPaused ? "PAUSED" : "RECORDING") : "READY"}
                    </Badge>
                    <div className="text-5xl font-semibold text-foreground">00:00:00</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-semibold">0.0</div>
                      <div className="text-xs text-muted-foreground">km</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">0</div>
                      <div className="text-xs text-muted-foreground">elevation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">0</div>
                      <div className="text-xs text-muted-foreground">photos</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Control Buttons */}
            <div className="flex gap-3">
              {!isRecording ? (
                <Button
                  className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white"
                  onClick={() => setIsRecording(true)}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Recording
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="flex-1 h-14 bg-transparent"
                    onClick={() => setIsPaused(!isPaused)}
                  >
                    {isPaused ? (
                      <>
                        <Play className="h-5 w-5 mr-2" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Pause className="h-5 w-5 mr-2" />
                        Pause
                      </>
                    )}
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1 h-14"
                    onClick={() => {
                      setIsRecording(false)
                      setIsPaused(false)
                    }}
                  >
                    <StopCircle className="h-5 w-5 mr-2" />
                    Stop
                  </Button>
                </>
              )}
            </div>

            {isRecording && (
              <Button variant="outline" className="w-full h-12 bg-transparent">
                <Camera className="h-5 w-5 mr-2" />
                Take Photo
              </Button>
            )}
          </>
        )}

        {/* Recent Routes */}
        <div className="pt-4">
          <h3 className="font-semibold text-lg mb-3">Recent Recordings</h3>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Morning Forest Loop</div>
                    <div className="text-sm text-muted-foreground">12.5 km • 2h 15m</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
