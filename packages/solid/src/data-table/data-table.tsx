import useDataTable from './use-data-table';
import { Pagination } from '../pagination';
import type { DataTableProps } from './index.types';
import { For, type Component } from 'solid-js';

const DataTable: Component<DataTableProps> = (props) => {
  const api = useDataTable(props);

  return (
    <div {...api.getRootProps()}>
      <div {...api.getBodyProps()}>
        <table {...api.getTableProps()}>
          <thead {...api.getTableHeaderProps()}>
            <tr {...api.getTableRowProps()}>
              <For each={api.columns()}>
                {(column) => (
                  <th
                    {...api.getTableHeadProps()}
                    style={{
                      get width() {
                        return column.width;
                      },
                    }}
                  >
                    {column.label}
                  </th>
                )}
              </For>
            </tr>
          </thead>
          <tbody {...api.getTableBodyProps()}>
            <For each={api.paginatedData()}>
              {(row) => (
                <tr {...api.getTableRowProps()}>
                  <For each={api.columns()}>
                    {(column) => (
                      <td {...api.getTableCellProps()}>
                        {column.renderCell
                          ? column.renderCell(row[column.name], row)
                          : row[column.name]}
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>

      <div {...api.getFooterProps()}>
        {api.pagination() && <Pagination {...api.getPaginationProps()} />}
      </div>
    </div>
  );
};

export default DataTable;
