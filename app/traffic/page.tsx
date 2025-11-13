"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TrafficSources } from "@/components/traffic/traffic-sources"
import { TopPages } from "@/components/traffic/top-pages"
import { DeviceBreakdown } from "@/components/traffic/device-breakdown"
import { GeographicData } from "@/components/traffic/geographic-data"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function TrafficPage() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { toast } = useToast()

  const handleRefresh = async () => {
    setIsRefreshing(true)
    console.log("[v0] 刷新流量数据")

    // 模拟刷新数据
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "数据已刷新",
      description: "流量数据已更新到最新状态",
    })

    setIsRefreshing(false)
  }

  const handleExport = () => {
    console.log("[v0] 导出流量报告")

    // 模拟导出数据
    const reportData = {
      date: new Date().toLocaleDateString("zh-CN"),
      totalVisits: 24589,
      averageTime: "3:24",
      bounceRate: "42%",
    }

    const dataStr = JSON.stringify(reportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `流量报告_${new Date().toLocaleDateString("zh-CN").replace(/\//g, "-")}.json`
    link.click()
    URL.revokeObjectURL(url)

    toast({
      title: "导出成功",
      description: "流量报告已下载到本地",
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">流量管理</h1>
            <p className="text-muted-foreground mt-1">分析流量来源、用户行为和访问数据</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent" onClick={handleExport}>
              <Download className="h-4 w-4" />
              导出报告
            </Button>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="grid gap-6 md:grid-cols-2">
          <TrafficSources />
          <DeviceBreakdown />
        </div>

        {/* Top Pages and Geographic Data */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TopPages />
          </div>
          <GeographicData />
        </div>
      </div>
    </DashboardLayout>
  )
}
