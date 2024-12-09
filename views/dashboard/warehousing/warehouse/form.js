import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import StaffAutocomplete from "@/components/staff-autocomplete";

export default function FormWarehouse({ errors, data, setData }) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          نام
          <span className="text-red-500">*</span>
        </Label>
        <div className="col-span-3">
          <Input
            name="name"
            id="name"
            placeholder="نام انبار را وارد کنید"
            error={errors.name}
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="type" className="text-right">
          نوع
          <span className="text-red-500">*</span>
        </Label>
        <div className="col-span-3">
          <Select
            name="type"
            id="type"
            error={errors.type}
            value={data.type}
            onValueChange={(value) => setData("type", value)}
          >
            <SelectTrigger value={data.type}>
              <SelectValue placeholder="نوع انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="losses">ضایعات</SelectItem>
              <SelectItem value="products">محصولات</SelectItem>
              <SelectItem value="semi-built">نیمه‌ساخته</SelectItem>
              <SelectItem value="other">دیگر</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="phone" className="text-right">
          شماره تلفن
        </Label>
        <div className="col-span-3">
          <Input
            id="phone"
            name="phone"
            placeholder="02100000000"
            dir="ltr"
            maxLength={11}
            error={errors.phone}
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="users" className="text-right">
          کاربران
        </Label>
        <div className="col-span-3">
          <StaffAutocomplete
            size="small"
            value={data.users}
            onChange={(value) => setData("users", value)}
            placeholder="انتخاب کاربران"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          توضیحات
        </Label>
        <div className="col-span-3">
          <Textarea
            name="description"
            id="description"
            placeholder="توضیحات را وارد کنید"
            error={errors.description}
            value={data.description}
            onChange={(e) => setData("description", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="address" className="text-right">
          آدرس
        </Label>
        <div className="col-span-3">
          <Textarea
            name="address"
            id="address"
            placeholder="آدرس را وارد کنید"
            error={errors.address}
            value={data.address}
            onChange={(e) => setData("address", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4 mt-3">
        <Label htmlFor="is_active" className="text-right">
          فعال
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
    </div>
  );
}
