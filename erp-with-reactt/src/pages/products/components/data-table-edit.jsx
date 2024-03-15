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
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import styled from "styled-components";

// Define a styled component for the grid container
const StyledGrid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

// Define a styled component for the grid item
const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

function DataTableEdit({ row }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mr-2">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <StyledGrid>
          <StyledGridItem>
            <Label htmlFor="name" className="pb-2 font-bold">
              Name
            </Label>
            <Input id="name" defaultValue={row.name} />
          </StyledGridItem>
          <StyledGridItem>
            <Label htmlFor="category" className="pb-2 font-bold">
              Category
            </Label>
            <Input id="category" defaultValue={row.category} />
          </StyledGridItem>
          <StyledGridItem>
            <Label htmlFor="price" className="pb-2 font-bold">
              Price
            </Label>
            <Input id="price" defaultValue={row.price} />
          </StyledGridItem>
          <StyledGridItem>
            <Label htmlFor="stockQuantity" className="pb-2 font-bold">
              Stock Quantity
            </Label>
            <Input id="stockQuantity" defaultValue={row.stockQuantity} />
          </StyledGridItem>
          <StyledGridItem>
            <Label htmlFor="image" className="pb-2 font-bold">
              Image
            </Label>
            <Input id="image" type="file" accept="image/*" />
          </StyledGridItem>
        </StyledGrid>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { DataTableEdit };
