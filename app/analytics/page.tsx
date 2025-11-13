import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Clock, Users, ShoppingBag } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">流量监控</h1>
          <p className="text-muted-foreground mt-1">实时监控网站流量和用户行为</p>
        </div>

        {/* Real-time Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">在线用户</CardTitle>
              <Activity className="h-4 w-4 text-chart-1 animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground mt-1">实时在线人数</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">今日访客</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,456</div>
              <p className="text-xs text-muted-foreground mt-1">独立访客数</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">平均停留</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3:24</div>
              <p className="text-xs text-muted-foreground mt-1">分钟</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">今日订单</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground mt-1">成交订单数</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Analytics Content */}
        <Card>
          <CardHeader>
            <CardTitle>实时流量监控</CardTitle>
            <CardDescription>本页面提供实时的流量监控功能，可以查看当前在线用户、访问趋势等数据</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
            实时流量图表区域
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
