"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function EmailForm({ setUrl }: { setUrl: (url: string) => void }) {
  const t = useTranslations("index.input");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const formatted = `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setUrl(formatted);
  }, [to, subject, body, setUrl]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>{t("email_to")}</Label>
        <Input
          type="email"
          placeholder="name@example.com"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("email_subject")}</Label>
        <Input
          placeholder={t("email_subject_placeholder")}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("email_body")}</Label>
        <Textarea
          placeholder={t("email_body_placeholder")}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    </div>
  );
}
