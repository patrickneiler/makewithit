import { parseISO, format } from 'date-fns'

export function PostDate({ dateString }: {
  dateString: string
}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'MMM d, yyyy')}</time>
}
export default PostDate;