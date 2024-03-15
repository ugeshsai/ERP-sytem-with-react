import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { statuses } from "../../../db/data";
import { DataTableAdd } from "./data-table-add";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

function DataTableToolbar({ table, setOrders }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleAddOrder = (newOrderData) => {
    setOrders((prevOrders) => [
      ...prevOrders,
      newOrderData,
    ]);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter orders (type here)..."
          value={(table.getColumn("orderId")?.getFilterValue()) ?? ""}
          onChange={(event) => table.getColumn("orderId")?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <div className="hidden md:block lg:block">
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Filter by Status"
              options={statuses}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 flex items-center space-x-1"
          >
            <span className="text-sm">Reset</span>
            <Cross2Icon className="h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableAdd onAdd={handleAddOrder} table={table} />
      <DataTableViewOptions table={table} />
    </div>
  );
}

export { DataTableToolbar };
