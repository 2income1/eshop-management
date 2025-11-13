import { AlertTriangle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const alerts = [
  {
    type: "warning",
    product: "iPhone 15 Pro Max",
    message: "库存量低于安全线，当前库存：45 件",
    action: "补货",
  },
  {
    type: "error",
    product: "时尚休闲T恤",
    message: "商品已缺货，需立即补充",
    action: "紧急补货",
  },
  {
    type: "warning",
    product: 'MacBook Pro 14"',
    message: "库存量低于安全线，当前库存：89 件",
    action: "补货",
  },
]

export function InventoryAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>库存预警</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => (
          <Alert
            key={index}
            variant={alert.type === "error" ? "destructive" : "default"}
            className="flex items-center justify-between"
          >
            <div className="flex items-start gap-3">
              {alert.type === "error" ? (
                <AlertCircle className="h-5 w-5 mt-0.5" />
              ) : (
                <AlertTriangle className="h-5 w-5 mt-0.5" />
              )}
              <div>
                <div className="font-semibold">{alert.product}</div>
                <AlertDescription className="mt-1">{alert.message}</AlertDescription>
              </div>
            </div>
            <Button size="sm" variant={alert.type === "error" ? "default" : "outline"}>
              {alert.action}
            </Button>
          </Alert>
        ))}
      </CardContent>
    </Card>
  )
}
