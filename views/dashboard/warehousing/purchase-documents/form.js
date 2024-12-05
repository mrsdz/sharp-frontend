import CustomDatePicker from "@/components/date-picker";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormPurchaseDocument({ errors, data, setData }) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="date">
          تاریخ صدور <span className="text-red-500">*</span>
        </Label>
        <div className="col-span-3">
          <CustomDatePicker
            selectedDay={data.date}
            setSelectedDay={(date) => setData("date", date)}
            placeholder="تاریخ صدور را وارد کنید"
            id="date"
            error={errors.date}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          توضیحات <span className="text-red-500">*</span>
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
    </div>
  );
}
