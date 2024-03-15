import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { useState } from "react";

function DataTableAdd({ table, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      category: "",
      price: "",
      stockQuantity: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mr-2">
          <PlusCircledIcon className="mr-2 h-4 w-8" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle style={{ textAlign: 'center', fontFamily: 'YourFontName', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: 'tight' }}>Add a Product</DialogTitle>
          <DialogDescription style={{ textAlign: 'center', fontFamily: 'YourFontName', fontSize: '1rem' }}>
            Fill all the details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="name" className="pb-2 font-bold text-center">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="category" className="pb-2 font-bold text-center">
                Category
              </Label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="price" className="pb-2 font-bold text-center">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="stockQuantity" className="pb-2 font-bold text-center">
                Stock Quantity
              </Label>
              <Input
                id="stockQuantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter style={{ justifyContent: 'center' }}>
            <Button type="submit" style={{ fontFamily: 'YourFontName', fontSize: '1rem' }}>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { DataTableAdd };
