"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function VCardForm({ setUrl }: { setUrl: (url: string) => void }) {
  const t = useTranslations("index.input");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const formatted = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${firstName} ${lastName}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`;
    setUrl(formatted);
  }, [firstName, lastName, phone, email, setUrl]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <Label>{t("vcard_first_name")}</Label>
        <Input
          placeholder={t("vcard_first_name_placeholder")}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("vcard_last_name")}</Label>
        <Input
          placeholder={t("vcard_last_name_placeholder")}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("vcard_phone")}</Label>
        <Input
          type="tel"
          placeholder="+1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("vcard_email")}</Label>
        <Input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
