import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../../components/ui/popover";
import { statuses } from "../../../db/data";
import { calculateExpectedDeliveryDate } from "../../../db/mock";
import { cn } from "../../../lib/utils";

function DataTableAdd({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    orderDate: "",
    status: "pending",
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
    setFormData((prevData) => ({
      ...prevData,
      expectedDeliveryDate: calculateExpectedDeliveryDate(formData.orderDate)
    }));
    
    onAdd(formData);
    setFormData({
      orderId: "",
      customerName: "",
      orderDate: "",
      status: "",
    });
    setOpen(false);
    setSelectedStatus(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mr-2">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add Order
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[80%] sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle style={{ textAlign: 'center', fontFamily: 'YourFontName', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: 'tight' }}>Add an Order</DialogTitle>
          <DialogDescription style={{ textAlign: 'center', fontFamily: 'YourFontName', fontSize: '1rem' }}>
            Fill all the details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="orderId" className="pb-2 font-bold text-center">
                Order ID
              </Label>
              <Input
                id="orderId"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="customerName" className="pb-2 font-bold text-center">
                Customer Name
              </Label>
              <Input
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="orderDate" className="pb-2 font-bold text-center">
                Order Date
              </Label>
              <Input
                id="orderDate"
                name="orderDate"
                type="date"
                value={formData.orderDate}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
              <Label htmlFor="status" className="pb-2 pt-2 font-bold text-center">
                Status
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                    style={{ fontFamily: 'YourFontName', fontSize: '1rem' }}
                  >
                    {selectedStatus ? (
                      <>
                        <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                        {selectedStatus.value}
                      </>
                    ) : (
                      "select"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="center" align="start">
                  <Command>
                    <CommandInput placeholder="Change status..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {statuses.map((status) => (
                          <CommandItem
                            key={status.value}
                            value={status.value}
                            onSelect={(value) => {
                              setSelectedStatus(
                                statuses.find((priority) => priority.value === value) ||
                                  null
                              );
                              setOpen(false);
                            }}
                          >
                            <status.icon
                              className={cn(
                                "mr-2 h-4 w-4",
                                status.value === selectedStatus?.value
                                  ? "opacity-100"
                                  : "opacity-40"
                              )}
                            />
                            <span>{status.label}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
