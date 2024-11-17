import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccessDenied() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>دسترسی ممنوع</CardTitle>
        </CardHeader>
        <CardContent>
          <p>شما دسترسی به صفحه درخواست شده را ندارید.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/accounts" passHref legacyBehavior>
            <Button>بازگشت</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
