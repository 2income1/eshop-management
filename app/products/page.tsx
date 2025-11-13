import { DashboardLayout } from "@/components/dashboard-layout"
import { ProductsTable } from "@/components/products/products-table"
import { ProductsFilters } from "@/components/products/products-filters"
import { AddProductDialog } from "@/components/dialogs/add-product-dialog"

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">商品管理</h1>
            <p className="text-muted-foreground mt-1">管理商品信息、价格、库存和状态</p>
          </div>
          <AddProductDialog />
        </div>

        {/* Filters */}
        <ProductsFilters />

        {/* Products Table */}
        <ProductsTable />
      </div>
    </DashboardLayout>
  )
}
