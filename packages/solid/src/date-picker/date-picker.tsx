import createDatePicker from './create-date-picker';
import { Index, Portal } from 'solid-js/web';
import type { DatePickerProps } from './index.types';
import type { Component } from 'solid-js';
import {
  KiCheveronLeftOutline,
  KiCheveronRightOutline,
} from '@kedata-ui/solid-icons';

const DatePicker: Component<DatePickerProps> = (props) => {
  const api = createDatePicker(props);

  return (
    <div {...api.getRootProps()}>
      <div {...api.getControlProps()}>
        <div {...api.getTriggerProps()}>
          {/* {api.value()[0].toLocaleDateString()} */}
        </div>
      </div>
      <Portal>
        <div {...api.getPositionerProps()}>
          <div {...api.getContentProps()}>
            <div hidden={api.zagApi().view !== 'day'}>
              <div {...api.getViewControlProps({ view: 'year' })}>
                <button {...api.getPrevTriggerProps()}>
                  <KiCheveronLeftOutline />
                </button>
                <button {...api.getViewTriggerProps()}>
                  {api.zagApi().visibleRangeText.start}
                </button>
                <button {...api.getNextTriggerProps()}>
                  <KiCheveronRightOutline />
                </button>
              </div>
              <table {...api.getTableProps({ view: 'day' })}>
                <thead {...api.getTableHeaderProps({ view: 'day' })}>
                  <tr {...api.getTableRowProps({ view: 'day' })}>
                    {api.zagApi().weekDays.map((day, i) => (
                      <th scope="col" aria-label={day.long}>
                        {day.narrow}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody {...api.getTableBodyProps({ view: 'day' })}>
                  <Index each={api.zagApi().weeks}>
                    {(week) => (
                      <tr {...api.getTableRowProps({ view: 'day' })}>
                        <Index each={week()}>
                          {(value) => (
                            <td
                              {...api.getDayTableCellProps({ value: value() })}
                            >
                              <div
                                {...api.getDayTableCellTriggerProps({
                                  value: value(),
                                })}
                              >
                                {value().day}
                              </div>
                            </td>
                          )}
                        </Index>
                      </tr>
                    )}
                  </Index>
                </tbody>
              </table>
            </div>

            <div hidden={api.zagApi().view !== 'month'}>
              <div {...api.getViewControlProps({ view: 'month' })}>
                <button {...api.getPrevTriggerProps({ view: 'month' })}>
                  Prev
                </button>
                <button {...api.getViewTriggerProps({ view: 'month' })}>
                  {api.zagApi().visibleRange.start.year}
                </button>
                <button {...api.getNextTriggerProps({ view: 'month' })}>
                  Next
                </button>
              </div>

              <table {...api.getTableProps({ view: 'month', columns: 4 })}>
                <tbody {...api.getTableBodyProps({ view: 'month' })}>
                  <Index
                    each={api
                      .zagApi()
                      .getMonthsGrid({ columns: 4, format: 'short' })}
                  >
                    {(months) => (
                      <tr {...api.getTableRowProps({ view: 'month' })}>
                        <Index each={months()}>
                          {(month) => (
                            <td {...api.getMonthTableCellProps(month())}>
                              <div
                                {...api.getMonthTableCellTriggerProps(month())}
                              >
                                {month().label}
                              </div>
                            </td>
                          )}
                        </Index>
                      </tr>
                    )}
                  </Index>
                </tbody>
              </table>
            </div>

            <div hidden={api.zagApi().view !== 'year'}>
              <div {...api.getViewControlProps({ view: 'year' })}>
                <button {...api.getPrevTriggerProps({ view: 'year' })}>
                  Prev
                </button>
                <span>
                  {api.zagApi().getDecade().start} -{' '}
                  {api.zagApi().getDecade().end}
                </span>
                <button {...api.getNextTriggerProps({ view: 'year' })}>
                  Next
                </button>
              </div>

              <table {...api.getTableProps({ view: 'year', columns: 4 })}>
                <tbody {...api.getTableBodyProps()}>
                  <Index each={api.zagApi().getYearsGrid({ columns: 4 })}>
                    {(years) => (
                      <tr {...api.getTableRowProps({ view: 'year' })}>
                        <Index each={years()}>
                          {(year) => (
                            <td
                              {...api.getYearTableCellProps({
                                ...year(),
                                columns: 4,
                              })}
                            >
                              <div
                                {...api.getYearTableCellTriggerProps({
                                  ...year(),
                                  columns: 4,
                                })}
                              >
                                {year().label}
                              </div>
                            </td>
                          )}
                        </Index>
                      </tr>
                    )}
                  </Index>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default DatePicker;
