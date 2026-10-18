import type { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

// Required checkbox: guest confirms they are 18+ (or a parent/guardian booking
// for a minor) and has read the privacy policy. Used by both booking forms.
export default function AgeConsentField({ control }: { control: Control<any> }) {
  return (
    <FormField
      control={control}
      name="ageConfirm"
      render={({ field }) => (
        <FormItem className="md:col-span-2">
          <div className="flex items-start space-x-2">
            <FormControl>
              <Checkbox
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                data-testid="checkbox-age-confirm"
              />
            </FormControl>
            <FormLabel className="text-sm font-normal leading-snug">
              I am 18 or older (or a parent/guardian booking for a minor) and I have read the{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                Privacy Policy
              </a>
              . *
            </FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
