"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  IconDashboard,
  IconBuilding,
  IconTruck,
  IconUsers,
  IconCar,
  IconCreditCard,
  IconQrcode,
  IconGasStation,
  IconCalculator,
  IconKey,
  IconUserCheck,
  IconSettings,
  IconReport,
  IconShield,
  IconWallet,
  IconUser,
  IconChevronDown,
  IconChevronRight,
  IconLogout,
} from "@tabler/icons-react"
import { useSession, signOut } from "next-auth/react"

interface MenuItem {
  title: string
  href?: string
  icon: React.ComponentType<{ className?: string }>
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "General Admin",
    icon: IconBuilding,
    children: [
      { title: "Companies", href: "/dashboard/companies", icon: IconBuilding },
      { title: "Vendors", href: "/dashboard/vendors", icon: IconTruck },
      { title: "Wallets", href: "/dashboard/wallets", icon: IconWallet },
      { title: "Users", href: "/dashboard/users", icon: IconUsers },
      { title: "Drivers", href: "/dashboard/drivers", icon: IconUser },
      { title: "Vehicles", href: "/dashboard/vehicles", icon: IconCar },
      { title: "NFC Tags", href: "/dashboard/nfc-tags", icon: IconQrcode },
    ],
  },
  {
    title: "Fuel Operations",
    icon: IconGasStation,
    children: [
      { title: "Cost Centers", href: "/dashboard/cost-centers", icon: IconCalculator },
      { title: "Vehicle Limit Groups", href: "/dashboard/vehicle-limit-groups", icon: IconCar },
      { title: "One Time Authorization", href: "/dashboard/one-time-auth", icon: IconKey },
    ],
  },
  {
    title: "Vendor Admin",
    icon: IconTruck,
    children: [
      { title: "Users", href: "/dashboard/vendor/users", icon: IconUsers },
      { title: "Drivers", href: "/dashboard/vendor/drivers", icon: IconUser },
      { title: "Vehicles", href: "/dashboard/vendor/vehicles", icon: IconCar },
      { title: "NFC Tags", href: "/dashboard/vendor/nfc-tags", icon: IconQrcode },
      { title: "App Configurations", href: "/dashboard/vendor/app-config", icon: IconSettings },
      { title: "Self Onboarding Details", href: "/dashboard/vendor/onboarding", icon: IconUserCheck },
      { title: "Tag Pickup Location", href: "/dashboard/vendor/tag-pickup", icon: IconQrcode },
      { title: "Track NFC Tags & Delivery", href: "/dashboard/vendor/track-tags", icon: IconQrcode },
    ],
  },
  {
    title: "Cupid Fleet Admin",
    icon: IconCar,
    children: [
      { title: "Truck Contracts", href: "/dashboard/fleet/contracts", icon: IconCar },
      { title: "Categories & Sub Categories", href: "/dashboard/fleet/categories", icon: IconCar },
      { title: "Fleet Destinations", href: "/dashboard/fleet/destinations", icon: IconCar },
      { title: "Fleet Allocations", href: "/dashboard/fleet/allocations", icon: IconCar },
      { title: "Fleet Issuance Report", href: "/dashboard/fleet/issuance-report", icon: IconReport },
      { title: "Vendor Users", href: "/dashboard/fleet/vendor-users", icon: IconUsers },
    ],
  },
  {
    title: "Assign NFC Tags",
    href: "/dashboard/assign-nfc-tags",
    icon: IconQrcode,
  },
  {
    title: "Customer Management",
    icon: IconUsers,
    children: [
      { title: "Partnerships", href: "/dashboard/customers/partnerships", icon: IconUsers },
      { title: "Register Customer", href: "/dashboard/customers/register", icon: IconUserCheck },
      { title: "Credit Limit", href: "/dashboard/customers/credit-limit", icon: IconCreditCard },
      { title: "Payment", href: "/dashboard/customers/payment", icon: IconWallet },
    ],
  },
  {
    title: "Reports",
    icon: IconReport,
    children: [
      { title: "Payment Report", href: "/dashboard/reports/payment", icon: IconReport },
      { title: "Fuel Purchase Report", href: "/dashboard/reports/fuel-purchase", icon: IconReport },
      { title: "Sales Report (Tags)", href: "/dashboard/reports/sales-tags", icon: IconReport },
      { title: "Sales Report (Cash)", href: "/dashboard/reports/sales-cash", icon: IconReport },
      { title: "Sales Report (Bank Card)", href: "/dashboard/reports/sales-bank-card", icon: IconReport },
    ],
  },
  {
    title: "Super Admin",
    icon: IconShield,
    children: [
      { title: "All Users", href: "/dashboard/super-admin/users", icon: IconUsers },
      { title: "Access Control", href: "/dashboard/super-admin/access-control", icon: IconShield },
      { title: "NFC Tags", href: "/dashboard/super-admin/nfc-tags", icon: IconQrcode },
      { title: "Subscribed Vendors", href: "/dashboard/super-admin/subscribed-vendors", icon: IconTruck },
      { title: "Subscribed Customers", href: "/dashboard/super-admin/subscribed-customers", icon: IconUsers },
      { title: "Manual Purchase Registration", href: "/dashboard/super-admin/manual-purchase", icon: IconCalculator },
      { title: "Customer Vendor Mapping", href: "/dashboard/super-admin/customer-vendor-mapping", icon: IconUsers },
      { title: "Bank Account", href: "/dashboard/super-admin/bank-account", icon: IconCreditCard },
      { title: "Debit History", href: "/dashboard/super-admin/debit-history", icon: IconReport },
      { title: "Refund History", href: "/dashboard/super-admin/refund-history", icon: IconReport },
    ],
  },
]

interface SidebarItemProps {
  item: MenuItem
  isOpen: boolean
  onToggle: () => void
  level?: number
}

function SidebarItem({ item, isOpen, onToggle, level = 0 }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = item.href ? pathname === item.href : false
  const hasChildren = item.children && item.children.length > 0
  const isExpanded = isOpen

  return (
    <div>
      {item.href ? (
        <Link href={item.href}>
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2",
              level > 0 && "ml-4",
              isActive && "bg-secondary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ) : (
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between gap-2",
            level > 0 && "ml-4"
          )}
          onClick={onToggle}
        >
          <div className="flex items-center gap-2">
            <item.icon className="h-4 w-4" />
            {item.title}
          </div>
          {hasChildren && (
            isExpanded ? (
              <IconChevronDown className="h-4 w-4" />
            ) : (
              <IconChevronRight className="h-4 w-4" />
            )
          )}
        </Button>
      )}

      {hasChildren && isExpanded && (
        <div className="mt-1 space-y-1">
          {item.children!.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
              isOpen={false}
              onToggle={() => {}}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const { data: session } = useSession()

  const toggleItem = (title: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(title)) {
      newOpenItems.delete(title)
    } else {
      newOpenItems.add(title)
    }
    setOpenItems(newOpenItems)
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" })
  }

  return (
    <div className="flex h-full w-64 flex-col bg-background border-r">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-lg font-semibold">Cupid Dashboard</h1>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-2 px-4">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              isOpen={openItems.has(item.title)}
              onToggle={() => toggleItem(item.title)}
            />
          ))}
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">
              {session?.user?.name?.charAt(0) || "U"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {session?.user?.email || "user@example.com"}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={handleLogout}
        >
          <IconLogout className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
