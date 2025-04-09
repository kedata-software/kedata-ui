import { Meta, StoryObj } from 'storybook-solidjs';
import DataTable from '../data-table';
import { IconButton } from '../../icon-button';
import { KiDotsVerticalSolid } from '@kedata-ui/solid-icons';
import { Menu } from '../../menu';

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  title: 'Display/DataTable',
};

const Base: StoryObj<typeof DataTable> = {
  args: {
    columns: [
      {
        label: 'Name',
        name: 'name',
      },
      {
        label: 'Age',
        name: 'age',
      },
      {
        label: '',
        name: 'id',
        width: '100px',
        renderCell: (value) => {
          return (
            <Menu
              options={[
                {
                  label: 'Edit',
                  value: 'edit',
                },
                {
                  label: 'Delete',
                  value: 'delete',
                },
              ]}
            >
              {(props) => (
                <IconButton
                  size="small"
                  variant="outline"
                  aria-label="Menu"
                  {...props}
                >
                  {(props) => <KiDotsVerticalSolid {...props} />}
                </IconButton>
              )}
            </Menu>
          );
        },
      },
    ],
    data: [
      {
        name: 'John Doe',
        age: 25,
        id: 1,
      },
      {
        name: 'Jane Doe',
        age: 30,
        id: 2,
      },
      {
        name: 'John Smith',
        age: 35,
        id: 3,
      },
      {
        name: 'Jane Smith',
        age: 40,
        id: 4,
      },
      {
        name: 'John Doe',
        age: 25,
        id: 5,
      },
      {
        name: 'Jane Doe',
        age: 30,
        id: 6,
      },
      {
        name: 'John Smith',
        age: 35,
        id: 7,
      },
      {
        name: 'Jane Smith',
        age: 40,
        id: 8,
      },
    ],
    totalData: 8,
    pageSize: 4,
    pagination: true,
  },
  render: (props) => {
    return <DataTable {...props} />;
  },
};

export { Base };
export default meta;
