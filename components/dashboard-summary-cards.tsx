"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconUsers,
  IconCar,
  IconCreditCard,
  IconGasStation,
  IconWallet,
  IconBuilding,
} from "@tabler/icons-react"

interface SummaryData {
  total_cost_centers: number
  total_driver: number
  total_fuel_purchases: number
  total_vehicle: number
  total_volume: number
  total_amount: number
  current_week_avg_pms_purchase?: {
    year_week: number
    avg_amount: number
    avg_volume: number
  } | null
  current_week_avg_ago_purchase?: {
    year_week: number
    avg_amount: number
    avg_volume: number
  } | null
  current_month_total_pms_purchase?: {
    month: string
    avg_amount: number
    avg_volume: number
  } | null
  current_month_total_ago_purchase?: {
    month: string
    avg_amount: number
    avg_volume: number
  } | null
  current_week_total_pms_purchase?: any | null
  current_week_total_fuel_purchase?: {
    year_week: number
    avg_amount: number
    avg_volume: number
  } | null
}

interface DashboardSummaryCardsProps {
  data: SummaryData
}

export function DashboardSummaryCards({ data }: DashboardSummaryCardsProps) {
  const cards = [
    {
      title: "Total Fuel Purchases",
      value: data.total_fuel_purchases.toLocaleString(),
      description: "All time fuel purchases",
      icon: IconGasStation,
      color: "text-blue-600",
    },
    {
      title: "Total Amount",
      value: `₦${data.total_amount.toLocaleString()}`,
      description: "Total fuel purchase amount",
      icon: IconCreditCard,
      color: "text-green-600",
    },
    {
      title: "Total Volume",
      value: `${data.total_volume.toFixed(2)}L`,
      description: "Total fuel volume purchased",
      icon: IconWallet,
      color: "text-purple-600",
    },
    {
      title: "Total Vehicles",
      value: data.total_vehicle.toLocaleString(),
      description: "Registered vehicles",
      icon: IconCar,
      color: "text-orange-600",
    },
    {
      title: "Total Drivers",
      value: data.total_driver.toLocaleString(),
      description: "Registered drivers",
      icon: IconUsers,
      color: "text-red-600",
    },
    {
      title: "Cost Centers",
      value: data.total_cost_centers.toLocaleString(),
      description: "Active cost centers",
      icon: IconBuilding,
      color: "text-indigo-600",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
