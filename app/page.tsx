import { DashboardLayout } from "@/components/dashboard-layout"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { TrafficChart } from "@/components/dashboard/traffic-chart"
import { ConversionChart } from "@/components/dashboard/conversion-chart"
import { ProductViewsChart } from "@/components/dashboard/product-views-chart"
import { RealtimeStats } from "@/components/dashboard/realtime-stats"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">数据监控中心</h1>
          <p className="text-muted-foreground mt-1">实时查看流量数据、转化率及各项关键指标</p>
        </div>

        {/* Metrics Cards */}
        <MetricsCards />

        {/* Charts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <TrafficChart />
          <ConversionChart />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <ProductViewsChart />
          </div>
          <RealtimeStats />
        </div>
      </div>
    </DashboardLayout>
  )
}
