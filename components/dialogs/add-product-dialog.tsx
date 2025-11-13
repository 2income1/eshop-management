"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export function AddProductDialog() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Product submitted")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          添加商品
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>添加新商品</DialogTitle>
          <DialogDescription>填写商品信息以添加到商品库</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="product-name">商品名称</Label>
              <Input id="product-name" placeholder="输入商品名称" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product-sku">SKU编号</Label>
              <Input id="product-sku" placeholder="输入SKU编号" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="product-category">商品分类</Label>
                <Select required>
                  <SelectTrigger id="product-category">
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">数码电子</SelectItem>
                    <SelectItem value="clothing">服装服饰</SelectItem>
                    <SelectItem value="home">家居生活</SelectItem>
                    <SelectItem value="food">食品饮料</SelectItem>
                    <SelectItem value="books">图书文娱</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product-brand">品牌</Label>
                <Input id="product-brand" placeholder="输入品牌名称" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="product-price">售价（¥）</Label>
                <Input id="product-price" type="number" placeholder="0.00" step="0.01" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product-cost">成本（¥）</Label>
                <Input id="product-cost" type="number" placeholder="0.00" step="0.01" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="product-stock">初始库存</Label>
                <Input id="product-stock" type="number" placeholder="0" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product-alert">库存预警值</Label>
                <Input id="product-alert" type="number" placeholder="10" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product-description">商品描述</Label>
              <Textarea id="product-description" placeholder="输入商品详细描述" rows={4} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product-image">商品图片</Label>
              <Input id="product-image" type="file" accept="image/*" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product-status">商品状态</Label>
              <Select defaultValue="active">
                <SelectTrigger id="product-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">上架</SelectItem>
                  <SelectItem value="inactive">下架</SelectItem>
                  <SelectItem value="draft">草稿</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button type="submit">添加商品</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
