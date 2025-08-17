"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { companyColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { Company, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function CompaniesPage() {
    const [data, setData] = useState<ApiResponse<Company[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchCompanies = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getCompanies(10000, true)
            setData(response)
        } catch (error) {
            console.error("Error fetching companies:", error)
            toast.error("Failed to fetch companies")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchCompanies(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for ${row.name}`)
    }

    const handleAddCompany = () => {
        console.log("Add new company")
        toast.info("Add company functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load companies</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={companyColumns}
                title="Companies"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add Company"
                onAddClick={handleAddCompany}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}