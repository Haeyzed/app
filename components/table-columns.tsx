"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Company, Driver, Vehicle } from "@/types"

// Company Columns
export const companyColumns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: "Company Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("phone_number")}</div>
    ),
  },
  {
    accessorKey: "sector",
    header: "Sector",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.getValue("sector")}
      </Badge>
    ),
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("country")}</div>
    ),
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("city")}</div>
    ),
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("active") ? "default" : "secondary"}>
        {row.getValue("active") ? "Active" : "Inactive"}
      </Badge>
    ),
  },
  {
    accessorKey: "on_loyalty_program",
    header: "Loyalty Program",
    cell: ({ row }) => (
      <Badge variant={row.getValue("on_loyalty_program") ? "default" : "outline"}>
        {row.getValue("on_loyalty_program") ? "Yes" : "No"}
      </Badge>
    ),
  },
  {
    accessorKey: "registration_number",
    header: "Reg. Number",
    cell: ({ row }) => (
      <div className="text-sm font-mono">{row.getValue("registration_number")}</div>
    ),
  },
]

// Driver Columns
export const driverColumns: ColumnDef<Driver>[] = [
  {
    accessorKey: "fullname",
    header: "Driver Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("fullname")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("phone_number")}</div>
    ),
  },
  {
    accessorKey: "driver_speciality",
    header: "Speciality",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.getValue("driver_speciality")}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const getStatusVariant = (status: string) => {
        switch (status.toLowerCase()) {
          case "active":
            return "default"
          case "on leave":
            return "secondary"
          case "suspended":
            return "destructive"
          default:
            return "outline"
        }
      }
      return (
        <Badge variant={getStatusVariant(status)}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "company.name",
    header: "Company",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.company?.name || "N/A"}</div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground max-w-[200px] truncate">
        {row.getValue("address")}
      </div>
    ),
  },
]

// Vehicle Columns
export const vehicleColumns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: "registration_number",
    header: "Reg. Number",
    cell: ({ row }) => (
      <div className="font-medium font-mono">{row.getValue("registration_number")}</div>
    ),
  },
  {
    accessorKey: "vehicle_plate_number",
    header: "Plate Number",
    cell: ({ row }) => (
      <div className="text-sm font-mono">{row.getValue("vehicle_plate_number")}</div>
    ),
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.getValue("brand")}</div>
    ),
  },
  {
    accessorKey: "model",
    header: "Model",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("model") || "N/A"}</div>
    ),
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div 
          className="w-4 h-4 rounded-full border"
          style={{ backgroundColor: row.getValue("color")?.toLowerCase() }}
        />
        <span className="text-sm">{row.getValue("color")}</span>
      </div>
    ),
  },
  {
    accessorKey: "fuel_type",
    header: "Fuel Type",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.getValue("fuel_type")}
      </Badge>
    ),
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("active") ? "default" : "secondary"}>
        {row.getValue("active") ? "Active" : "Inactive"}
      </Badge>
    ),
  },
  {
    accessorKey: "company.name",
    header: "Company",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.company?.name || "N/A"}</div>
    ),
  },
  {
    accessorKey: "driver.fullname",
    header: "Driver",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.driver?.fullname || "Unassigned"}</div>
    ),
  },
  {
    accessorKey: "trailer_type",
    header: "Trailer Type",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("trailer_type")}</div>
    ),
  },
  {
    accessorKey: "tonnage",
    header: "Tonnage",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("tonnage")}</div>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("age")}</div>
    ),
  },
]
