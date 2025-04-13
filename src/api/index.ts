import { FetchedStoreType } from "../types";

export const fetchStores = async (): Promise<FetchedStoreType[]> => {
  const stores: FetchedStoreType[] = [
    {
      id: "1",
      storeId: "#20345",
      storeName: "Queenstown Public House",
      address: "6391 Elgin St. Celina, Delaware 10299",
      rating: "4.21",
      activeStatus: "Active",
      amount: "₹300.00",
    },
    {
      id: "2",
      storeId: "#20346",
      storeName: "Plumed Horse",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      rating: "4.01",
      activeStatus: "Active",
      amount: "₹250.00",
    },
    {
      id: "3",
      storeId: "#20347",
      storeName: "King Lee's",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      rating: "3.01",
      activeStatus: "Active",
      amount: "₹400.00",
    },
    {
      id: "4",
      storeId: "#20348",
      storeName: "King Lee's",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      rating: "2.01",
      activeStatus: "Active",
      amount: "150.00",
    },
    {
      id: "5",
      storeId: "#20349",
      storeName: "Crab Hut",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      rating: "3.55",
      activeStatus: "Active",
      amount: "99.00",
    },
  ];

  try {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(stores);
      }, 1000); // Simulate a 1-second delay
    });

    return data as FetchedStoreType[];
  } catch (error) {
    throw error;
  }
};
