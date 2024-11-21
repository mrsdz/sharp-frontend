import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>
            <Skeleton className="w-[100px] h-[20px] rounded-lg" />
          </CardTitle>
          <Skeleton className="w-[400px] h-[20px] rounded-lg" />
        </div>
        <Skeleton className="w-[100px] h-[40px] rounded-lg" />
      </CardHeader>
      <CardContent>
        <Skeleton className="w-full h-[500px] rounded-lg" />
      </CardContent>
    </Card>
  );
}
