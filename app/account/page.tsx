import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AccountPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">账户管理</h1>
          <p className="text-muted-foreground mt-1">查看和管理您的账户信息</p>
        </div>

        {/* Account Overview */}
        <Card>
          <CardHeader>
            <CardTitle>账户概览</CardTitle>
            <CardDescription>您的账户基本信息</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">用户ID</p>
                <p className="font-medium">ADM-2024-001</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">账户类型</p>
                <Badge>超级管理员</Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">注册时间</p>
                <p className="font-medium">2024-01-15</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">最后登录</p>
                <p className="font-medium">2024-03-20 14:30</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card>
          <CardHeader>
            <CardTitle>订阅计划</CardTitle>
            <CardDescription>管理您的订阅和账单信息</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">企业版</p>
                <p className="text-sm text-muted-foreground">无限用户 · 所有功能</p>
              </div>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                活跃
              </Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">下次续费时间</p>
                <p className="font-medium">2024-12-31</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">费用</p>
                <p className="font-medium">¥9,999/年</p>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              管理订阅
            </Button>
          </CardContent>
        </Card>

        {/* Login History */}
        <Card>
          <CardHeader>
            <CardTitle>登录记录</CardTitle>
            <CardDescription>最近的登录活动</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "2024-03-20 14:30", location: "北京市", device: "Chrome on Windows", ip: "192.168.1.100" },
                { date: "2024-03-19 09:15", location: "北京市", device: "Safari on macOS", ip: "192.168.1.101" },
                { date: "2024-03-18 16:45", location: "上海市", device: "Chrome on Android", ip: "192.168.2.50" },
              ].map((log, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="mb-4" />}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{log.device}</p>
                      <p className="text-sm text-muted-foreground">
                        {log.location} · {log.ip}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{log.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">危险操作</CardTitle>
            <CardDescription>这些操作不可逆，请谨慎操作</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="destructive" className="w-full">
              停用账户
            </Button>
            <Button
              variant="outline"
              className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
            >
              删除账户
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
