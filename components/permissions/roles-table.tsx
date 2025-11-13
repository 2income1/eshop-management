"use client"

import { useState } from "react"
import { MoreHorizontal, Edit, Trash2, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { EditRoleDialog } from "@/components/dialogs/edit-role-dialog"
import { DeleteConfirmDialog } from "@/components/dialogs/delete-confirm-dialog"

const roles = [
  {
    id: "1",
    name: "超级管理员",
    description: "拥有所有权限，可以管理系统的所有功能",
    users: 2,
    permissions: 28,
    color: "hsl(var(--chart-1))",
  },
  {
    id: "2",
    name: "商品管理员",
    description: "管理商品信息、价格、分类等",
    users: 5,
    permissions: 12,
    color: "hsl(var(--chart-2))",
  },
  {
    id: "3",
    name: "库存管理员",
    description: "管理商品库存、入库、出库等",
    users: 3,
    permissions: 8,
    color: "hsl(var(--chart-3))",
  },
  {
    id: "4",
    name: "数据分析师",
    description: "查看各类数据报表和分析",
    users: 4,
    permissions: 6,
    color: "hsl(var(--chart-4))",
  },
  {
    id: "5",
    name: "客服专员",
    description: "处理客户咨询和订单问题",
    users: 12,
    permissions: 5,
    color: "hsl(var(--chart-5))",
  },
]

export function RolesTable() {
  const [editRoleOpen, setEditRoleOpen] = useState(false)
  const [deleteRoleOpen, setDeleteRoleOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<(typeof roles)[0] | null>(null)

  const handleEdit = (role: (typeof roles)[0]) => {
    setSelectedRole(role)
    setEditRoleOpen(true)
    console.log("[v0] 编辑角色:", role)
  }

  const handleDelete = (role: (typeof roles)[0]) => {
    setSelectedRole(role)
    setDeleteRoleOpen(true)
    console.log("[v0] 删除角色:", role)
  }

  const confirmDelete = () => {
    console.log("[v0] 确认删除角色:", selectedRole)
    setDeleteRoleOpen(false)
  }

  return (
    <>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>角色名称</TableHead>
              <TableHead>描述</TableHead>
              <TableHead>用户数</TableHead>
              <TableHead>权限数</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: role.color }} />
                    <span className="font-medium">{role.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground max-w-md">{role.description}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{role.users}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{role.permissions} 项</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2" onClick={() => handleEdit(role)}>
                        <Edit className="h-4 w-4" />
                        编辑角色
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive" onClick={() => handleDelete(role)}>
                        <Trash2 className="h-4 w-4" />
                        删除角色
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <EditRoleDialog
        open={editRoleOpen}
        onOpenChange={setEditRoleOpen}
        role={
          selectedRole
            ? {
                name: selectedRole.name,
                description: selectedRole.description,
              }
            : undefined
        }
      />
      <DeleteConfirmDialog
        open={deleteRoleOpen}
        onOpenChange={setDeleteRoleOpen}
        onConfirm={confirmDelete}
        title="删除角色"
        description={`确定要删除角色 "${selectedRole?.name}" 吗？此操作将影响 ${selectedRole?.users} 个用户。`}
      />
    </>
  )
}
