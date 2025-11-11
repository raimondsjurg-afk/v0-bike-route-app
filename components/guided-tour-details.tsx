"use client"

import { ArrowLeft, Calendar, Users, Clock, Star, CheckCircle2, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface GuidedTourDetailsProps {
  tourId: string
}

const tourData: Record<string, any> = {
  "guided-1": {
    name: "Gauja Valley Photography Expedition",
    guide: {
      name: "Māra Kalniņa",
      bio: "Professional nature photographer with 15+ years experience guiding tours in Latvia",
      rating: 4.9,
      tours: 127,
    },
    rating: 4.9,
    reviews: 127,
    images: ["/gauja-valley-forest-with-professional-photographer.jpg", "/latvia-river-landscape-sunset.jpg", "/sandstone-cliffs-gauja-national-park.jpg"],
    duration: "6 hours",
    groupSize: "4-8 people",
    price: "€85",
    difficulty: "Moderate",
    nextDates: ["May 15, 2025", "May 22, 2025", "May 29, 2025"],
    description:
      "Join professional nature photographer Māra Kalniņa on an unforgettable journey through Gauja Valley's most photogenic locations. This guided expedition is designed for photography enthusiasts who want to capture Latvia's natural beauty while learning advanced techniques.",
    includes: [
      "Professional photography guide",
      "Photography equipment rental (camera, tripod, filters)",
      "Traditional Latvian lunch at local café",
      "Transport between locations",
      "Post-processing tips and photo review session",
    ],
    itinerary: [
      { time: "09:00", activity: "Meet at Sigulda station, equipment check" },
      { time: "10:00", activity: "First location: Gutmana Cave sunrise shots" },
      { time: "12:00", activity: "Forest trails and autumn colors" },
      { time: "13:30", activity: "Lunch break at local café" },
      { time: "14:30", activity: "Gauja River viewpoints" },
      { time: "15:30", activity: "Photo review and feedback session" },
    ],
    whatToBring: [
      "Comfortable hiking shoes",
      "Weather-appropriate clothing",
      "Water bottle",
      "Your own camera (optional)",
    ],
  },
}

export function GuidedTourDetails({ tourId }: GuidedTourDetailsProps) {
  const router = useRouter()
  const tour = tourData[tourId] || tourData["guided-1"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-64 w-full">
        <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
        <Badge className="absolute bottom-3 left-3 bg-background/90 text-foreground border">{tour.difficulty}</Badge>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title and Rating */}
        <div>
          <h1 className="text-2xl font-bold leading-tight">{tour.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold">{tour.rating}</span>
            </div>
            <span className="text-muted-foreground">({tour.reviews} reviews)</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <Clock className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-xs text-muted-foreground">Duration</div>
            <div className="text-sm font-semibold">{tour.duration}</div>
          </Card>
          <Card className="p-3 text-center">
            <Users className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-xs text-muted-foreground">Group Size</div>
            <div className="text-sm font-semibold">{tour.groupSize}</div>
          </Card>
          <Card className="p-3 text-center">
            <Calendar className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-xs text-muted-foreground">Next Tour</div>
            <div className="text-sm font-semibold">{tour.nextDates[0].split(",")[0]}</div>
          </Card>
        </div>

        {/* Guide Info */}
        <Card className="p-4">
          <h3 className="font-semibold text-base mb-2">Your Guide</h3>
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-semibold text-lg">
              {tour.guide.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{tour.guide.name}</div>
              <div className="text-sm text-muted-foreground">{tour.guide.bio}</div>
              <div className="flex items-center gap-2 mt-1 text-xs">
                <span className="flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  {tour.guide.rating}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{tour.guide.tours} tours</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-base mb-2">About This Tour</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{tour.description}</p>
        </div>

        {/* What's Included */}
        <div>
          <h3 className="font-semibold text-base mb-3">What's Included</h3>
          <div className="space-y-2">
            {tour.includes.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        <div>
          <h3 className="font-semibold text-base mb-3">Itinerary</h3>
          <div className="space-y-3">
            {tour.itinerary.map((item: any, index: number) => (
              <div key={index} className="flex gap-3">
                <div className="text-sm font-semibold text-primary min-w-[50px]">{item.time}</div>
                <div className="text-sm text-muted-foreground flex-1">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Bring */}
        <div>
          <h3 className="font-semibold text-base mb-3">What to Bring</h3>
          <div className="flex flex-wrap gap-2">
            {tour.whatToBring.map((item: string, index: number) => (
              <Badge key={index} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Available Dates */}
        <div>
          <h3 className="font-semibold text-base mb-3">Available Dates</h3>
          <div className="space-y-2">
            {tour.nextDates.map((date: string, index: number) => (
              <Button key={index} variant="outline" className="w-full justify-start bg-transparent">
                <Calendar className="h-4 w-4 mr-2" />
                {date}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-16 left-0 right-0 bg-background border-t border-border p-4 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted-foreground">Price per person</div>
            <div className="text-2xl font-bold">{tour.price}</div>
          </div>
          <Button size="lg" className="flex-1 max-w-xs">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}
