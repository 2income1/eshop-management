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

interface AddUserDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddUserDialog({ open, onOpenChange }: AddUserDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      password: formData.get("password"),
    }

    console.log("[v0] 添加用户:", userData)

    // 模拟 API 调用
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>添加用户</DialogTitle>
          <DialogDescription>创建新的系统用户并分配角色权限</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">用户名</Label>
              <Input id="name" name="name" placeholder="请输入用户名" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" name="email" type="email" placeholder="user@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">密码</Label>
              <Input id="password" name="password" type="password" placeholder="至少8位字符" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">角色</Label>
              <Select name="role" required>
                <SelectTrigger>
                  <SelectValue placeholder="选择角色" />
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
              {loading ? "创建中..." : "创建用户"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
