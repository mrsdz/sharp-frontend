import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
// components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./pagination";

export function DataTable({
  columns,
  data,
  refetchData,
  onRowClick,
  customHeight = "",
  pagination = true,
  tableCellClassName = "",
  tableHeaderClassName = "",
}) {
  const table = useReactTable({
    data: data.results,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && {
      manualPagination: true,
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: (updater) => {
        const newPagination = updater({
          pageIndex: data.current_page - 1,
          pageSize: data.count_per_page,
        });

        refetchData({ page: newPagination.pageIndex + 1, countPerPage: newPagination.pageSize });
      },
      pageCount: data.total_pages,
      state: {
        pagination: {
          pageIndex: data.current_page - 1,
          pageSize: data.count_per_page,
        },
      },
    }),
  });

  return (
    <>
      <div className={`rounded-md border overflow-auto ${customHeight}`}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className={tableHeaderClassName} key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="odd:bg-neutral-50 dark:odd:bg-muted/50"
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className={tableCellClassName} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  اطلاعاتی یافت نشد!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pagination && <DataTablePagination table={table} />}
    </>
  );
}
