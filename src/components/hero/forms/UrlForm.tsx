"use client";

import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function UrlForm({ setUrl }: { setUrl: (url: string) => void }) {
  const t = useTranslations("index.input");
  const [value, setValue] = useState("https://qrbtf.com");

  useEffect(() => {
    setUrl(value);
  }, [value, setUrl]);

  return (
    <Input
      placeholder="https://qrbtf.com"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
