"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function WifiForm({ setUrl }: { setUrl: (url: string) => void }) {
  const t = useTranslations("index.input");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");

  useEffect(() => {
    const formatted = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    setUrl(formatted);
  }, [ssid, password, encryption, setUrl]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="space-y-2">
        <Label>{t("wifi_ssid")}</Label>
        <Input
          placeholder="MyNetwork"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("wifi_password")}</Label>
        <Input
          type="password"
          placeholder="MyPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>{t("wifi_encryption")}</Label>
        <Select value={encryption} onValueChange={setEncryption}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="WPA">WPA/WPA2</SelectItem>
            <SelectItem value="WEP">WEP</SelectItem>
            <SelectItem value="nopass">{t("wifi_no_password")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
