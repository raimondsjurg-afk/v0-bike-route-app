"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, MapPin, Calendar, Award, Settings, LogOut, TrendingUp, Trophy } from "lucide-react"

export function ProfileTab() {
  const userStats = [
    { label: "Routes Completed", value: "12" },
    { label: "Km Traveled", value: "248" },
    { label: "Hours Active", value: "32" },
  ]

  const userInfo = {
    name: "Anna Salnikova",
    email: "anna.salnikova@example.com",
    memberSince: "March 2024",
    age: 27,
    gender: "Female",
    fitnessLevel: "Intermediate",
    country: "Finland",
  }

  const rankingInfo = {
    currentRank: 47,
    totalUsers: 312,
    percentile: 85,
    category: "Female, 25-30, Intermediate, Finland",
  }

  const achievements = [
    { name: "First Steps", icon: "🚶", unlocked: true, description: "Complete your first route" },
    { name: "Explorer", icon: "🗺️", unlocked: true, description: "Complete 10 routes" },
    { name: "Century Club", icon: "💯", unlocked: true, description: "Travel 100 km" },
    { name: "E-Pioneer", icon: "⚡", unlocked: true, description: "Rent your first e-bike" },
    { name: "Nature Lover", icon: "🌲", unlocked: true, description: "Complete 5 forest routes" },
    { name: "Coast Rider", icon: "🌊", unlocked: false, description: "Complete 3 coastal routes" },
    { name: "Marathon", icon: "🏃", unlocked: false, description: "Travel 250 km" },
    { name: "All Seasons", icon: "🍂", unlocked: false, description: "Record routes in all 4 seasons" },
    { name: "Social Butterfly", icon: "👥", unlocked: false, description: "Join 5 group rides" },
    { name: "Photographer", icon: "📸", unlocked: false, description: "Upload 50 route photos" },
    { name: "Local Hero", icon: "🏠", unlocked: false, description: "Complete all routes in your region" },
    { name: "500 Club", icon: "🎯", unlocked: false, description: "Travel 500 km" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt={userInfo.name} />
            <AvatarFallback className="bg-white text-primary text-xl font-semibold">
              {userInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{userInfo.name}</h2>
            <p className="text-white/90 text-sm">{userInfo.email}</p>
            <p className="text-white/80 text-xs mt-1 flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Member since {userInfo.memberSince}
            </p>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          {userStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-accent">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Your Ranking
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">#{rankingInfo.currentRank}</span>
                  </div>
                  <div>
                    <p className="font-medium">Top {rankingInfo.percentile}%</p>
                    <p className="text-xs text-muted-foreground">Among similar profiles</p>
                  </div>
                </div>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div className="bg-accent/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <p className="text-sm font-medium">{rankingInfo.category}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {rankingInfo.currentRank} of {rankingInfo.totalUsers} users
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Age</span>
                <span className="font-medium">{userInfo.age} years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Gender</span>
                <span className="font-medium">{userInfo.gender}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Fitness Level</span>
                <Badge variant="secondary">{userInfo.fitnessLevel}</Badge>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted-foreground">Country</span>
                <span className="font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {userInfo.country}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements ({achievements.filter((a) => a.unlocked).length}/{achievements.length})
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.name} className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2 transition-all ${
                      achievement.unlocked ? "bg-accent ring-2 ring-primary" : "bg-muted opacity-50"
                    }`}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <p
                    className={`text-xs font-medium ${achievement.unlocked ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {achievement.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
            <Settings className="h-4 w-4" />
            Edit Profile
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-2 text-destructive hover:text-destructive bg-transparent"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  )
}
