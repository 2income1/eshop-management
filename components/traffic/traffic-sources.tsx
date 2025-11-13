"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "直接访问", value: 4200, color: "hsl(var(--chart-1))" },
  { name: "搜索引擎", value: 3800, color: "hsl(var(--chart-2))" },
  { name: "社交媒体", value: 2400, color: "hsl(var(--chart-3))" },
  { name: "推荐链接", value: 1800, color: "hsl(var(--chart-4))" },
  { name: "其他", value: 1200, color: "hsl(var(--chart-5))" },
]

const chartConfig = {
  value: {
    label: "访问量",
  },
}

export function TrafficSources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>流量来源</CardTitle>
        <CardDescription>各渠道访问量分布</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
