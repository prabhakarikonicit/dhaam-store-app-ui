import { JSX } from "react";

export interface TableColumns {
    field: string;
    headerName: string;
    type?: "text" | "date" | "number" | "jsx";
    sort?:boolean
  }

  export interface JSXTableCell {
    jsx:JSX.Element;
    value:string;
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