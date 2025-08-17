"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface TopVehicle {
  vehicle_plate_number: string
  total_purchase_amount: number
  total_purchase_volume: number
}

interface ChartBarTopVehiclesProps {
  data: TopVehicle[]
}

export function ChartBarTopVehicles({ data }: ChartBarTopVehiclesProps) {
  const chartData = data.map(item => ({
    name: item.vehicle_plate_number,
    amount: item.total_purchase_amount,
    volume: item.total_purchase_volume,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Purchasing Vehicles</CardTitle>
        <CardDescription>
          Vehicles with highest fuel purchase amounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis />
            <Tooltip 
              formatter={(value: any, name: string) => [
                name === 'amount' ? `₦${value.toLocaleString()}` : `${value.toFixed(2)}L`,
                name === 'amount' ? 'Amount' : 'Volume'
              ]}
            />
            <Bar dataKey="amount" fill="#3b82f6" name="Purchase Amount" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
