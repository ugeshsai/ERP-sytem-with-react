import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const categories = [
    {
      value: "Category 1",
      label: "Category 1"
    },
    {
      value: "Category 2",
      label: "Category 2"
    },
    {
      value: "Category 3",
      label: "Category 3"
    }
  ]
  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "pending",
      label: "Pending",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "shipped",
      label: "Shipped",
      icon: CircleIcon,
    },
    {
      value: "processing",
      label: "Processing",
      icon: StopwatchIcon,
    },
    {
      value: "delivered",
      label: "Delivered",
      icon: CheckCircledIcon,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CrossCircledIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]