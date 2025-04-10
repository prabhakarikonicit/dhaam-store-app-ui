import React, { useEffect, useState } from "react";
import { Store, TableColumns } from "../types";
import UnifiedPopover from "./common/DetailsModal";
import TableTemplate from "./common/tableTemplate";

const Stores = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [popoverStore, setPopoverStore] = useState<Store | null>(null);

  const renderStoreId = (value: string, storeId: string) => {
    return (
      <div className="flex items-center text-cardValue font-inter font-[500] text-[12px]">
        {value}
        <button
          className="ml-2"
          onClick={(e) => handleStoreIdClick(e, storeId)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.23431 5.83432C4.54673 5.5219 5.05327 5.5219 5.36569 5.83432L8 8.46864L10.6343 5.83432C10.9467 5.5219 11.4533 5.5219 11.7657 5.83432C12.0781 6.14674 12.0781 6.65327 11.7657 6.96569L8.56569 10.1657C8.25327 10.4781 7.74673 10.4781 7.43431 10.1657L4.23431 6.96569C3.9219 6.65327 3.9219 6.14674 4.23431 5.83432Z"
              fill="#2B2B2B"
            />
          </svg>
        </button>
      </div>
    );
  };

  const renderRating = (value: string) => {
    return (
      <div className="flex items-center text-cardValue font-inter font-[500] text-[12px]">
        <span className="text-yellow-500 mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M7.88206 3.14165C8.12154 2.4046 9.16427 2.40461 9.40375 3.14165L10.2594 5.77509C10.3665 6.10471 10.6737 6.32788 11.0203 6.32788H13.7892C14.5642 6.32788 14.8864 7.31957 14.2594 7.77509L12.0193 9.40265C11.7389 9.60636 11.6216 9.96745 11.7287 10.2971L12.5843 12.9305C12.8238 13.6676 11.9802 14.2805 11.3533 13.8249L9.11314 12.1974C8.83275 11.9937 8.45307 11.9937 8.17268 12.1974L5.93254 13.8249C5.30557 14.2805 4.46199 13.6676 4.70147 12.9305L5.55713 10.2971C5.66423 9.96745 5.5469 9.60636 5.26651 9.40265L3.02637 7.77509C2.3994 7.31957 2.72162 6.32788 3.4966 6.32788H6.26556C6.61214 6.32788 6.91931 6.10471 7.02641 5.77509L7.88206 3.14165Z"
              fill="#125E1B"
            />
          </svg>
        </span>
        {value}
      </div>
    );
  };

  const renderActiveStatus = (status: string) => {
    return (
      <div className="px-1 py-1 rounded-custom4px bg-bgActive text-customWhiteColor text-[12px] font-[600] font-inter text-center">
        {status}
      </div>
    );
  };

  const columns: TableColumns[] = [
    {
      field: "storeId",
      headerName: "Store ID",
      type: "jsx",
      sort: true,
    },
    {
      field: "storeName",
      headerName: "Store",
      type: "text",
    },
    {
      field: "address",
      headerName: "Store Address",
      type: "text",
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "jsx",
    },
    {
      field: "activeStatus",
      headerName: "Status",
      type: "jsx",
    },
  ];

  const [stores, setStores] = useState<Store[]>([
    {
      id: "1",
      storeId: { jsx: renderStoreId("#20345", "1"), value: "#20345" },
      storeName: "Queenstown Public House",
      address: "6391 Elgin St. Celina, Delaware 10299",
      rating: { jsx: renderRating("4.21"), value: "4.21" },
      activeStatus: { jsx: renderActiveStatus("Active"), value: "Active" },
      amount: "₹300.00",
    },
    {
      id: "2",
      storeId: { jsx: renderStoreId("#20346", "2"), value: "#20346" },
      storeName: "Plumed Horse",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      rating: { jsx: renderRating("4.01"), value: "4.01" },
      activeStatus: { jsx: renderActiveStatus("Active"), value: "Active" },
      amount: "₹250.00",
    },
    {
      id: "3",
      storeId: { jsx: renderStoreId("#20347", "3"), value: "#20347" },
      storeName: "King Lee's",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      rating: { jsx: renderRating("3.01"), value: "3.01" },
      activeStatus: { jsx: renderActiveStatus("Active"), value: "Active" },
      amount: "₹400.00",
    },
    {
      id: "4",
      storeId: { jsx: renderStoreId("#20348", "4"), value: "#20348" },
      storeName: "King Lee's",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      rating: { jsx: renderRating("2.01"), value: "2.01" },
      activeStatus: { jsx: renderActiveStatus("Active"), value: "Active" },
      amount: "150.00",
    },
    {
      id: "5",
      storeId: { jsx: renderStoreId("#20349", "5"), value: "#20349" },
      storeName: "Crab Hut",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      rating: { jsx: renderRating("3.55"), value: "3.55" },
      activeStatus: { jsx: renderActiveStatus("Active"), value: "Active" },
      amount: "99.00",
    },
  ]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverOpen &&
        popoverAnchorEl &&
        event.target instanceof Node &&
        !popoverAnchorEl.contains(event.target)
      ) {
        setPopoverOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverOpen, popoverAnchorEl]);

  const handleStoreIdClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    storeId: string
  ) => {
    event.stopPropagation();
    const foundStore = stores.find((store) => store.id == storeId);
    if (foundStore) {
      const storeWithItems = {
        ...foundStore,
        amount: "₹300.00", // Add this line to include amount
        items: [
          {
            name: "Chicken Burger",
            quantity: 2,
            price: "₹100.00",
          },
          {
            name: "Chicken Burger",
            quantity: 2,
            price: "₹100.00",
          },
          {
            name: "Chicken Burger",
            quantity: 2,
            price: "₹100.00",
          },
        ],
      };

      setPopoverAnchorEl(event.currentTarget);
      setPopoverStore(storeWithItems);
      setPopoverOpen(true);
    }
  };

  return (
    <>
      <TableTemplate
        tableColumns={columns}
        tableData={stores}
        enableDateFilters={true}
        densityFirst={true}
        pageSize={10}
        searchPlaceholder="Search Store"
      />
      <UnifiedPopover
          isOpen={popoverOpen}
          onClose={() => setPopoverOpen(false)}
          data={popoverStore}
          type="store"
          anchorEl={popoverAnchorEl}
        />
    </>
  );
};

export default Stores;
