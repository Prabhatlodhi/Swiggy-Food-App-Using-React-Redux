export function filterData(searchText, allrestaurants) {
    const filterDatax = allrestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  
    return filterDatax;
  }