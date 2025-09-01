"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Sparkles, Wand2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { generateTailoredAboutSections } from "@/ai/flows/generate-tailored-about-sections"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  targetAudience: z.string().min(2, {
    message: "Target audience must be at least 2 characters.",
  }),
})

type TailorAboutSectionProps = {
  originalAbout: string
}

export default function TailorAboutSection({ originalAbout }: TailorAboutSectionProps) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetAudience: "Recruiters at a top tech company",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    setResult(null)
    try {
      const response = await generateTailoredAboutSections({
        aboutSection: originalAbout,
        targetAudience: values.targetAudience,
      })
      setResult(response.tailoredAboutSection)
    } catch (error) {
      console.error("Failed to generate tailored about section:", error)
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the tailored about section. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-card/50 border-dashed border-primary/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          <span>Tailor 'About' Section with AI</span>
        </CardTitle>
        <CardDescription>
          Generate a version of your 'About' section tailored for a specific audience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Recruiters, Project Managers..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              <Wand2 className="mr-2 h-4 w-4" />
              {loading ? "Generating..." : "Generate"}
            </Button>
          </form>
        </Form>
      </CardContent>
      {(loading || result) && (
        <CardFooter>
          <div className="w-full space-y-4">
            <h3 className="font-semibold">Generated Result:</h3>
            {loading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {result && <p className="text-muted-foreground whitespace-pre-line">{result}</p>}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
