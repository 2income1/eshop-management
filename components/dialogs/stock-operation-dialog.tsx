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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type OperationType = "in" | "out" | "transfer"

interface StockOperationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  type: OperationType
  productName: string
}

export function StockOperationDialog({ open, onOpenChange, type, productName }: StockOperationDialogProps) {
  const titles = {
    in: "入库操作",
    out: "出库操作",
    transfer: "库存调拨",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Stock operation:", type)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titles[type]}</DialogTitle>
          <DialogDescription>商品：{productName}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="quantity">数量</Label>
              <Input id="quantity" type="number" placeholder="输入数量" required min="1" />
            </div>

            {type === "transfer" ? (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="from-warehouse">源仓库</Label>
                  <Select required>
                    <SelectTrigger id="from-warehouse">
                      <SelectValue placeholder="选择源仓库" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">主仓库</SelectItem>
                      <SelectItem value="backup">备用仓库</SelectItem>
                      <SelectItem value="returns">退货仓库</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="to-warehouse">目标仓库</Label>
                  <Select required>
                    <SelectTrigger id="to-warehouse">
                      <SelectValue placeholder="选择目标仓库" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">主仓库</SelectItem>
                      <SelectItem value="backup">备用仓库</SelectItem>
                      <SelectItem value="returns">退货仓库</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              <div className="grid gap-2">
                <Label htmlFor="warehouse">仓库</Label>
                <Select required>
                  <SelectTrigger id="warehouse">
                    <SelectValue placeholder="选择仓库" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">主仓库</SelectItem>
                    <SelectItem value="backup">备用仓库</SelectItem>
                    <SelectItem value="returns">退货仓库</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="operator">操作人</Label>
              <Input id="operator" defaultValue="系统管理员" readOnly />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="remark">备注</Label>
              <Textarea id="remark" placeholder="输入备注信息（可选）" rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button type="submit">确认{type === "in" ? "入库" : type === "out" ? "出库" : "调拨"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
