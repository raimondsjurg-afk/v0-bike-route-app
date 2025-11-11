import { BottomNav } from "@/components/bottom-nav"
import { ProfileTab } from "@/components/profile-tab"
import { AppHeader } from "@/components/app-header"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <AppHeader />
      <ProfileTab />
      <BottomNav activeTab="profile" />
    </main>
  )
}
