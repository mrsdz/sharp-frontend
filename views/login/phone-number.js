import { useState, useTransition } from "react";
// api
import sendOtp from "@/api/login/send-otp";
// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PhoneNumber({ changeStep }) {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState({});

  function handleSubmit(formData) {
    startTransition(async () => {
      try {
        const result = await sendOtp(formData);

        if (result?.errors) setError(result.errors);
        else if (result.status === 204) {
          setError({});
          changeStep({
            step: "otp",
            phoneNumber: formData.get("phone_number"),
          });
        }
      } catch ({ status, response }) {
        if (
          status === 400 &&
          response.data.error === "You can retry sending OTP in a few seconds later"
        )
          setError({
            phone_number: "برای ارسال کد یک بار مصرف چند لحظه دیگر دوباره تلاش کنید",
          });
      }
    });
  }

  return (
    <form action={handleSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            شماره همراه
          </Label>
          <Input
            placeholder="09120000000"
            name="phone_number"
            dir="ltr"
            maxLength="11"
            error={error.phone_number}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
          />
        </div>
        <Button loading={isPending}>ارسال کد</Button>
      </div>
    </form>
  );
}
