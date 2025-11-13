"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Product {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  status: string
}

interface EditProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
}

export function EditProductDialog({ open, onOpenChange, product }: EditProductDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Product updated:", product?.id)
    onOpenChange(false)
  }

  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>编辑商品</DialogTitle>
          <DialogDescription>修改商品信息</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">商品名称</Label>
              <Input id="edit-name" defaultValue={product.name} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit-sku">SKU编号</Label>
              <Input id="edit-sku" defaultValue={product.sku} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit-category">商品分类</Label>
              <Select defaultValue={product.category}>
                <SelectTrigger id="edit-category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="电子产品">数码电子</SelectItem>
                  <SelectItem value="服装配饰">服装服饰</SelectItem>
                  <SelectItem value="家居用品">家居生活</SelectItem>
                  <SelectItem value="食品饮料">食品饮料</SelectItem>
                  <SelectItem value="图书文娱">图书文娱</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit-price">售价（¥）</Label>
              <Input id="edit-price" type="number" defaultValue={product.price} step="0.01" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit-stock">库存数量</Label>
              <Input id="edit-stock" type="number" defaultValue={product.stock} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="edit-status">商品状态</Label>
              <Select defaultValue={product.status}>
                <SelectTrigger id="edit-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">上架</SelectItem>
                  <SelectItem value="out-of-stock">下架</SelectItem>
                  <SelectItem value="draft">草稿</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button type="submit">保存更改</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
