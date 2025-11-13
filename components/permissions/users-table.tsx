"use client"

import { useState } from "react"
import { MoreHorizontal, Edit, Trash2, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { EditUserDialog } from "@/components/dialogs/edit-user-dialog"
import { DeleteConfirmDialog } from "@/components/dialogs/delete-confirm-dialog"

const users = [
  {
    id: "1",
    name: "张三",
    email: "zhangsan@example.com",
    role: "超级管理员",
    status: "active",
    lastLogin: "2025-01-10 14:32",
  },
  {
    id: "2",
    name: "李四",
    email: "lisi@example.com",
    role: "商品管理员",
    status: "active",
    lastLogin: "2025-01-10 09:15",
  },
  {
    id: "3",
    name: "王五",
    email: "wangwu@example.com",
    role: "库存管理员",
    status: "active",
    lastLogin: "2025-01-09 16:48",
  },
  {
    id: "4",
    name: "赵六",
    email: "zhaoliu@example.com",
    role: "数据分析师",
    status: "inactive",
    lastLogin: "2025-01-05 11:23",
  },
  {
    id: "5",
    name: "孙七",
    email: "sunqi@example.com",
    role: "客服专员",
    status: "active",
    lastLogin: "2025-01-10 13:57",
  },
]

const statusConfig = {
  active: { label: "正常", variant: "default" as const },
  inactive: { label: "禁用", variant: "secondary" as const },
}

export function UsersTable() {
  const [editUserOpen, setEditUserOpen] = useState(false)
  const [deleteUserOpen, setDeleteUserOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<(typeof users)[0] | null>(null)

  const handleEdit = (user: (typeof users)[0]) => {
    setSelectedUser(user)
    setEditUserOpen(true)
    console.log("[v0] 编辑用户:", user)
  }

  const handleDelete = (user: (typeof users)[0]) => {
    setSelectedUser(user)
    setDeleteUserOpen(true)
    console.log("[v0] 删除用户:", user)
  }

  const handleChangePermissions = (user: (typeof users)[0]) => {
    console.log("[v0] 修改权限:", user)
    // 这里可以打开权限修改对话框
  }

  const confirmDelete = () => {
    console.log("[v0] 确认删除用户:", selectedUser)
    setDeleteUserOpen(false)
  }

  return (
    <>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>用户</TableHead>
              <TableHead>邮箱</TableHead>
              <TableHead>角色</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>最后登录</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1">
                    <Shield className="h-3 w-3" />
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={statusConfig[user.status].variant}>{statusConfig[user.status].label}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{user.lastLogin}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2" onClick={() => handleEdit(user)}>
                        <Edit className="h-4 w-4" />
                        编辑用户
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2" onClick={() => handleChangePermissions(user)}>
                        <Shield className="h-4 w-4" />
                        修改权限
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive" onClick={() => handleDelete(user)}>
                        <Trash2 className="h-4 w-4" />
                        删除用户
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <EditUserDialog
        open={editUserOpen}
        onOpenChange={setEditUserOpen}
        user={
          selectedUser
            ? {
                name: selectedUser.name,
                email: selectedUser.email,
                role: selectedUser.role,
              }
            : undefined
        }
      />
      <DeleteConfirmDialog
        open={deleteUserOpen}
        onOpenChange={setDeleteUserOpen}
        onConfirm={confirmDelete}
        title="删除用户"
        description={`确定要删除用户 "${selectedUser?.name}" 吗？此操作无法撤销。`}
      />
    </>
  )
}
