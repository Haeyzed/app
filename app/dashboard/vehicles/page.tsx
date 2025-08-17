"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { vehicleColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { Vehicle, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function VehiclesPage() {
    const [data, setData] = useState<ApiResponse<Vehicle[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchVehicles = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getVehicles(10000, true)
            setData(response)
        } catch (error) {
            console.error("Error fetching vehicles:", error)
            toast.error("Failed to fetch vehicles")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchVehicles(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for ${row.registration_number}`)
    }

    const handleAddVehicle = () => {
        console.log("Add new vehicle")
        toast.info("Add vehicle functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load vehicles</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={vehicleColumns}
                title="Vehicles"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add Vehicle"
                onAddClick={handleAddVehicle}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}
