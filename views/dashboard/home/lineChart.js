"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const chartData = [
  { month: "مهر", sales: 186, expense: 80 },
  { month: "آبان", sales: 305, expense: 200 },
  { month: "آذر", sales: 237, expense: 120 },
  { month: "دی", sales: 73, expense: 190 },
  { month: "بهمن", sales: 209, expense: 130 },
  { month: "اسفند", sales: 214, expense: 140 },
];

const chartConfig = {
  sales: {
    label: "فروش",
    color: "hsl(var(--chart-1))",
  },
  expense: {
    label: "خرید",
    color: "hsl(var(--chart-2))",
  },
};

export function LineChartSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>میزان فروش و خرید</CardTitle>
        <CardDescription>در طول 6 ماه گذشته</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="expense"
              type="natural"
              fill="var(--color-expense)"
              fillOpacity={0.4}
              stroke="var(--color-expense)"
              stackId="a"
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="var(--color-sales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              <TrendingUp className="h-4 w-4" /> به ازای 5.2% این ماه
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              مهر - فروردین ۱۴۰۳
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
