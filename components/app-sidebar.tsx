"use client";

import * as React from "react";
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
  IconInnerShadowTop,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

const data = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "General Admin",
      url: "#",
      icon: IconBuilding,
      items: [
        { title: "Companies", url: "/dashboard/companies", icon: IconBuilding },
        { title: "Vendors", url: "/dashboard/vendors", icon: IconTruck },
        { title: "Wallets", url: "/dashboard/wallets", icon: IconWallet },
        { title: "Users", url: "/dashboard/users", icon: IconUsers },
        { title: "Drivers", url: "/dashboard/drivers", icon: IconUser },
        { title: "Vehicles", url: "/dashboard/vehicles", icon: IconCar },
        { title: "NFC Tags", url: "/dashboard/nfc-tags", icon: IconQrcode },
      ],
    },
    {
      title: "Fuel Operations",
      url: "#",
      icon: IconGasStation,
      items: [
        { title: "Cost Centers", url: "/dashboard/cost-centers", icon: IconCalculator },
        { title: "Vehicle Limit Groups", url: "/dashboard/vehicle-limit-groups", icon: IconCar },
        { title: "One Time Authorization", url: "/dashboard/one-time-auth", icon: IconKey },
      ],
    },
    {
      title: "Vendor Admin",
      url: "#",
      icon: IconTruck,
      items: [
        { title: "Users", url: "/dashboard/vendor/users", icon: IconUsers },
        { title: "Drivers", url: "/dashboard/vendor/drivers", icon: IconUser },
        { title: "Vehicles", url: "/dashboard/vendor/vehicles", icon: IconCar },
        { title: "NFC Tags", url: "/dashboard/vendor/nfc-tags", icon: IconQrcode },
        { title: "App Configurations", url: "/dashboard/vendor/app-config", icon: IconSettings },
        { title: "Self Onboarding Details", url: "/dashboard/vendor/onboarding", icon: IconUserCheck },
        { title: "Tag Pickup Location", url: "/dashboard/vendor/tag-pickup", icon: IconQrcode },
        { title: "Track NFC Tags & Delivery", url: "/dashboard/vendor/track-tags", icon: IconQrcode },
      ],
    },
    {
      title: "Cupid Fleet Admin",
      url: "#",
      icon: IconCar,
      items: [
        { title: "Truck Contracts", url: "/dashboard/fleet/contracts", icon: IconCar },
        { title: "Categories & Sub Categories", url: "/dashboard/fleet/categories", icon: IconCar },
        { title: "Fleet Destinations", url: "/dashboard/fleet/destinations", icon: IconCar },
        { title: "Fleet Allocations", url: "/dashboard/fleet/allocations", icon: IconCar },
        { title: "Fleet Issuance Report", url: "/dashboard/fleet/issuance-report", icon: IconReport },
        { title: "Vendor Users", url: "/dashboard/fleet/vendor-users", icon: IconUsers },
      ],
    },
    {
      title: "Assign NFC Tags",
      url: "/dashboard/assign-nfc-tags",
      icon: IconQrcode,
    },
    {
      title: "Customer Management",
      url: "#",
      icon: IconUsers,
      items: [
        { title: "Partnerships", url: "/dashboard/customers/partnerships", icon: IconUsers },
        { title: "Register Customer", url: "/dashboard/customers/register", icon: IconUserCheck },
        { title: "Credit Limit", url: "/dashboard/customers/credit-limit", icon: IconCreditCard },
        { title: "Payment", url: "/dashboard/customers/payment", icon: IconWallet },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: IconReport,
      items: [
        { title: "Payment Report", url: "/dashboard/reports/payment", icon: IconReport },
        { title: "Fuel Purchase Report", url: "/dashboard/reports/fuel-purchase", icon: IconReport },
        { title: "Sales Report (Tags)", url: "/dashboard/reports/sales-tags", icon: IconReport },
        { title: "Sales Report (Cash)", url: "/dashboard/reports/sales-cash", icon: IconReport },
        { title: "Sales Report (Bank Card)", url: "/dashboard/reports/sales-bank-card", icon: IconReport },
      ],
    },
    {
      title: "Super Admin",
      url: "#",
      icon: IconShield,
      items: [
        { title: "All Users", url: "/dashboard/super-admin/users", icon: IconUsers },
        { title: "Access Control", url: "/dashboard/super-admin/access-control", icon: IconShield },
        { title: "NFC Tags", url: "/dashboard/super-admin/nfc-tags", icon: IconQrcode },
        { title: "Subscribed Vendors", url: "/dashboard/super-admin/subscribed-vendors", icon: IconTruck },
        { title: "Subscribed Customers", url: "/dashboard/super-admin/subscribed-customers", icon: IconUsers },
        { title: "Manual Purchase Registration", url: "/dashboard/super-admin/manual-purchase", icon: IconCalculator },
        { title: "Customer Vendor Mapping", url: "/dashboard/super-admin/customer-vendor-mapping", icon: IconUsers },
        { title: "Bank Account", url: "/dashboard/super-admin/bank-account", icon: IconCreditCard },
        { title: "Debit History", url: "/dashboard/super-admin/debit-history", icon: IconReport },
        { title: "Refund History", url: "/dashboard/super-admin/refund-history", icon: IconReport },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Help",
      url: "#",
      icon: IconSettings,
    },
  ],
  documents: [
    {
      name: "Documentation",
      url: "#",
      icon: IconReport,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  
  const userData = {
    name: session?.user?.name || "User",
    email: session?.user?.email || "user@example.com",
    avatar: "/avatars/user.jpg",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">
                  Cupid Dashboard
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
