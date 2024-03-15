import {
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
  } from "@tanstack/react-table";
  import { useMemo, useState } from "react";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table";
  import { BadgeDollarSign } from "lucide-react";
  import { Badge } from "../../../components/ui/badge";
  import { categories } from "../../../db/data";
  import { Checkbox } from "../../../components/ui/checkbox";
  import { DataTableColumnHeader } from "./data-table-column-header";
  import { DataTablePagination } from "./data-table-pagation";
  import { DataTableRowActions } from "./data-table-row-actions";
  import { DataTableToolbar } from "./data-table-toolbar";
  
  function DataTable({ data, onDelete, onEdit, setProducts }) {
    const [rowSelection, setRowSelection] = useState({});
    const [columnVisibility, setColumnVisibility] = useState({});
    const [columnFilters, setColumnFilters] = useState([]);
    const [sorting, setSorting] = useState([]);
  
    const columns = useMemo(() => {
      const handleEditRow = (productId, newData) => {
        onEdit(productId, newData);
      };
  
      const handleDeleteRow = (productId) => {
        onDelete(productId);
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
          accessorKey: "name",
          header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product Name" />
          ),
          cell: ({ row }) => <div className="w-[80px]">{row.getValue("name")}</div>,
          enableSorting: false,
          enableHiding: false,
        },
        {
          accessorKey: "category",
          header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
          ),
          cell: ({ row }) => {
            const label = categories.find((label) => label.value === row.original.label)
      
            return (
              <div className="flex space-x-2">
                {label && <Badge variant="outline">{label.label}</Badge>}
                <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("category")}
                </span>
              </div>
            )
          },
        },
        {
          accessorKey: "price",
          header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Price" />
          ),
          cell: ({ row }) => {
            return (
              <div className="flex w-[100px] items-center">
                <BadgeDollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{row.getValue("price")}</span>
              </div>
            )
          },
        },
        {
          accessorKey: "stockQuantity",
          header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Quantity" />
          ),
          cell: ({ row }) => {
            return (
              <div className="flex items-center">
                <span>{row.getValue("stockQuantity")}</span>
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
      <div className="space-y-4" >
        <DataTableToolbar table={table} setProducts={setProducts} />
        <div className="text-center border border-black">
          <Table className="text-center border border-black"> {/* Add color to table */}
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
                    data-state={row.getIsSelected() && "selected"}className="text-center border border-black"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}className="text-center border border-black">
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
    );
  }
  
  export { DataTable };
  