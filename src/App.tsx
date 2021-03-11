import { useState, useEffect } from 'react';
import { ChannelType } from './components/Pagination';
import Filters from './components/Filters';
import ChannelsList from './components/List';
import Pagination from './components/Pagination';
import channelList from './data/channel-list';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredList, setFilteredList] = useState<ChannelType | any>([]);

  const itemPerPage = 15;

  function handlePageChanged(newState: number) {
    setCurrentPage(newState);
  }

  function handleQueryChange(value: string) {
    setQuery(value)
  }

  function handleCountryChange(value: string) {
    setSelectedCountry(value)
  }

  function resetFilteredList(value: string) {
    const regex = new RegExp(value, 'ig');
    let result = channelList;

    if (value.length) {
      const filteredByQuery: Array<ChannelType> = channelList.filter(({ label }) => label.match(regex));
      result = filteredByQuery;
    }

    if (selectedCountry.length) {
      const filteredByCountry: Array<ChannelType> = channelList.filter(({ country }) => country === selectedCountry);
      result = filteredByCountry;
    }

    setFilteredList(result);
  }

  useEffect(() => {
    resetFilteredList(query);
  }, [query, selectedCountry]);

  return (
    <div className="App">
      <div className="wrapper">
        <Filters
          onQueryChange={handleQueryChange}
          onCountryChange={handleCountryChange}
        />

        <Pagination
          key="top"
          data={filteredList}
          currentPage={currentPage}
          itemsPerPage={itemPerPage}
          onPageChange={handlePageChanged}
        />

        <ChannelsList
          data={filteredList}
          currentPage={currentPage}
        />

        <Pagination
          key="bottom"
          data={filteredList}
          currentPage={currentPage}
          itemsPerPage={itemPerPage}
          onPageChange={handlePageChanged}
        />
      </div>
    </div>
  );
}

export default App;
