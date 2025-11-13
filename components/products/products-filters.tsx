"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function ProductsFilters() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="搜索商品名称、SKU..." className="pl-10" />
          </div>

          {/* Category Filter */}
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="选择分类" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部分类</SelectItem>
              <SelectItem value="electronics">电子产品</SelectItem>
              <SelectItem value="clothing">服装配饰</SelectItem>
              <SelectItem value="home">家居用品</SelectItem>
              <SelectItem value="beauty">美妆护肤</SelectItem>
              <SelectItem value="food">食品饮料</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="商品状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部状态</SelectItem>
              <SelectItem value="active">在售</SelectItem>
              <SelectItem value="draft">草稿</SelectItem>
              <SelectItem value="out-of-stock">缺货</SelectItem>
            </SelectContent>
          </Select>

          {/* Reset Button */}
          <Button variant="outline">重置</Button>
        </div>
      </CardContent>
    </Card>
  )
}
