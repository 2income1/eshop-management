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
import { Textarea } from "@/components/ui/textarea"

interface EditRoleDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  role?: {
    name: string
    description: string
  }
}

export function EditRoleDialog({ open, onOpenChange, role }: EditRoleDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const roleData = {
      name: formData.get("name"),
      description: formData.get("description"),
    }

    console.log("[v0] 编辑角色:", roleData)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>编辑角色</DialogTitle>
          <DialogDescription>修改角色名称和描述信息</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">角色名称</Label>
              <Input id="name" name="name" defaultValue={role?.name} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">角色描述</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={role?.description}
                placeholder="描述此角色的职责和权限范围"
                rows={3}
                required
              />
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
