"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { walletColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { Wallet, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function WalletsPage() {
    const [data, setData] = useState<ApiResponse<Wallet[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchWallets = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getWallets(10000)
            setData(response)
        } catch (error) {
            console.error("Error fetching wallets:", error)
            toast.error("Failed to fetch wallets")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchWallets(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for wallet ${row.wallet_id}`)
    }

    const handleAddWallet = () => {
        console.log("Add new wallet")
        toast.info("Add wallet functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load wallets</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={walletColumns}
                title="Wallets"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add Wallet"
                onAddClick={handleAddWallet}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}
