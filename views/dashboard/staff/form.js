import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import UserGroupSelect from "@/components/user-group-select";

export default function FormUser({ errors, data, setData, isEdit = false }) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          نام نمایشی
        </Label>
        <div className="col-span-3">
          <Input
            name="display_name"
            id="display_name"
            placeholder="نام نمایشی را وارد کنید"
            error={errors.display_name}
            value={data.display_name}
            onChange={(e) => setData("display_name", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="group" className="text-right">
          سمت
        </Label>
        <div className="col-span-3">
          <UserGroupSelect data={data.group} setData={(value) => setData("group", value)} />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          شماره همراه
        </Label>
        <div className="col-span-3">
          <Input
            id="username"
            name="username"
            placeholder="09120000000"
            dir="ltr"
            maxLength={11}
            error={errors.username}
            value={data.username}
            onChange={(e) => setData("username", e.target.value)}
          />
        </div>
      </div>
      {isEdit && (
        <div className="grid grid-cols-4 items-center gap-4 mt-3">
          <Label htmlFor="is_active" className="text-right">
            وضعیت
          </Label>
          <div className="col-span-3 flex items-center">
            <Switch
              id="is_active"
              name="is_active"
              checked={data.is_active}
              onCheckedChange={(checked) => setData("is_active", checked)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
