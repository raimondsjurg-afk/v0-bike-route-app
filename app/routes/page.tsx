import { BottomNav } from "@/components/bottom-nav"
import { AppHeader } from "@/components/app-header"

export default function MapPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <div className="flex flex-col h-screen pb-20">
        <AppHeader />

        {/* Google Maps Embed */}
        <div className="flex-1 relative">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1gkZ_LhjLqN_AXNfr2bei3AVZLsCisHI&ehbc=2E312F"
            width="100%"
            height="100%"
            className="absolute inset-0 border-0"
            loading="lazy"
            title="Shapes of Latvia Routes Map"
          />
        </div>
      </div>
      <BottomNav activeTab="routes" />
    </main>
  )
}
