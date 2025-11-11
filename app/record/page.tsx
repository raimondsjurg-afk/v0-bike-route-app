import { BottomNav } from "@/components/bottom-nav"
import { RecordTab } from "@/components/record-tab"
import { AppHeader } from "@/components/app-header"

export default function RecordPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <AppHeader />
      <RecordTab />
      <BottomNav activeTab="record" />
    </main>
  )
}
