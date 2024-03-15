import React, { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";


import { Calendar } from "lucide-react"
import { Badge } from "../../../components/ui/badge"
import { categories, statuses } from "../../../db/data"

import { DataTablePagination } from "./data-table-pagation";
import { DataTableToolbar } from "./data-table-toolbar";
import { Checkbox } from "../../../components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

import OrderDetailsCard from "./order-details-card";

function DataTable({ data, onDelete, onEdit, setOrders }) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleRowClick = (row) => {
    setSelectedOrder(row.original);
  };

  const columns = useMemo(() => {
    const handleEditRow = (orderId, newData) => {
      onEdit(orderId, newData);
    };

    const handleDeleteRow = (orderId) => {
      onDelete(orderId);
    };

    return [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "orderId",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Order ID" />
        ),
        cell: ({ row }) => <div className="w-[80px] text-center">{row.getValue("orderId")}</div>,
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "customerName",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Customer Name" />
        ),
        cell: ({ row }) => {
          const label = categories.find((label) => label.value === row.original.label)
    
          return (
            <div className="flex space-x-2 text-center">
              {label && <Badge variant="outline">{label.label}</Badge>}
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("customerName")}
              </span>
            </div>
          )
        },
      },
      {
        accessorKey: "orderDate",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Order Date" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex w-[100px] items-center justify-center">
              <Calendar className="w-4 h-4 mr-2 text-slate-500"/>
              <span>{row.getValue("orderDate")}</span>
            </div>
          )
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          const status = statuses.find(
            (status) => status.value === row.getValue("status")
          )
    
          if (!status) {
            return null
          }
    
          return (
            <div className="flex w-[100px] items-center justify-center">
              {status.icon && (
                <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>{status.label}</span>
            </div>
          )
        },
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id))
        },
      },
      {
        // Example column
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Actions" />
        ),
        id: "actions",
        cell: ({ row }) => (
          <DataTableRowActions
            row={row}
            onEdit={handleEditRow}
            onDelete={handleDeleteRow}
          />
        ),
      },
    ];
  }, [onEdit, onDelete]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      {selectedOrder && <OrderDetailsCard orderId={selectedOrder.orderId} />}
      <div className="space-y-4">
        <DataTableToolbar table={table} setOrders={setOrders} />
        <div className="rounded-md border border-black">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => handleRowClick(row)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-center border border-black">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center border border-black"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

export { DataTable };
