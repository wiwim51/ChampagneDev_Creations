"use client";

import { useColor } from "@/context/ColorContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "./ui/button";
import { TitleColor } from "./ui/TitleColor";

const formSchema = z.object({
  nom: z.string().min(2, {
    message: "Votre Nom doit contenir au moins 2 caractères.",
  }),
  prenom: z.string().min(2, {
    message: "Votre Prénom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Votre Email doit être valide.",
  }),
  subject: z.string().min(5).max(50, {
    message: "Votre Objet doit contenir au moins 5 caractères et maximum 50.",
  }),
  message: z.string().min(20).max(500, {
    message:
      "Votre Message doit contenir au moins 20 caractères et maximum 500.",
  }),
});

type ContactFormData = {
  nom: string;
  prenom: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<ContactFormData> = async (
    values: z.infer<typeof formSchema>
  ) => {
    setIsSubmitting(true);

    try {
      const data = values;

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: data.nom,
          prenom: data.prenom,
          subject: data.subject,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast.success("Votre message a bien été envoyé !");
        form.reset();
      } else {
        const errorMessage = await response.text();
        console.error("Error sending email:", errorMessage);
        toast.error(
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const { currentColor } = useColor();

  return (
    <section id="section-4" className="w-1/2 min-h-screen pt-40">
      <TitleColor children="Prenez contact avec moi !" />
      <p className="w-full text-2xl leading-10 tracking-wider text-center pt-44 pb-44">
        Si vous souhaitez{" "}
        <span className={`text-${currentColor}-400`}>travailler avec moi,</span>{" "}
        c'est ici ! 📩
      </p>
      <div
        className={`flex justify-center w-full pt-10 border-b-2 border-l-2 border-${currentColor}-400 border-solid rounded-md relative`}
      >
        <div className="absolute top-0 w-full pb-10 mx-auto transform -translate-y-1/2">
          <div className="flex items-center justify-around">
            <Link
              href="https://www.instagram.com/champagnedev_creations/"
              className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md w-28 h-28 items-center flex hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
            >
              <Instagram width={75} height={75} />
            </Link>
            <Link
              href="https://github.com/wiwim51"
              className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md w-28 h-28 items-center flex hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
            >
              <Github width={75} height={75} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jordane-lemmer-12290819b/"
              className={`px-4 py-2 text-sm font-medium border-2 border-${currentColor}-400 border-solid rounded-md w-28 h-28 items-center flex hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
            >
              <Linkedin width={75} height={75} />
            </Link>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full grid-cols-2 gap-6 p-10 shadow-lg bg-grey_grad rounded-2xl"
          >
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input required placeholder="Nom *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prenom"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input required placeholder="Prénom *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input required placeholder="Email *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormControl>
                    <Input required placeholder="Objet *" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormControl>
                    <Textarea
                      className="w-full p-2 text-lg text-black bg-white resize-none min-h-44"
                      required
                      placeholder="Votre message ici. *"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="col-span-1 text-grey">
              (*) ⚠️ veuillez remplir tous les champs ⚠️
            </p>
            <div className="flex justify-center col-span-1 md:col-span-2">
              <Toaster position="bottom-right" richColors />
              <Button
                type="submit"
                variant="secondary"
                className={`p-4 h-10 w-52 text-lg bg-black font-medium border-2 border-${currentColor}-400 border-solid rounded-md hover:bg-gradient-to-tr from-black via-${currentColor}-700 to-black`}
                onClick={form.handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
