"use client"

import { ArrowLeft, Share2, Bookmark, MapPin, TrendingUp, Clock, Navigation, Bike, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface RouteDetailsProps {
  routeId: string
}

export function RouteDetails({ routeId }: RouteDetailsProps) {
  const router = useRouter()

  const routes: Record<string, any> = {
    "1": {
      name: "Gauja Valley Trail",
      distance: "12 km",
      duration: "2h 30min",
      elevation: "+250m",
      difficulty: "moderate",
      vehicles: ["foot", "bicycle", "ebike"],
      hasRentals: true,
      description:
        "Experience the beauty of Gauja National Park through this scenic trail. The route follows the river valley, offering stunning views of sandstone cliffs and dense forests. Perfect for nature lovers and photographers.",
      highlights: ["Lake view", "Forest trail", "Good for photos", "E-bike rental nearby"],
      images: ["/gauja-river-valley-latvia-autumn.jpg", "/forest-trail-latvia.jpg", "/sandstone-cliffs-gauja.jpg"],
    },
    "2": {
      name: "Riga Coastal Loop",
      distance: "18 km",
      duration: "3h 15min",
      elevation: "+120m",
      difficulty: "easy",
      vehicles: ["foot", "bicycle", "ebike"],
      hasRentals: true,
      description:
        "A relaxing coastal route along the Gulf of Riga, perfect for all fitness levels. Enjoy sandy beaches, pine forests, and charming seaside villages.",
      highlights: ["Beach views", "Flat terrain", "Picnic spots", "Family-friendly"],
      images: ["/riga-coastal-beach.jpg"],
    },
    "3": {
      name: "Sigulda Adventure",
      distance: "15 km",
      duration: "4h",
      elevation: "+480m",
      difficulty: "hard",
      vehicles: ["foot"],
      hasRentals: false,
      description:
        "A challenging mountain trail through Sigulda's most scenic areas. Steep climbs reward you with breathtaking panoramic views.",
      highlights: ["Mountain views", "Castle ruins", "Challenging terrain", "Adventure seekers"],
      images: ["/sigulda-mountain-trail.jpg"],
    },
  }

  const route = routes[routeId] || routes["1"]

  const availableRentals = [
    {
      id: 1,
      name: "Bruntor Cargo E-Bike",
      type: "Electric Cargo Bike",
      price: "€25/day",
      image: "/bruntor-electric-cargo-bike-red.jpg",
      features: ["80km range", "Cargo capacity: 100kg", "GPS tracking", "Waterproof storage"],
      available: true,
    },
    {
      id: 2,
      name: "B.Triton Boat-Camp-Trike",
      type: "Amphibious Electric Trike",
      price: "€45/day",
      image: "/amphibious-electric-trike-boat-camping.jpg",
      features: ["Land & water capable", "Camping setup", "Solar charging", "60km range"],
      available: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero image gallery */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-4 pb-4">
          {route.images.map((image, idx) => (
            <img
              key={idx}
              src={image || "/placeholder.svg"}
              alt={`${route.name} view ${idx + 1}`}
              className="h-64 w-80 object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-2xl font-semibold text-balance flex-1">{route.name}</h1>
            <div
              className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                route.difficulty === "easy"
                  ? "bg-green-500 text-white"
                  : route.difficulty === "moderate"
                    ? "bg-yellow-500 text-white"
                    : "bg-primary text-primary-foreground"
              }`}
            >
              {route.difficulty}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            {route.vehicles.includes("foot") && <span className="text-2xl">🚶</span>}
            {route.vehicles.includes("bicycle") && <span className="text-2xl">🚲</span>}
            {route.vehicles.includes("ebike") && <span className="text-2xl">⚡</span>}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
              <MapPin className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-semibold">{route.distance}</span>
              <span className="text-xs text-muted-foreground">Distance</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
              <Clock className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-semibold">{route.duration}</span>
              <span className="text-xs text-muted-foreground">Duration</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-secondary rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary mb-1" />
              <span className="text-sm font-semibold">{route.elevation}</span>
              <span className="text-xs text-muted-foreground">Elevation</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">About this route</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">{route.description}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Highlights</h2>
          <div className="flex flex-wrap gap-2">
            {route.highlights.map((highlight, idx) => (
              <span key={idx} className="px-3 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Vehicle Rentals */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Vehicle Rentals</h2>

          {route.hasRentals ? (
            <>
              <p className="text-sm text-muted-foreground mb-4 text-pretty">
                These vehicles are available for rental near the start of this route
              </p>

              <div className="space-y-4">
                {availableRentals.map((rental) => (
                  <div key={rental.id} className="bg-secondary rounded-lg overflow-hidden border border-border">
                    <div className="relative h-48 w-full">
                      <Image src={rental.image || "/placeholder.svg"} alt={rental.name} fill className="object-cover" />
                      {rental.available && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Available
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-base mb-1">{rental.name}</h3>
                          <p className="text-sm text-muted-foreground">{rental.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary">{rental.price}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {rental.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Button className="w-full bg-transparent" variant="outline">
                        <Bike className="mr-2 h-4 w-4" />
                        Reserve Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <div className="flex flex-col items-center text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mb-3" />
                <p className="text-base font-medium text-muted-foreground">
                  Sorry, no rental vehicles available for this route
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border">
        <Button className="w-full h-12 text-base font-semibold" size="lg">
          <Navigation className="mr-2 h-5 w-5" />
          Start Navigation
        </Button>
      </div>
    </div>
  )
}
