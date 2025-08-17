"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { driverColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { Driver, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function DriversPage() {
    const [data, setData] = useState<ApiResponse<Driver[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchDrivers = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getDrivers(10000, true)
            setData(response)
        } catch (error) {
            console.error("Error fetching drivers:", error)
            toast.error("Failed to fetch drivers")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchDrivers(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for ${row.fullname}`)
    }

    const handleAddDriver = () => {
        console.log("Add new driver")
        toast.info("Add driver functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load drivers</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={driverColumns}
                title="Drivers"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add Driver"
                onAddClick={handleAddDriver}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}
