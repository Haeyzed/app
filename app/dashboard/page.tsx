"use client"

import { useState, useEffect } from "react"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { ChartBarTopVehicles } from "@/components/chart-bar-top-vehicles"
import { DashboardSummaryCards } from "@/components/dashboard-summary-cards"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { fuelPurchaseColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { toast } from "sonner"

export default function DashboardPage() {
  const [summaryData, setSummaryData] = useState<any>(null)
  const [trendsData, setTrendsData] = useState<any[]>([])
  const [topVehiclesData, setTopVehiclesData] = useState<any[]>([])
  const [fuelPurchasesData, setFuelPurchasesData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true)
      
      // Fetch all dashboard data in parallel
      const [summary, trends, topVehicles, fuelPurchases] = await Promise.all([
        httpClient.getSummary(),
        httpClient.getTrendsOfPurchase(10000),
        httpClient.getTopPurchasingVehicles(10),
        httpClient.getLatestFuelPurchases(10)
      ])

      setSummaryData(summary.data)
      setTrendsData(trends.data || [])
      setTopVehiclesData(topVehicles.data || [])
      setFuelPurchasesData(fuelPurchases)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      toast.error("Failed to load dashboard data")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const handleRowAction = (action: string, row: any) => {
    console.log(`${action} action for:`, row)
    toast.info(`${action} action triggered for purchase ID ${row.id}`)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Summary Cards */}
      {summaryData && (
        <DashboardSummaryCards data={summaryData} />
      )}

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Trends Chart */}
        <div className="space-y-4">
          <ChartAreaInteractive data={trendsData} />
        </div>

        {/* Top Vehicles Chart */}
        <div className="space-y-4">
          <ChartBarTopVehicles data={topVehiclesData} />
        </div>
      </div>

      {/* Latest Fuel Purchases Table */}
      {fuelPurchasesData && (
        <div className="space-y-4">
          <ReusableDataTable
            data={fuelPurchasesData}
            columns={fuelPurchaseColumns}
            title="Latest Fuel Purchases"
            enableDragAndDrop={false}
            enableSelection={true}
            enableColumnVisibility={true}
            enablePagination={true}
            pageSize={10}
            onRowAction={handleRowAction}
            addButtonText=""
            onAddClick={() => {}}
            currentPage={fuelPurchasesData.meta?.current_page || 1}
            totalPages={fuelPurchasesData.meta?.last_page || 1}
            totalItems={fuelPurchasesData.meta?.total || 0}
            isLoading={false}
          />
        </div>
      )}
    </div>
  )
}
