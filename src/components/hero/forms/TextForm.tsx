"use client";

import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function TextForm({ setUrl }: { setUrl: (url: string) => void }) {
  const t = useTranslations("index.input");
  const [value, setValue] = useState("");

  useEffect(() => {
    setUrl(value);
  }, [value, setUrl]);

  return (
    <Textarea
      placeholder={t("text_placeholder")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
