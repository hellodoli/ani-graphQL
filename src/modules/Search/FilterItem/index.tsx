import React from 'react'

import './style.scss'

interface Props {
  children?: React.ReactNode
  label?: string
  type?: 'select' | 'search'
}

const FilterItem = ({ children, type = 'select', label = '' }: Props) => {
  return (
    <div className="ani-filter-item">
      <div className="label-name">{label}</div>
      <div className={`wrap ${type}-wrap`}>{children}</div>
    </div>
  )
}

export default FilterItem
