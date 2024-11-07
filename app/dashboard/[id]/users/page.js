// api
import getStoreStaffs from "@/api/store/staff/getStaffs";
// components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewUser from "@/views/dashboard/users/new";
import MultiTagSelect from "@/components/multi-tag-select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
// views
import TableUser from "@/views/dashboard/users/table";
import { Input } from "@/components/ui/input";

export default async function Users({ params }) {
  const id = (await params).id;
  const data = await getStoreStaffs(id);
  // const [position, setPosition] = useState([]);

  console.log(data);

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>لیست کاربران</CardTitle>
          <CardDescription>
            این صفحه شامل اطلاعات کاربران سیستم است. شما می‌توانید کاربران را مشاهده کرده و در صورت
            نیاز اقدام به ویرایش، حذف یا افزودن کاربر جدید کنید.
          </CardDescription>
        </div>
        <NewUser />
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <Input placeholder="جستجو کاربران..." className="w-fit" />
          <MultiTagSelect
            placeholder="سمت"
            options={[
              { label: "کارمند", value: "staff" },
              { label: "رییس", value: "boss" },
              { label: "ابدارچی", value: "handyman" },
            ]}
            // setValues={setPosition}
            // values={position}
          />
          <div className="flex items-center gap-2">
            <Switch id="is-active" />
            <Label className="text-muted-foreground" htmlFor="is-active">
              فعال
            </Label>
          </div>
        </div>
        <TableUser data={data} />
      </CardContent>
    </Card>
  );
}
