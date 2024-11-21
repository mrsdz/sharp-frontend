import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function FormPurchaseDocument({ errors, data, setData }) {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="serial_number" className="text-right">
          سریال سند
        </Label>
        <div className="col-span-3">
          <Input
            name="serial_number"
            id="serial_number"
            placeholder="سریال سند را وارد کنید"
            error={errors.serial_number}
            value={data.serial_number}
            onChange={(e) => setData("serial_number", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
