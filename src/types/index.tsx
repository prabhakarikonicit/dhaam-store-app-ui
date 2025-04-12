import { JSX } from "react";

export interface TableColumns {
    field: string;
    headerName: string;
    type?: "text" | "date" | "number" | "jsx";
    sort?:boolean
  }

  export interface BaseItem {
    id?: string;
    isActive?: boolean;
    [key: string]: any;
  }

  // Define field types for form fields
export type FieldType =
| "text"
| "number"
| "email"
| "password"
| "select"
| "textarea"
| "checkbox"
| "date"
| "time"
| "radio"
| "file"
| "image-upload"
| "custom";

  // Field definition interface
export interface FieldDefinition {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  helperText?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  pattern?: string;
  rows?: number; // For textarea
  cols?: number; // For textarea
  customRender?: (props: {
    value: any;
    onChange: (value: any) => void;
    disabled?: boolean;
    error?: string;
  }) => JSX.Element;
  fullWidth?: boolean; // Add this to allow fields to take full width
  containerClassName?: string; // Custom class for the field container
  inputClassName?: string; // Custom class for the input element
  layout?: "horizontal" | "vertical"; // Field layout - default is vertical
}

  export interface JSXTableCell {
    jsx:JSX.Element;
    value:string;
  }

  export interface StatCardProps {
    value: string;
    description: string | React.ReactNode;
    descriptionFirst?: boolean;
    icon?: string;
    fontWeight?: string;
  }
  
  export interface Store extends TableData{
    storeId: JSXTableCell;
    storeName: string;
    address:string;
    rating: JSXTableCell;
    activeStatus: JSXTableCell;
    amount:string;
    items?: OrderItem[]
  }

  interface OrderItem {
    name: string;
    quantity: number;
    price: string;
  }

  export interface TableData {
    id:string;
    [key: string]: any;
  }

  export interface Filter {
    field: string;
    value: string;
    type?: "text" | "date" | "number";
    dateOperator?: "equals" | "before" | "after" | "between";
    endDate?: string;
  }