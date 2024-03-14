/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6TrJQ44ZFhZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/components/ui/breadcrumb"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { ChevronDownIcon, Slash } from "lucide-react"

export default function ProjectSelector() {
    return (
        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <OrganizationSwitcher
                                appearance={{
                                    elements: {
                                        rootBox: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                        },
                                        organizationSwitcherTrigger: {
                                            padding: '6px',
                                            width: '100%',
                                            borderRadius: '8px',
                                            border: '1px solid #E5E7EB',
                                            justifyContent: 'space-between',
                                        }
                                    },

                                }}
                                afterCreateOrganizationUrl={"/app"}
                                afterLeaveOrganizationUrl={"/app"}
                            />
                        </BreadcrumbItem>

                        <BreadcrumbSeparator>
                            <Slash />
                        </BreadcrumbSeparator>

                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    Project
                                    <ChevronDownIcon className="h-4 w-4" />
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>shadcn</DropdownMenuItem>
                                    <DropdownMenuItem>next</DropdownMenuItem>
                                    <DropdownMenuItem>example</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    )
}