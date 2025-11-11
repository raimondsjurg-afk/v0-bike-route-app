import { GuidedTourDetails } from "@/components/guided-tour-details"
import { BottomNav } from "@/components/bottom-nav"
import { AppHeader } from "@/components/app-header"

export default function GuidedTourPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background pb-20">
      <AppHeader />
      <GuidedTourDetails tourId={params.id} />
      <BottomNav activeTab="explore" />
    </main>
  )
}
