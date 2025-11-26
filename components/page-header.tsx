import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title?: string
  description?: string
  backLink?: {
    href: string
    text: string
  }
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl"
  className?: string
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "7xl": "max-w-7xl",
}

export default function PageHeader({
  title,
  description,
  backLink,
  maxWidth = "7xl",
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("bg-white border-b", className)}>
      <div className={cn(maxWidthClasses[maxWidth], "mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12")}>
        {backLink && (
          <div className={cn("mb-6", !title && !description && "mb-0")}>
            <Link href={backLink.href}>
              <span className="text-red-600 hover:text-red-600 flex items-center gap-1 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" /> {backLink.text}
              </span>
            </Link>
          </div>
        )}
        {title && <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>}
        {description && <p className="text-lg md:text-xl text-gray-600">{description}</p>}
      </div>
    </header>
  )
}

