import { AppHeader } from "@/components/app-header"
import { BottomNav } from "@/components/bottom-nav"
import { GuidedToursTab } from "@/components/guided-tours-tab"

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <AppHeader />
      <GuidedToursTab />
      <BottomNav activeTab="tours" />
    </main>
  )
}
