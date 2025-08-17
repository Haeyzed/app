import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SessionProvider } from "next-auth/react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"

export default async function DashboardLayout({
                                                children,
                                              }: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }
  return (
      <SessionProvider>
        <SidebarProvider
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
        >
          <AppSidebar variant="inset"/>
          <SidebarInset>
            <SiteHeader/>
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  {children}
                </div>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </SessionProvider>
  );
}

// export default async function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const session = await auth()
//
//   if (!session) {
//     redirect("/login")
//   }
//
//   return (
//     <SessionProvider>
//       <SidebarProvider>
//         <div className="flex min-h-screen w-full">
//           <AppSidebar />
//           <SidebarInset className="flex-1">
//             <main className="flex-1 overflow-auto">
//               {children}
//             </main>
//           </SidebarInset>
//         </div>
//       </SidebarProvider>
//     </SessionProvider>
//   )
// }
