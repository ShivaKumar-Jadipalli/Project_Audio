import { SelectDialogExample } from "@/lib/custom/country";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/lib/tremor/Table";

import { Sampledata } from "@/lib/custom/dataextraction";

export default async function TableExample(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const givencountry = searchParams?.query || "World";
  const data = await Sampledata(givencountry);
  const maintitle =
    givencountry === "World"
      ? "Leading Players from Around the World"
      : `Prominent Players from ${givencountry}`;
  return (
    <>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          {maintitle}
        </h3>
      </div>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell className="text-left">Rank </TableHeaderCell>
              <TableHeaderCell>Name </TableHeaderCell>
              <TableHeaderCell>WPM</TableHeaderCell>
              <TableHeaderCell>
                <SelectDialogExample />
              </TableHeaderCell>
              <TableHeaderCell className="text-right">
                Achieved On
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.number}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.wpm}</TableCell>
                <TableCell>{item.country}</TableCell>
                <TableCell className="text-right">
                  {item.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
        Top 30 Players are displayed. If a country has fewer than 30 Players,
        only the available data will be shown.
      </p>
    </>
  );
}
