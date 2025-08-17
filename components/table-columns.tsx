"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Company, Driver, Vehicle, Vendor, Wallet, User, NfcTag } from "@/types"

// Fuel Purchase Columns
export const fuelPurchaseColumns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="font-mono text-sm">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "vehicle_plate_number",
    header: "Vehicle",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("vehicle_plate_number")}</div>
    ),
  },
  {
    accessorKey: "vendor_station_name",
    header: "Station",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("vendor_station_name")}</div>
    ),
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.getValue("product")}
      </Badge>
    ),
  },
  {
    accessorKey: "volume",
    header: "Volume (L)",
    cell: ({ row }) => (
      <div className="text-sm font-mono">{row.getValue("volume")}</div>
    ),
  },
  {
    accessorKey: "amount_paid",
    header: "Amount (₦)",
    cell: ({ row }) => (
      <div className="text-sm font-mono">₦{Number(row.getValue("amount_paid")).toLocaleString()}</div>
    ),
  },
  {
    accessorKey: "auth_type",
    header: "Auth Type",
    cell: ({ row }) => (
      <Badge variant="secondary" className="text-xs">
        {row.getValue("auth_type")}
      </Badge>
    ),
  },
  {
    accessorKey: "driver.fullname",
    header: "Driver",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.driver?.fullname || "N/A"}</div>
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
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => (
      <div className="text-sm">
        {new Date(row.getValue("created_at")).toLocaleDateString()}
      </div>
    ),
  },
]

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

// Vendor Columns
export const vendorColumns: ColumnDef<Vendor>[] = [
  {
    accessorKey: "name",
    header: "Vendor Name",
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
    accessorKey: "products_sold",
    header: "Products",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("products_sold")}</div>
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") ? "default" : "secondary"}>
        {row.getValue("status") ? "Active" : "Inactive"}
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
    cell: ({ row }) => {
      const color = row.getValue("color") as string
      return (
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color?.toLowerCase() }}
          />
          <span className="text-sm">{color}</span>
        </div>
      )
    },
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

// Wallet Columns
export const walletColumns: ColumnDef<Wallet>[] = [
  {
    accessorKey: "wallet_id",
    header: "Wallet ID",
    cell: ({ row }) => (
      <div className="font-medium font-mono">{row.getValue("wallet_id")}</div>
    ),
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        ₦{Number(row.getValue("balance")).toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "credit_limit",
    header: "Credit Limit",
    cell: ({ row }) => (
      <div className="text-sm">
        ₦{Number(row.getValue("credit_limit")).toLocaleString()}
      </div>
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
    accessorKey: "vendor.name",
    header: "Vendor",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.vendor?.name || "N/A"}</div>
    ),
  },
]

// User Columns
export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "is_admin",
    header: "Admin",
    cell: ({ row }) => (
      <Badge variant={row.getValue("is_admin") ? "default" : "outline"}>
        {row.getValue("is_admin") ? "Yes" : "No"}
      </Badge>
    ),
  },
  {
    accessorKey: "is_vendor",
    header: "Vendor",
    cell: ({ row }) => (
      <Badge variant={row.getValue("is_vendor") ? "default" : "outline"}>
        {row.getValue("is_vendor") ? "Yes" : "No"}
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
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("gender")}</div>
    ),
  },
]

// NFC Tag Columns
export const nfcTagColumns: ColumnDef<NfcTag>[] = [
  {
    accessorKey: "nfctag_code",
    header: "NFC Code",
    cell: ({ row }) => (
      <div className="font-medium font-mono">{row.getValue("nfctag_code")}</div>
    ),
  },
  {
    accessorKey: "nfctag_type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.getValue("nfctag_type")}
      </Badge>
    ),
  },
  {
    accessorKey: "card_state",
    header: "State",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("card_state")}</div>
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
    accessorKey: "vendor.name",
    header: "Vendor",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.vendor?.name || "N/A"}</div>
    ),
  },
  {
    accessorKey: "user.name",
    header: "User",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.user?.name || "N/A"}</div>
    ),
  },
]
