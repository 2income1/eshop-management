import { MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const regions = [
  { name: "北京", visitors: 8234, percentage: 32 },
  { name: "上海", visitors: 6521, percentage: 25 },
  { name: "广州", visitors: 4821, percentage: 19 },
  { name: "深圳", visitors: 3912, percentage: 15 },
  { name: "成都", visitors: 2340, percentage: 9 },
]

export function GeographicData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>地域分布</CardTitle>
        <CardDescription>访客地理位置统计</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {regions.map((region, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{region.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{region.visitors.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={region.percentage} className="flex-1 h-2" />
              <span className="text-sm font-medium min-w-[40px] text-right">{region.percentage}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
