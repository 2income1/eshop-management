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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Upload, FileSpreadsheet, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ImportInventoryDialog() {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    console.log("[v0] Importing file:", file.name)
    setOpen(false)
    setFile(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Upload className="h-4 w-4" />
          导入库存
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>导入库存数据</DialogTitle>
          <DialogDescription>上传Excel或CSV文件批量导入库存信息</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>请确保文件格式正确，包含以下列：SKU、商品名称、库存数量、仓库位置</AlertDescription>
            </Alert>

            <div className="grid gap-2">
              <Label htmlFor="import-file">选择文件</Label>
              <Input
                id="import-file"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            {file && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-muted">
                <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{file.name}</span>
              </div>
            )}

            <Button type="button" variant="outline" className="w-full bg-transparent">
              下载模板文件
            </Button>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false)
                setFile(null)
              }}
            >
              取消
            </Button>
            <Button type="submit" disabled={!file}>
              导入
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
