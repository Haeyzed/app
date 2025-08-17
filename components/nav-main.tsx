"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconChevronDown, IconChevronRight, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  icon?: Icon
  items?: NavItem[]
}

export function NavMain({
  items,
}: {
  items: NavItem[]
}) {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (title: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(title)) {
      newOpenItems.delete(title)
    } else {
      newOpenItems.add(title)
    }
    setOpenItems(newOpenItems)
  }

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.items && item.items.length > 0
    const isOpen = openItems.has(item.title)
    const isActive = pathname === item.url

    if (hasChildren) {
      return (
        <div key={item.title}>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => toggleItem(item.title)}
              className="w-full justify-between"
            >
              <div className="flex items-center gap-2">
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.title}</span>
              </div>
              {isOpen ? (
                <IconChevronDown className="h-4 w-4" />
              ) : (
                <IconChevronRight className="h-4 w-4" />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
          {isOpen && (
            <div className="ml-4 mt-1 space-y-1">
              {item.items!.map((child) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <SidebarMenuItem key={item.title}>
        <Link href={item.url} className="w-full">
          <SidebarMenuButton
            className={`w-full ${isActive ? 'bg-accent' : ''}`}
            tooltip={item.title}
          >
            {item.icon && <item.icon className="h-4 w-4" />}
            <span>{item.title}</span>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => renderNavItem(item))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
