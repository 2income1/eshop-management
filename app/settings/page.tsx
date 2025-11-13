import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">个人设置</h1>
          <p className="text-muted-foreground mt-1">管理您的个人信息和偏好设置</p>
        </div>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle>个人信息</CardTitle>
            <CardDescription>更新您的个人资料和头像</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>管理</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline">更换头像</Button>
                <p className="text-sm text-muted-foreground">推荐尺寸：200x200像素</p>
              </div>
            </div>

            <Separator />

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">姓名</Label>
                <Input id="name" defaultValue="系统管理员" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">邮箱</Label>
                <Input id="email" type="email" defaultValue="admin@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">手机号</Label>
                <Input id="phone" defaultValue="+86 138 0000 0000" />
              </div>
            </div>

            <Button>保存更改</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>通知设置</CardTitle>
            <CardDescription>管理您接收的通知类型</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>邮件通知</Label>
                <p className="text-sm text-muted-foreground">接收重要更新的邮件通知</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>库存预警</Label>
                <p className="text-sm text-muted-foreground">当商品库存低于阈值时通知</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>订单通知</Label>
                <p className="text-sm text-muted-foreground">新订单和订单状态变更通知</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>系统公告</Label>
                <p className="text-sm text-muted-foreground">接收系统维护和更新公告</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>安全设置</CardTitle>
            <CardDescription>管理您的密码和安全选项</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">当前密码</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">新密码</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">确认密码</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>更新密码</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
