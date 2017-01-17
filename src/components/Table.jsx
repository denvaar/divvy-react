import React from 'react';

/*
 * A table.
 * See propTypes for param info.
*/
const Table = ({ columns, rows, className }) => {
  return (
    <table className={className} cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          {(() => { return columns.map(header => <th key={header.dataKey}><span className="">{header.title}</span></th>)})() }
        </tr>
      </thead>
      <tbody>
        {(() => { return rows.map((row, i) => <tr key={i}>{_mapRow(row, columns)}</tr>)})() }
      </tbody>
    </table>
  );  
}

Table.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.is_required,
    dataKey: React.PropTypes.string.is_required,
  })).isRequired,
  rows: React.PropTypes.arrayOf(React.PropTypes.object)
};

const _mapRow = (row, columns) => {
  return Object.keys(columns).map((k, i) => {
    return <td key={i}>{row[columns[k].dataKey]}</td>;
  }); 
};

export default Table;
