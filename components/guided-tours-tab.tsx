"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, MapPin, Star } from "lucide-react"
import Image from "next/image"

const guidedTours = [
  {
    id: 1,
    name: "Gauja Valley Photography Expedition",
    guide: "Óscar Kass",
    guideExpertise: "Nature Photography Expert",
    rating: 4.9,
    reviews: 127,
    image: "/gauja-valley-forest-autumn-photography-group.jpg",
    duration: "6 hours",
    groupSize: "4-8 people",
    difficulty: "Moderate",
    price: "€89",
    nextDate: "Nov 18, 2024",
    highlights: [
      "Professional photography guidance",
      "Hidden waterfall locations",
      "Cargo e-bike included",
      "Gourmet picnic lunch",
    ],
    description:
      "Capture Latvia's most photogenic landscapes with professional guidance through Gauja National Park's hidden gems.",
  },
  {
    id: 2,
    name: "Riga to Coast Sunset E-Bike Tour",
    guide: "Anna Linde",
    guideExpertise: "Sustainable Tourism Guide",
    rating: 4.8,
    reviews: 93,
    image: "/riga-coastal-path-sunset-bike-tour-group.jpg",
    duration: "4 hours",
    groupSize: "6-12 people",
    difficulty: "Easy",
    price: "€65",
    nextDate: "Nov 15, 2024",
    highlights: ["Coastal sunset views", "Local café stops", "E-bike rental included", "Small group experience"],
    description:
      "Experience the perfect blend of urban exploration and coastal beauty on this relaxing e-bike journey from Riga to the seaside.",
  },
  {
    id: 3,
    name: "Forest Wellness & Hiking Retreat",
    guide: "Emma Virtanen",
    guideExpertise: "Wellness & Nature Guide",
    rating: 5.0,
    reviews: 64,
    image: "/latvian-forest-wellness-hiking-group-meditation.jpg",
    duration: "5 hours",
    groupSize: "4-10 people",
    difficulty: "Easy",
    price: "€75",
    nextDate: "Nov 20, 2024",
    highlights: ["Forest bathing practices", "Guided meditation", "Local organic lunch", "Cultural storytelling"],
    description:
      "Reconnect with nature through mindful walking, forest bathing, and authentic Latvian cultural experiences in pristine woodlands.",
  },
]

export function GuidedToursTab() {
  return (
    <div className="p-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">Guided Tours</h1>
        <p className="text-muted-foreground leading-relaxed">
          Join expert local guides for immersive experiences combining nature, culture, and sustainable mobility
        </p>
      </div>

      <div className="space-y-4">
        {guidedTours.map((tour) => (
          <Card key={tour.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
              <Badge className="absolute top-3 right-3 bg-primary text-white font-semibold">{tour.difficulty}</Badge>
            </div>

            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground leading-tight">{tour.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-foreground">{tour.guide}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{tour.guideExpertise}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">{tour.rating}</span>
                  <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{tour.description}</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{tour.nextDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold text-primary">{tour.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Tour Highlights</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">Book Tour</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
