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
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EditUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user?: {
    name: string
    email: string
    role: string
  }
}

export function EditUserDialog({ open, onOpenChange, user }: EditUserDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
    }

    console.log("[v0] 编辑用户:", userData)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>编辑用户</DialogTitle>
          <DialogDescription>修改用户信息和角色权限</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">用户名</Label>
              <Input id="name" name="name" defaultValue={user?.name} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" name="email" type="email" defaultValue={user?.email} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">角色</Label>
              <Select name="role" defaultValue={user?.role} required>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="super-admin">超级管理员</SelectItem>
                  <SelectItem value="product-admin">商品管理员</SelectItem>
                  <SelectItem value="inventory-admin">库存管理员</SelectItem>
                  <SelectItem value="analyst">数据分析师</SelectItem>
                  <SelectItem value="support">客服专员</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "保存中..." : "保存修改"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
