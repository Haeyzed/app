# Orcish Dashboard

A modern dashboard application built with Next.js, React, and TypeScript.

## Features

- **Reusable Data Table Component**: A flexible, feature-rich data table that can be used across different data types
- **Company Management**: View and manage company information
- **Driver Management**: Track driver details and status
- **Vehicle Management**: Monitor vehicle fleet and assignments
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components

## Reusable Data Table Component

The `ReusableDataTable` component is a powerful, flexible data table that can be used with any data type. It includes the following features:

### Features

- **Sorting**: Click column headers to sort data
- **Filtering**: Global search functionality
- **Pagination**: Configurable page sizes and navigation
- **Row Selection**: Select individual rows or all rows
- **Column Visibility**: Show/hide columns as needed
- **Drag and Drop**: Optional row reordering (when enabled)
- **Actions Menu**: Edit, view, duplicate, and delete actions
- **Responsive**: Works on all screen sizes

### Usage

```tsx
import { ReusableDataTable } from "@/components/reusable-data-table"
import { companyColumns } from "@/components/table-columns"
import companiesData from "@/data/companies.json"

export default function CompaniesPage() {
    const handleRowAction = (action: string, row: any) => {
        console.log(`${action} action for:`, row)
        // Handle different actions (edit, view, duplicate, delete)
    }

    const handleAddCompany = () => {
        console.log("Add new company")
        // Handle adding new company
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
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TData[]` | Required | Array of data to display |
| `columns` | `ColumnDef<TData>[]` | Required | Column definitions |
| `title` | `string` | "Data Table" | Table title |
| `enableDragAndDrop` | `boolean` | `false` | Enable row reordering |
| `enableSelection` | `boolean` | `true` | Enable row selection |
| `enableColumnVisibility` | `boolean` | `true` | Enable column visibility toggle |
| `enablePagination` | `boolean` | `true` | Enable pagination |
| `pageSize` | `number` | `10` | Number of rows per page |
| `onRowAction` | `(action: string, row: TData) => void` | Optional | Callback for row actions |
| `addButtonText` | `string` | "Add Item" | Text for add button |
| `onAddClick` | `() => void` | Optional | Callback for add button click |

### Available Data Types

The application includes three main data types with predefined columns:

1. **Companies** (`companyColumns`)
   - Company name, email, phone, sector, country, city, status, loyalty program, registration number

2. **Drivers** (`driverColumns`)
   - Driver name, email, phone, speciality, status, company, address

3. **Vehicles** (`vehicleColumns`)
   - Registration number, plate number, brand, model, color, fuel type, status, company, driver, trailer type, tonnage, age

### Sample Data

The application includes sample data for all three types:

- `data/companies.json` - 10 sample companies
- `data/drivers.json` - 15 sample drivers
- `data/vehicles.json` - 15 sample vehicles

## Getting Started

1. Install dependencies:
```bash
   npm install
   # or
   pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   └── dashboard/
│       ├── companies/
│       │   └── page.tsx          # Companies page
│       ├── drivers/
│       │   └── page.tsx          # Drivers page
│       ├── vehicles/
│       │   └── page.tsx          # Vehicles page
│       └── page.tsx              # Dashboard home
├── components/
│   ├── reusable-data-table.tsx   # Main reusable table component
│   ├── table-columns.tsx         # Column definitions
│   └── ui/                       # UI components
├── data/
│   ├── companies.json            # Sample company data
│   ├── drivers.json              # Sample driver data
│   └── vehicles.json             # Sample vehicle data
└── types/
    └── index.ts                  # TypeScript type definitions
```

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **TanStack Table** - Table functionality
- **DND Kit** - Drag and drop
- **Tabler Icons** - Icons

## Customization

To add a new data type:

1. Define the type in `types/index.ts`
2. Create column definitions in `components/table-columns.tsx`
3. Add sample data in `data/`
4. Create a new page using the `ReusableDataTable` component

The component is designed to be flexible and can work with any data structure by providing appropriate column definitions.
