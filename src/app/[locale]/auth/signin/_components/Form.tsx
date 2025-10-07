"use client";

import FormFields from "@/components/form-fields/form-fields";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Pages, Routes } from "@/constants/enums";
import userFormFields from "@/hooks/useFormFields";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

function Form({ translations }: { translations: Translations }) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { locale } = useParams();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { getFormFields } = userFormFields({
    slug: Pages.LOGIN,
    translations,
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // get imputs value : email, password
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        const validationError = JSON.parse(res.error).validationError;
        setError(validationError);
        const responseError = JSON.parse(res?.error).responseError;
        if (responseError) {
          toast.error(responseError);
        }
      }
      if (res?.ok) {
        toast.success(translations.messages.loginSuccessful);
        router.replace(`/${locale}/${Routes.PROFILE}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {getFormFields().map((field: IFormField) => {
        return (
          <div key={field.name} className="mb-4">
            <FormFields {...field} error={error} />
          </div>
        );
      })}

      <Button type="submit" disabled={isLoading} className="w-full ">
        {isLoading ? <Loader /> : translations.auth.login.submit}
      </Button>
    </form>
  );
}

export default Form;
