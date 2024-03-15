import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog";
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "../../../components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../../components/ui/popover"
  import { Button } from "../../../components/ui/button";
  import { Label } from "../../../components/ui/label";
  import { Input } from "../../../components/ui/input";
  import { statuses } from "../../../db/data";
  import { useState } from "react";
  import { cn } from "../../../lib/utils";
  
  export function DataTableRowActions({
    row,
    onEdit,
    onDelete
  }) {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState(null)
  
    const handleEditClick = () => {
      const updatedData = {
        orderId: document.getElementById("orderId").value,
        customerName: document.getElementById("customerName").value,
        orderDate: document.getElementById("orderDate").value,
        status: selectedStatus.value,
      };
  
      onEdit(row, updatedData); 
    };
  
    const handleDeleteClick = () => {
      onDelete(row);
    };
  
    return (
      <div className="flex flex-row">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">
              <span className="ml-1">Edit</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[80%] sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Order</DialogTitle>
              <DialogDescription>
                Edit and then click on save button
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
                <Label htmlFor="orderId" className="pb-2 font-bold">
                  Order ID
                </Label>
                <Input
                  id="orderId"
                  defaultValue={row.original.orderId}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
                <Label htmlFor="customerName" className="pb-2 font-bold">
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  defaultValue={row.original.customerName}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
                <Label htmlFor="orderDate" className="pb-2 font-bold">
                  Order Date
                </Label>
                <Input
                  id="orderDate"
                  type="date"
                  defaultValue={row.original.orderDate}
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
                <Label htmlFor="status" className="pb-2 pt-2 font-bold">
                  Status
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      style={{ backgroundColor: selectedStatus ? selectedStatus.color : null }}
                    >
                      {selectedStatus ? (
                        <>
                          <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                          {selectedStatus.value}
                        </>
                      ) : (
                        row.original.status
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
                                )
                                setOpen(false)
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
  