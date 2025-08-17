"use client"

import { ReusableDataTable } from "@/components/reusable-data-table"
import { vehicleColumns } from "@/components/table-columns"
import vehiclesData from "@/data/vehicles.json"

export default function VehiclesPage() {
    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        // Handle different actions (edit, view, duplicate, delete)
    }

    const handleAddVehicle = () => {
        console.log("Add new vehicle")
        // Handle adding new vehicle
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={vehiclesData}
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
            />
        </div>
    )
}
