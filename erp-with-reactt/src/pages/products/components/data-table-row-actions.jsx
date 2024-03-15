import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export function DataTableRowActions({
  row,
  onEdit,
  onDelete
}) {
  const handleEditClick = () => {
    const updatedData = {
      name: document.getElementById("name").value,
      category: document.getElementById("category").value,
      price: document.getElementById("price").value,
      stockQuantity: document.getElementById("stockQuantity").value,
    };

    onEdit(row, updatedData); 
  };

  const handleDeleteClick = () => {
    onDelete(row); 
  };

  return (
    <div className="flex flex-row ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <span className="ml-1">Edit</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make necessary changes. 
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={row.original.name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                defaultValue={row.original.category}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                defaultValue={row.original.price}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stockQuantity" className="text-right">
                Stock Quantity
              </Label>
              <Input
                id="stockQuantity"
                defaultValue={row.original.stockQuantity}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleEditClick}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button onClick={handleDeleteClick} variant="outline" className="ml-2">
        Delete
      </Button>
    </div>
  );
}
