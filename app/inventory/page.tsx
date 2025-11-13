"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { InventoryOverview } from "@/components/inventory/inventory-overview"
import { InventoryTable } from "@/components/inventory/inventory-table"
import { InventoryAlerts } from "@/components/inventory/inventory-alerts"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { ImportInventoryDialog } from "@/components/dialogs/import-inventory-dialog"

export default function InventoryPage() {
  const handleExport = () => {
    console.log("[v0] Exporting inventory report")
    // Export logic here
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">库存管理</h1>
            <p className="text-muted-foreground mt-1">管理商品库存、预警和调拨</p>
          </div>
          <div className="flex items-center gap-2">
            <ImportInventoryDialog />
            <Button variant="outline" className="gap-2 bg-transparent" onClick={handleExport}>
              <Download className="h-4 w-4" />
              导出报表
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <InventoryOverview />

        {/* Alerts */}
        <InventoryAlerts />

        {/* Inventory Table */}
        <InventoryTable />
      </div>
    </DashboardLayout>
  )
}
