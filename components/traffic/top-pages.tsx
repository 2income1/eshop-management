import { ExternalLink, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const pages = [
  {
    path: "/products/iphone-15-pro",
    title: "iPhone 15 Pro 产品页",
    views: 8234,
    avgTime: "3:24",
    bounceRate: 24,
  },
  {
    path: "/products/macbook-pro",
    title: "MacBook Pro 产品页",
    views: 6521,
    avgTime: "4:12",
    bounceRate: 18,
  },
  {
    path: "/",
    title: "首页",
    views: 5432,
    avgTime: "1:45",
    bounceRate: 42,
  },
  {
    path: "/products/airpods-pro",
    title: "AirPods Pro 产品页",
    views: 4821,
    avgTime: "2:56",
    bounceRate: 28,
  },
  {
    path: "/sale",
    title: "促销活动页",
    views: 3912,
    avgTime: "3:08",
    bounceRate: 31,
  },
]

export function TopPages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>热门页面</CardTitle>
        <CardDescription>访问量最高的页面</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>页面</TableHead>
              <TableHead>浏览量</TableHead>
              <TableHead>平均停留</TableHead>
              <TableHead>跳出率</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {page.title}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{page.path}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{page.views.toLocaleString()}</span>
                    <TrendingUp className="h-3 w-3 text-chart-2" />
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{page.avgTime}</TableCell>
                <TableCell>
                  <span className={page.bounceRate > 40 ? "text-destructive font-medium" : "text-muted-foreground"}>
                    {page.bounceRate}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
