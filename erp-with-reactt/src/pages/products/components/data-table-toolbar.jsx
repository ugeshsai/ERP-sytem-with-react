import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { DataTableAdd } from "./data-table-add";
import { DataTableViewOptions } from "./data-table-view-options";

function DataTableToolbar({ table, setProducts }) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleAddProduct = (newProductData) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      newProductData 
    ]);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter products..."
          value={
            (table.getColumn("name")?.getFilterValue()) ?? ""
          }
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[550px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableAdd onAdd={handleAddProduct} table={table} />
      <DataTableViewOptions table={table} />
    </div>
  );
}

export { DataTableToolbar };
