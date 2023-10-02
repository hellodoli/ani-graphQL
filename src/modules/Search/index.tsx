import React from 'react'
import FilterItem from './FilterItem'
import SearchInput from './SearchInput'
import './style.scss'

const Search = () => {
  return (
    <div className="filters">
      <FilterItem label="Search" type="search">
        <SearchInput />
      </FilterItem>
      <FilterItem label="Genres" type="select">
        <div className="qq">Test component</div>
      </FilterItem>
    </div>
  )
}

export default Search
