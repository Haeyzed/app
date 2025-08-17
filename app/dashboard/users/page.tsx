"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { userColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { User, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function UsersPage() {
    const [data, setData] = useState<ApiResponse<User[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchUsers = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getCompanyUsers(10, page)
            setData(response)
        } catch (error) {
            console.error("Error fetching users:", error)
            toast.error("Failed to fetch users")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for ${row.name}`)
    }

    const handleAddUser = () => {
        console.log("Add new user")
        toast.info("Add user functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load users</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={userColumns}
                title="Users"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add User"
                onAddClick={handleAddUser}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}
