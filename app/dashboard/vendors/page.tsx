"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { vendorColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { Vendor, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function VendorsPage() {
    const [data, setData] = useState<ApiResponse<Vendor[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchVendors = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getVendors(10000, true)
            setData(response)
        } catch (error) {
            console.error("Error fetching vendors:", error)
            toast.error("Failed to fetch vendors")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchVendors(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for ${row.name}`)
    }

    const handleAddVendor = () => {
        console.log("Add new vendor")
        toast.info("Add vendor functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load vendors</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={vendorColumns}
                title="Vendors"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add Vendor"
                onAddClick={handleAddVendor}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}
