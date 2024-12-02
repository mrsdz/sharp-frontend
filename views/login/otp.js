import { useRouter } from "next/navigation";
import { useTransition, useState, useEffect, useRef } from "react";
//api
import sendOtp from "@/api/login/send-otp";
import verifyOtp from "@/api/login/verify-otp";
// hooks
import useTimer from "@/hooks/use-timer";
// components
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
// utils
import { setCookie } from "@/utils/cookies";
// icons
import { ArrowRight } from "lucide-react";

export default function Otp({ changeStep, phoneNumber }) {
  const formRef = useRef(null);
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState({});

  const [isPending, startTransition] = useTransition();
  const { minutes, seconds, timerDone, resetTimer } = useTimer();

  function handleSubmit(formData) {
    startTransition(async () => {
      try {
        const result = await verifyOtp(formData, phoneNumber);

        if (result?.errors) setError(result.errors);
        else if (result.status === 200) {
          setError({});
          await setCookie("token", result.data.token);
          router.replace("/accounts");
        }
      } catch ({ status, response }) {
        if (status === 400) setError({ otp: "کد وارد شده اشتباه است." });
      }
    });
  }

  async function handleSendAgain() {
    const formData = new FormData();
    formData.append("phone_number", phoneNumber);

    const result = await sendOtp(formData);

    if (result.status === 204) resetTimer();
  }

  useEffect(() => {
    if (otp.length === 4) formRef.current.requestSubmit();
  }, [otp]);

  return (
    <form ref={formRef} action={handleSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="otp">
            کد ۴ رقمی
          </Label>
          <InputOTP
            name="otp"
            error={error.otp}
            containerClassName="justify-center"
            autoComplete="one-time-code"
            maxLength={4}
            value={otp}
            onChange={(value) => setOtp(value)}
            autoFocus
          >
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={1} />
              <InputOTPSlot index={0} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button loading={isPending}>ورود</Button>
        <div className="flex items-center justify-between">
          <Button
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              changeStep({ step: "phoneNumber", phoneNumber: null });
            }}
          >
            <ArrowRight />
            برگشت
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleSendAgain();
            }}
            size="sm"
            variant={timerDone ? "link" : "ghost"}
            disabled={!timerDone}
          >
            {timerDone ? "ارسال دوباره" : `${minutes}:${seconds}`}
          </Button>
        </div>
      </div>
    </form>
  );
}
