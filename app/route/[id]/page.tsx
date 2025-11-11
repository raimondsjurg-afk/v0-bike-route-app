import { RouteDetails } from "@/components/route-details"
import { BottomNav } from "@/components/bottom-nav"
import { AppHeader } from "@/components/app-header"

export default function RoutePage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background pb-20">
      <AppHeader />
      <RouteDetails routeId={params.id} />
      <BottomNav activeTab="explore" />
    </main>
  )
}
