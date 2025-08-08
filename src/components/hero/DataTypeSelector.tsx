"use client";

import { useAtom } from "jotai";
import { urlAtom } from "@/lib/states";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UrlForm } from "./forms/UrlForm";
import { TextForm } from "./forms/TextForm";
import { WifiForm } from "./forms/WifiForm";
import { VCardForm } from "./forms/VCardForm";
import { EmailForm } from "./forms/EmailForm";
import { useTranslations } from "next-intl";

export function DataTypeSelector() {
  const t = useTranslations("index.input");
  const [, setUrl] = useAtom(urlAtom);

  return (
    <Tabs defaultValue="url" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="url">{t("url")}</TabsTrigger>
        <TabsTrigger value="text">{t("text")}</TabsTrigger>
        <TabsTrigger value="wifi">{t("wifi")}</TabsTrigger>
        <TabsTrigger value="vcard">{t("vcard")}</TabsTrigger>
        <TabsTrigger value="email">{t("email")}</TabsTrigger>
      </TabsList>
      <TabsContent value="url">
        <UrlForm setUrl={setUrl} />
      </TabsContent>
      <TabsContent value="text">
        <TextForm setUrl={setUrl} />
      </TabsContent>
      <TabsContent value="wifi">
        <WifiForm setUrl={setUrl} />
      </TabsContent>
      <TabsContent value="vcard">
        <VCardForm setUrl={setUrl} />
      </TabsContent>
      <TabsContent value="email">
        <EmailForm setUrl={setUrl} />
      </TabsContent>
    </Tabs>
  );
}
