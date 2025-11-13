"use client"

import { useState } from "react"
import Image from "next/image"
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { EditProductDialog } from "@/components/dialogs/edit-product-dialog"
import { ProductDetailDialog } from "@/components/dialogs/product-detail-dialog"
import { DeleteConfirmDialog } from "@/components/dialogs/delete-confirm-dialog"

const products = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    sku: "IPH-15PM-256",
    category: "电子产品",
    price: 9999,
    stock: 245,
    status: "active",
    image: "/modern-smartphone.png",
  },
  {
    id: "2",
    name: 'MacBook Pro 14"',
    sku: "MBP-14-512",
    category: "电子产品",
    price: 15999,
    stock: 89,
    status: "active",
    image: "/silver-macbook-on-desk.png",
  },
  {
    id: "3",
    name: "AirPods Pro (第2代)",
    sku: "APP-G2-WHT",
    category: "电子产品",
    price: 1899,
    stock: 456,
    status: "active",
    image: "/wireless-earbuds.png",
  },
  {
    id: "4",
    name: "时尚休闲T恤",
    sku: "CLO-TSH-001",
    category: "服装配饰",
    price: 199,
    stock: 0,
    status: "out-of-stock",
    image: "/plain-white-tshirt.png",
  },
  {
    id: "5",
    name: "智能扫地机器人",
    sku: "HOM-ROB-X1",
    category: "家居用品",
    price: 2599,
    stock: 127,
    status: "active",
    image: "/robot-vacuum.jpg",
  },
]

const statusConfig = {
  active: { label: "在售", variant: "default" as const },
  draft: { label: "草稿", variant: "secondary" as const },
  "out-of-stock": { label: "缺货", variant: "destructive" as const },
}

export function ProductsTable() {
  const [editDialog, setEditDialog] = useState<{ open: boolean; product: (typeof products)[0] | null }>({
    open: false,
    product: null,
  })
  const [detailDialog, setDetailDialog] = useState<{ open: boolean; product: (typeof products)[0] | null }>({
    open: false,
    product: null,
  })
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; product: (typeof products)[0] | null }>({
    open: false,
    product: null,
  })

  return (
    <>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">图片</TableHead>
              <TableHead>商品名称</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>分类</TableHead>
              <TableHead>价格</TableHead>
              <TableHead>库存</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-muted-foreground">{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="font-medium">¥{product.price.toLocaleString()}</TableCell>
                <TableCell>
                  <span
                    className={
                      product.stock === 0
                        ? "text-destructive font-medium"
                        : product.stock < 100
                          ? "text-chart-5 font-medium"
                          : ""
                    }
                  >
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={statusConfig[product.status].variant}>{statusConfig[product.status].label}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2" onClick={() => setDetailDialog({ open: true, product })}>
                        <Eye className="h-4 w-4" />
                        查看详情
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2" onClick={() => setEditDialog({ open: true, product })}>
                        <Edit className="h-4 w-4" />
                        编辑
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="gap-2 text-destructive"
                        onClick={() => setDeleteDialog({ open: true, product })}
                      >
                        <Trash2 className="h-4 w-4" />
                        删除
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <ProductDetailDialog
        open={detailDialog.open}
        onOpenChange={(open) => setDetailDialog((prev) => ({ ...prev, open }))}
        product={detailDialog.product}
      />

      <EditProductDialog
        open={editDialog.open}
        onOpenChange={(open) => setEditDialog((prev) => ({ ...prev, open }))}
        product={editDialog.product}
      />

      <DeleteConfirmDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog((prev) => ({ ...prev, open }))}
        productName={deleteDialog.product?.name || ""}
        onConfirm={() => {
          // Delete logic here
        }}
      />
    </>
  )
}
