// import * as React from "react"
// import * as AccordionPrimitive from "@radix-ui/react-accordion"
// import { ChevronDownIcon, Plus } from "lucide-react"

// import { cn } from "@/lib/utils"

// function Accordion({
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
//   return <AccordionPrimitive.Root data-slot="accordion" {...props} />
// }

// function AccordionItem({
//   className,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
//   return (
//     <AccordionPrimitive.Item
//       data-slot="accordion-item"
//       className={cn("border-b ", className)}
//       {...props}
//     />
//   )
// }

// function AccordionTrigger({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
//   return (
//     <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         data-slot="accordion-trigger"
//         className={cn(
//           "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   )
// }

// function AccordionContent({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
//   return (
//     <AccordionPrimitive.Content
//       data-slot="accordion-content"
//       className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
//       {...props}
//     >
//       <div className={cn("pt-0 pb-4", className)}>{children}</div>
//     </AccordionPrimitive.Content>
//   )
// }

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const location = useLocation();
  const isInvestPage = location.pathname.startsWith("/invest");

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",

          // Common icon toggle behavior
          "[&>svg.icon-open]:hidden [&[data-state=open]>svg.icon-open]:block [&>svg.icon-closed]:block [&[data-state=open]>svg.icon-closed]:hidden",

          className
        )}
        {...props}
      >
        {children}

        {/* Conditionally render icon sets */}
        {isInvestPage ? (
          <>
            <Plus className="icon-closed h-6 w-6 text-green-600 pointer-events-none translate-y-0.5 transition-transform duration-200" />
            <Minus className="icon-open h-6 w-6 text-green-600 pointer-events-none translate-y-0.5 transition-transform duration-200" />
          </>
        ) : (
          <>
            <ChevronDown className="icon-closed h-5 w-5 text-gray-600 pointer-events-none transition-transform duration-200" />
            <ChevronUp className="icon-open h-5 w-5 text-gray-600 pointer-events-none transition-transform duration-200" />
          </>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
