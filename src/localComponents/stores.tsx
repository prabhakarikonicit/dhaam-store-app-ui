import React, { useEffect, useState } from "react";
import { FieldDefinition, Store, TableColumns } from "../types";
import UnifiedPopover from "./common/DetailsModal";
import TableTemplate from "./common/tableTemplate";
import StatCard from "./common/statCard";
import activeStore from "../assets/images/activeStore.svg";
import closedStores from "../assets/images/activeStore.svg";
import inactiveStores from "../assets/images/inactiveStores.svg";
import openStores from "../assets/images/openStores.svg";
import verified from "../assets/images/verified.svg";
import CustomModal from "./common/modals";

const Stores = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [popoverStore, setPopoverStore] = useState<Store | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Modal field definitions
  const modalFields: FieldDefinition[] = [
    { id: "name", label: "Store Name", type: "text", required: true },
    { id: "address", label: "Store Address", type: "text", required: true },
    {
      id: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
      ],
      required: true,
    },
  ];

  const handleSave = (data: any) => {
    if (modalMode === "add") {
      const newStoreId = `#${Math.floor(10000 + Math.random() * 90000)}`;
      const newId = Math.random().toString(36).substr(2, 9);
      const newStatus = data.status as "Active" | "Inactive";
      const newStore: Store = {
        id: newId,
        storeId: {jsx:renderStoreId(newStoreId, newId), value:newStoreId},
        storeName: data.name,
        address: data.address,
        rating: {jsx:renderRating('0'), value:'0'},
        activeStatus: {jsx:renderActiveStatus(newStatus), value:newStatus},
        amount: "₹300.00",
      };
      setStores((prev) => [...prev, newStore]);
    } else {
      // Handle edit functionality if needed
    }
    setIsModalOpen(false);
  };

  const handleAddStore = () => {
    setModalMode("add");
    setIsModalOpen(true);
  };

  return (
    <div className="p-0 max-w-full rounded-l sm:max-h-full md:max-h-full lg:max-h-full xl:max-h-full max-h-[80vh] overflow-y-auto bg-background-grey">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 px-8 pt-8">
        <h1 className="text-[20px] font-inter font-[600] text-cardValue">
          Stores
        </h1>
        <div className="flex space-x-2 relative">
          {/* More actions dropdown */}
          <div className="relative">
            <button
              className="bg-backgroundWhite rounded-custom px-4 py-2 flex items-center text-menuSubHeadingColor font-inter font-[12px] font-[500] border border-reloadBorder shadow-sm"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              More actions
              <div className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.70503 5.10503C3.97839 4.83166 4.42161 4.83166 4.69497 5.10503L7 7.41005L9.30503 5.10503C9.57839 4.83166 10.0216 4.83166 10.295 5.10503C10.5683 5.37839 10.5683 5.82161 10.295 6.09498L7.49497 8.89498C7.22161 9.16834 6.77839 9.16834 6.50503 8.89498L3.70503 6.09498C3.43166 5.82161 3.43166 5.37839 3.70503 5.10503Z"
                    fill="#636363"
                  />
                </svg>
              </div>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 left- top-12 bg-white shadow-lg rounded-custom border border-reloadBorder w-43 z-10">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-menuSubHeadingColor font-inter font-[12px] font-[500] whitespace-nowrap"
                  >
                    Import stores
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-menuSubHeadingColor font-inter font-[12px] font-[500] whitespace-nowrap"
                  >
                    Create new view
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-menuSubHeadingColor font-inter font-[12px] font-[500] whitespace-nowrap"
                  >
                    Hide analytics
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Add store button */}
          <button
            className="bg-bgButton text-whiteColor font-inter font-[12px] font-[600] border border-btnBorder rounded-md px-4 py-2 flex items-center shadow-sm"
            onClick={handleAddStore}
          >
            {/* <Plus size={16} className="mr-1" /> */}
            Add store
            <div className="ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.00004 2.33334V11.6667M11.6667 7L2.33337 7"
                  stroke="#D9D9D9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-1 bg-backgroundWhite mx-8 ps-3 py-3 pe-3  rounded-custom8px">
        <StatCard
          value="213"
          description="Active Store"
          descriptionFirst={true}
          icon={activeStore}
        />
        <StatCard
          value="245"
          description="Inactive Stores"
          descriptionFirst={true}
          icon={inactiveStores}
        />
        <StatCard
          value="111"
          description="Open Stores"
          descriptionFirst={true}
          icon={openStores}
        />
        <StatCard
          value="164"
          description="Closed Store"
          descriptionFirst={true}
          icon={closedStores}
        />
        <StatCard
          value="164"
          description="Verified"
          descriptionFirst={true}
          icon={verified}
        />
        <StatCard
          value="50"
          description="Verified"
          descriptionFirst={true}
          icon={verified}
        />
      </div>
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
      {/* Modal */}
      {isModalOpen && (
          <CustomModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            mode={modalMode}
            onSave={handleSave}
            title={modalMode === "add" ? "Add Store" : "Edit Store"}
            fields={modalFields}
            size="md"
            showToggle={false}
            confirmText={modalMode === "add" ? "Add" : "Save"}
          />
        )}
    </div>
  );
};

export default Stores;
