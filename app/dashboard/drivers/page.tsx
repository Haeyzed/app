"use client"

import { ReusableDataTable } from "@/components/reusable-data-table"
import { driverColumns } from "@/components/table-columns"
import driversData from "@/data/drivers.json"

export default function DriversPage() {
    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        // Handle different actions (edit, view, duplicate, delete)
    }

    const handleAddDriver = () => {
        console.log("Add new driver")
        // Handle adding new driver
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={driversData}
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
            />
        </div>
    )
}
