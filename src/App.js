import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Form from "./components/form";
import Sort from "./components/sort";
import Table from "./components/table";
import { useState } from "react";

function App() {
  const defaultData = [
    {
      date: "2024-03-04",
      description: "Grocery Shopping",
      category: "Groceries",
      amount: "1500.00",
    },
    {
      date: "2024-03-01",
      description: "Fuel",
      category: "Transportation",
      amount: "1900.00",
    },
    {
      date: "2024-02-06",
      description: "Electricity Bill",
      category: "Utilities",
      amount: "3200.00",
    },
    {
      date: "2024-01-31",
      description: "Internet Bill",
      category: "Utilities",
      category: "Entertainment",
      amount: "2400.00",
    }
  ];
  const [data, setData] = useState(defaultData);
  const [search, setSearch] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");

  function onSubmitData(formData) {
    setData((data) => [...data, formData]);
  }

  function onSearchData(event) {
    setSearch(event.target.value);
  }

  function handleSort(event) {
    setSelectedSortOption(event.target.value);
  }
  const itemsToDisplay = data.filter((item) => {
    if (search.length > 0) {
      return item.description.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  });

  return (
    <div>
      <Header />
      <Search onSearchData={onSearchData} search={search} />
      <Form onSubmitData={onSubmitData} />
      <Sort
        handleSort={handleSort}
        selectedSortOption={selectedSortOption}
      />
      <Table
        data={ 
          // Sort by descriptions in ascending order
          selectedSortOption === "description"
            ? itemsToDisplay.sort((a, b) =>
                a.description.localeCompare(b.description)
              )
            : selectedSortOption === "category"  // Sort by categories in ascending order
            ? itemsToDisplay.sort((a, b) =>
                a.category.localeCompare(b.category)
              ) 
            : itemsToDisplay // Default to unsorted data on page load
        }
      />
    </div>
  );
}

export default App;
