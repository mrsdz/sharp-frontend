"use client";
import Link from "next/link";
// auth
import withAccess from "@/auth/with-acess";
// components
import { Button } from "@/components/ui/button";

// constants
import { ADD_PURCHASE_DOCUMENT } from "@/constants/permissions";

function NewPurchaseDocument({ id }) {
  return (
    <Link href={`/dashboard/${id}/warehousing/purchase_documents/new`}>
      <Button size="lg">افزودن</Button>
    </Link>
  );
}

export default withAccess(NewPurchaseDocument, [ADD_PURCHASE_DOCUMENT]);
