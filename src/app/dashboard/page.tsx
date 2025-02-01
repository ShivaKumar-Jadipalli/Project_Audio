import AdminNavbar from "@/components/argon/AdminNavbar";
import HeaderStats from "@/components/argon/HeaderStats";
import FooterAdmin from "@/components/argon/FooterAdmin";
import GameSettings from "@/components/custom/regularsettings";
import AudioGameSettings from "@/components/custom/audiosettings";
export default function Dashboard() {
  return (
    <div>
      <AdminNavbar />
      <HeaderStats />
      <GameSettings />
      <AudioGameSettings />
      <FooterAdmin />
    </div>
  );
}
