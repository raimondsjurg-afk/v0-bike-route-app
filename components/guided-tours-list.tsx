"use client"

import { Calendar, Users, Clock, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const guidedTours = [
  {
    id: "guided-1",
    name: "Gauja Valley Photography Expedition",
    guide: "Māra Kalniņa",
    rating: 4.9,
    reviews: 127,
    image: "/gauja-valley-forest-with-professional-photographer.jpg",
    duration: "6 hours",
    groupSize: "4-8 people",
    price: "€85",
    nextDate: "May 15, 2025",
    difficulty: "Moderate",
    includes: ["Professional guide", "Equipment rental", "Lunch", "Transport"],
    description: "Explore hidden gems of Gauja Valley with a professional nature photographer.",
  },
  {
    id: "guided-2",
    name: "Riga Coastal E-Bike Adventure",
    guide: "Jānis Bērziņš",
    rating: 4.8,
    reviews: 93,
    image: "/latvia-coastal-path-with-e-bikes-and-baltic-sea.jpg",
    duration: "4 hours",
    groupSize: "6-12 people",
    price: "€65",
    nextDate: "May 12, 2025",
    difficulty: "Easy",
    includes: ["E-bike rental", "Guide", "Snacks", "Safety gear"],
    description: "Ride along the stunning Baltic coastline with stops at local fishing villages.",
  },
  {
    id: "guided-3",
    name: "Sigulda Forest Wellness Walk",
    guide: "Laura Ozoliņa",
    rating: 5.0,
    reviews: 68,
    image: "/peaceful-forest-trail-in-latvia-with-autumn-colors.jpg",
    duration: "3 hours",
    groupSize: "4-10 people",
    price: "€45",
    nextDate: "May 10, 2025",
    difficulty: "Easy",
    includes: ["Certified guide", "Herbal tea", "Nature journal"],
    description: "Mindful forest bathing experience with a certified wellness guide.",
  },
  {
    id: "guided-4",
    name: "Bruntor Cargo Adventure - Family Tour",
    guide: "Andris Liepa",
    rating: 4.7,
    reviews: 54,
    image: "/family-riding-cargo-bikes-on-rural-latvia-path.jpg",
    duration: "5 hours",
    groupSize: "2-6 families",
    price: "€95",
    nextDate: "May 18, 2025",
    difficulty: "Easy",
    includes: ["Bruntor rental", "Guide", "Picnic basket", "Kids activities"],
    description: "Family-friendly adventure exploring rural Latvia with electric cargo bikes.",
  },
]

export function GuidedToursList() {
  return (
    <div className="bg-background border-t border-border rounded-t-3xl shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Guided Tours</h2>
          <Badge variant="secondary" className="font-medium">
            {guidedTours.length} available
          </Badge>
        </div>
      </div>

      <div className="overflow-y-auto max-h-[45vh] px-4 py-3 space-y-3">
        {guidedTours.map((tour) => (
          <Link key={tour.id} href={`/guided-tour/${tour.id}`}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative h-40 w-full">
                <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-bold">
                  {tour.price}
                </div>
                <Badge className="absolute top-2 left-2 bg-background/90 text-foreground border">
                  {tour.difficulty}
                </Badge>
              </div>

              <div className="p-3 space-y-2">
                <div>
                  <h3 className="font-semibold text-base leading-tight">{tour.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tour.description}</p>
                </div>

                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                </div>

                <div className="text-sm text-muted-foreground">
                  Guide: <span className="font-medium text-foreground">{tour.guide}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{tour.nextDate}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
