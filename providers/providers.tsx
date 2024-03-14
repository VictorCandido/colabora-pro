'use client'

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const Providers = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { theme } = useTheme()

    const appearance = theme === 'ligth' ? {} : { baseTheme: dark }

    return (
        <ClerkProvider
            appearance={appearance}
        >
            <ThemeProvider
                attribute='class'
                defaultTheme='dark'
                storageKey='colabora-pro'
            >
                {children}
            </ThemeProvider>
        </ClerkProvider>
    );
}

export default Providers;