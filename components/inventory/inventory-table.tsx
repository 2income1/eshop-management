"use client"

import { useState } from "react"
import { MoreHorizontal, Plus, Minus, RefreshCcw } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { StockOperationDialog } from "@/components/dialogs/stock-operation-dialog"

const inventory = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    sku: "IPH-15PM-256",
    warehouse: "北京仓",
    stock: 245,
    safetyStock: 200,
    maxStock: 500,
    status: "normal",
  },
  {
    id: "2",
    name: 'MacBook Pro 14"',
    sku: "MBP-14-512",
    warehouse: "上海仓",
    stock: 89,
    safetyStock: 100,
    maxStock: 300,
    status: "low",
  },
  {
    id: "3",
    name: "AirPods Pro (第2代)",
    sku: "APP-G2-WHT",
    warehouse: "广州仓",
    stock: 456,
    safetyStock: 300,
    maxStock: 800,
    status: "normal",
  },
  {
    id: "4",
    name: "时尚休闲T恤",
    sku: "CLO-TSH-001",
    warehouse: "深圳仓",
    stock: 0,
    safetyStock: 50,
    maxStock: 200,
    status: "out-of-stock",
  },
  {
    id: "5",
    name: "智能扫地机器人",
    sku: "HOM-ROB-X1",
    warehouse: "北京仓",
    stock: 127,
    safetyStock: 80,
    maxStock: 250,
    status: "normal",
  },
]

const statusConfig = {
  normal: { label: "正常", variant: "default" as const },
  low: { label: "偏低", variant: "secondary" as const },
  "out-of-stock": { label: "缺货", variant: "destructive" as const },
}

export function InventoryTable() {
  const [dialogState, setDialogState] = useState<{
    open: boolean
    type: "in" | "out" | "transfer"
    productName: string
  }>({
    open: false,
    type: "in",
    productName: "",
  })

  const openDialog = (type: "in" | "out" | "transfer", productName: string) => {
    setDialogState({ open: true, type, productName })
  }

  return (
    <>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>商品名称</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>仓库</TableHead>
              <TableHead>当前库存</TableHead>
              <TableHead>安全库存</TableHead>
              <TableHead>库存状态</TableHead>
              <TableHead>库存占比</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => {
              const percentage = (item.stock / item.maxStock) * 100

              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">{item.sku}</TableCell>
                  <TableCell>{item.warehouse}</TableCell>
                  <TableCell>
                    <span
                      className={
                        item.stock === 0
                          ? "text-destructive font-semibold"
                          : item.stock < item.safetyStock
                            ? "text-chart-5 font-semibold"
                            : "font-medium"
                      }
                    >
                      {item.stock}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.safetyStock}</TableCell>
                  <TableCell>
                    <Badge variant={statusConfig[item.status].variant}>{statusConfig[item.status].label}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={percentage} className="w-20 h-2" />
                      <span className="text-xs text-muted-foreground min-w-[40px]">{percentage.toFixed(0)}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2" onClick={() => openDialog("in", item.name)}>
                          <Plus className="h-4 w-4" />
                          入库
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2" onClick={() => openDialog("out", item.name)}>
                          <Minus className="h-4 w-4" />
                          出库
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2" onClick={() => openDialog("transfer", item.name)}>
                          <RefreshCcw className="h-4 w-4" />
                          调拨
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>

      <StockOperationDialog
        open={dialogState.open}
        onOpenChange={(open) => setDialogState((prev) => ({ ...prev, open }))}
        type={dialogState.type}
        productName={dialogState.productName}
      />
    </>
  )
}
