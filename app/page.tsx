import { ExploreTab } from "@/components/explore-tab"
import { BottomNav } from "@/components/bottom-nav"
import { AppHeader } from "@/components/app-header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <AppHeader />
      <ExploreTab />
      <BottomNav activeTab="explore" />
    </main>
  )
}
