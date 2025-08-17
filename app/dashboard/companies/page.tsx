"use client" // Add this line at the top

import { ReusableDataTable } from "@/components/reusable-data-table"
import { companyColumns } from "@/components/table-columns"
import companiesData from "@/data/companies.json"

export default function CompaniesPage() {
    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
    }

    const handleAddCompany = () => {
        console.log("Add new company")
    }

    return (
        <div className="container mx-auto py-6">
            <ReusableDataTable
                data={companiesData}
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
            />
        </div>
    )
}