export type UPCalendarMonthsItemDate = {
  date: Date
  dateStr?: string
  selected: boolean | null
  disabled: boolean | null
  dot?: boolean  | null
  day?: string
  week: number
  month?: number
  bottomInfo?: string
}

export type CalendarMonthItem = {
  top: number
  year: string
  month: string
  date: Array<UPCalendarMonthsItemDate>
}
