import LeftNavbar from "@/components/Headers/LeftNavbar";
import ProtectedRoute from "@/components/providers/ProtectedRoute";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex">
        <LeftNavbar />
        <div className="flex grow">{children}</div>
      </div>
    </ProtectedRoute>
  );
}
