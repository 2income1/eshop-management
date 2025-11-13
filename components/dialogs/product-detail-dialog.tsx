"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

interface Product {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  status: string
  image: string
}

interface ProductDetailDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
}

const statusConfig = {
  active: { label: "在售", variant: "default" as const },
  draft: { label: "草稿", variant: "secondary" as const },
  "out-of-stock": { label: "缺货", variant: "destructive" as const },
}

export function ProductDetailDialog({ open, onOpenChange, product }: ProductDetailDialogProps) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>商品详情</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative h-48 w-full rounded-lg overflow-hidden bg-muted">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">SKU: {product.sku}</p>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">商品分类</p>
                <p className="font-medium mt-1">{product.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">商品状态</p>
                <div className="mt-1">
                  <Badge variant={statusConfig[product.status as keyof typeof statusConfig].variant}>
                    {statusConfig[product.status as keyof typeof statusConfig].label}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">售价</p>
                <p className="font-medium text-lg mt-1">¥{product.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">库存数量</p>
                <p className={`font-medium text-lg mt-1 ${product.stock === 0 ? "text-destructive" : ""}`}>
                  {product.stock}
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-2">商品描述</p>
              <p className="text-sm leading-relaxed">
                这是一款优质的{product.name}，具有出色的性能和可靠的质量保证。 适合各类用户使用，是您的理想选择。
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
