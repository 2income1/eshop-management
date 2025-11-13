"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { RolesTable } from "@/components/permissions/roles-table"
import { UsersTable } from "@/components/permissions/users-table"
import { PermissionsMatrix } from "@/components/permissions/permissions-matrix"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddUserDialog } from "@/components/dialogs/add-user-dialog"

export default function PermissionsPage() {
  const [addUserOpen, setAddUserOpen] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">权限控制</h1>
            <p className="text-muted-foreground mt-1">管理用户角色和访问权限</p>
          </div>
          <Button className="gap-2" onClick={() => setAddUserOpen(true)}>
            <Plus className="h-4 w-4" />
            添加用户
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">用户管理</TabsTrigger>
            <TabsTrigger value="roles">角色管理</TabsTrigger>
            <TabsTrigger value="permissions">权限矩阵</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <UsersTable />
          </TabsContent>

          <TabsContent value="roles" className="space-y-4">
            <RolesTable />
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <PermissionsMatrix />
          </TabsContent>
        </Tabs>
      </div>

      <AddUserDialog open={addUserOpen} onOpenChange={setAddUserOpen} />
    </DashboardLayout>
  )
}
