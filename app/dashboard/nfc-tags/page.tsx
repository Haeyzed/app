"use client"

import { useState, useEffect } from "react"
import { ReusableDataTable } from "@/components/reusable-data-table"
import { nfcTagColumns } from "@/components/table-columns"
import { httpClient } from "@/lib/http-client"
import { NfcTag, ApiResponse } from "@/types"
import { toast } from "sonner"

export default function NfcTagsPage() {
    const [data, setData] = useState<ApiResponse<NfcTag[]> | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchNfcTags = async (page: number = 1) => {
        try {
            setIsLoading(true)
            const response = await httpClient.getNfcTags(10, page)
            setData(response)
        } catch (error) {
            console.error("Error fetching NFC tags:", error)
            toast.error("Failed to fetch NFC tags")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchNfcTags(currentPage)
    }, [currentPage])

    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        toast.info(`${action} action triggered for ${row.tag_id}`)
    }

    const handleAddNfcTag = () => {
        console.log("Add new NFC tag")
        toast.info("Add NFC tag functionality coming soon")
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    if (!data && !isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <p className="text-muted-foreground">Failed to load NFC tags</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={data || { data: [], meta: undefined }}
                columns={nfcTagColumns}
                title="NFC Tags"
                enableDragAndDrop={false}
                enableSelection={true}
                enableColumnVisibility={true}
                enablePagination={true}
                pageSize={10}
                onRowAction={handleRowAction}
                addButtonText="Add NFC Tag"
                onAddClick={handleAddNfcTag}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={data?.meta?.last_page || 1}
                totalItems={data?.meta?.total || 0}
                isLoading={isLoading}
            />
        </div>
    )
}
