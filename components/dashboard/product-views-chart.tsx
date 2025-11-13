"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { category: "电子产品", views: 8234, conversions: 245 },
  { category: "服装配饰", views: 6521, conversions: 198 },
  { category: "家居用品", views: 5432, conversions: 156 },
  { category: "美妆护肤", views: 4821, conversions: 178 },
  { category: "食品饮料", views: 3912, conversions: 132 },
]

const chartConfig = {
  views: {
    label: "浏览量",
    color: "hsl(var(--chart-3))",
  },
  conversions: {
    label: "转化数",
    color: "hsl(var(--chart-4))",
  },
}

export function ProductViewsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>商品分类浏览数据</CardTitle>
        <CardDescription>各类商品的浏览量与转化对比</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="category" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="views" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="conversions" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
