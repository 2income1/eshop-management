"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const permissions = [
  {
    module: "数据监控",
    actions: ["查看", "导出"],
  },
  {
    module: "商品管理",
    actions: ["查看", "创建", "编辑", "删除"],
  },
  {
    module: "库存管理",
    actions: ["查看", "入库", "出库", "调拨"],
  },
  {
    module: "流量管理",
    actions: ["查看", "导出"],
  },
  {
    module: "权限控制",
    actions: ["查看", "编辑", "删除"],
  },
]

const roles = ["超级管理员", "商品管理员", "库存管理员", "数据分析师", "客服专员"]

// Mock permission data
const hasPermission = (roleIndex: number, moduleIndex: number, actionIndex: number) => {
  if (roleIndex === 0) return true // 超级管理员拥有所有权限
  if (roleIndex === 1 && moduleIndex === 1) return true // 商品管理员
  if (roleIndex === 2 && moduleIndex === 2) return true // 库存管理员
  if (roleIndex === 3 && (moduleIndex === 0 || moduleIndex === 3)) return actionIndex < 2 // 数据分析师只能查看和导出
  return false
}

export function PermissionsMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>权限矩阵</CardTitle>
        <CardDescription>管理不同角色对各个模块的访问权限</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {permissions.map((permission, moduleIndex) => (
            <div key={moduleIndex} className="space-y-3">
              <h3 className="font-semibold text-lg">{permission.module}</h3>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">操作</TableHead>
                      {roles.map((role, roleIndex) => (
                        <TableHead key={roleIndex} className="text-center">
                          {role}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {permission.actions.map((action, actionIndex) => (
                      <TableRow key={actionIndex}>
                        <TableCell className="font-medium">{action}</TableCell>
                        {roles.map((_, roleIndex) => (
                          <TableCell key={roleIndex} className="text-center">
                            <div className="flex justify-center">
                              <Checkbox checked={hasPermission(roleIndex, moduleIndex, actionIndex)} />
                            </div>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
