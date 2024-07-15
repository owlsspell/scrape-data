import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CustomTable({ data }) {
  const tableHeads = ["ID", "Title", "Status", "Due / Close Date", "Publish Date UTC-4", "Main Category", "Solicitation Type", "Issuing Agency", "Bid Holders List", "eMM ID"]
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeads.map((head) => (
            <TableHead key={head}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow >
          {Object.keys(data).map((key) => (
            <TableCell key={key}>{data[key]}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table >
  )
}
