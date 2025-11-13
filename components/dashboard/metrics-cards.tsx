import { TrendingUp, TrendingDown, Users, Eye, ShoppingCart, Percent } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  {
    title: "总访问量",
    value: "45,231",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "流量转化率",
    value: "3.24%",
    change: "+0.3%",
    trend: "up",
    icon: Percent,
  },
  {
    title: "商品浏览量",
    value: "18,742",
    change: "+8.2%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "浏览转化率",
    value: "2.68%",
    change: "-0.1%",
    trend: "down",
    icon: ShoppingCart,
  },
]

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.trend === "up"

        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-chart-2" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
                <span className={`text-sm font-medium ${isPositive ? "text-chart-2" : "text-destructive"}`}>
                  {metric.change}
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs 上周</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
