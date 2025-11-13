"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "周一", rate: 2.8 },
  { date: "周二", rate: 3.2 },
  { date: "周三", rate: 2.9 },
  { date: "周四", rate: 3.4 },
  { date: "周五", rate: 3.8 },
  { date: "周六", rate: 4.1 },
  { date: "周日", rate: 3.5 },
]

const chartConfig = {
  rate: {
    label: "转化率 (%)",
    color: "hsl(var(--chart-2))",
  },
}

export function ConversionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>本周转化率</CardTitle>
        <CardDescription>流量到订单的转化趋势</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="hsl(var(--chart-2))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
