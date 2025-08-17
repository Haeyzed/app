import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import type { Company } from "@/types"

export const companyColumns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: "Company Name",
    cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="text-muted-foreground">{row.original.email}</div>,
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
    cell: ({ row }) => <div>{row.original.phone_number}</div>,
  },
  {
    accessorKey: "registration_number",
    header: "Registration",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.registration_number}
      </Badge>
    ),
  },
  {
    accessorKey: "sector",
    header: "Sector",
    cell: ({ row }) => <div>{row.original.sector}</div>,
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.active ? "default" : "secondary"}>
        {row.original.active ? "Active" : "Inactive"}
      </Badge>
    ),
  },
  {
    accessorKey: "on_loyalty_program",
    header: "Loyalty Program",
    cell: ({ row }) => (
      <Badge variant={row.original.on_loyalty_program ? "default" : "outline"}>
        {row.original.on_loyalty_program ? "Enrolled" : "Not Enrolled"}
      </Badge>
    ),
  },
]
