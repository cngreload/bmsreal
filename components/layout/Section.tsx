import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement>
{
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
    /**
     * Defines background and text color variants.
     */
    variant?: 'white' | 'subtle' | 'dark' | 'none';
    /**
     * Sets maximum width constraints of the internal container.
     */
    size?: 'default' | 'narrow' | 'wide' | 'full';
    /**
     * Fluid padding hierarchy optimized for mobile, tablet, and desktop.
     */
    spacing?: 'default' | 'large' | 'none';
    /**
     * Optional top border with standardized subtle styling.
     */
    border?: boolean;
}

/**
 * Universal Section Wrapper
 * Standardizes padding, background variants, and container constraints across the application.
 */
export const Section: React.FC<SectionProps> = ( {
    children,
    id,
    className,
    containerClassName,
    variant = 'none',
    size = 'default',
    spacing = 'default',
    border = false,
    ...rest
} ) =>
{
    const variants = {
        white: 'bg-white',
        subtle: 'bg-slate-50',
        dark: 'bg-bms-dark text-white',
        none: '',
    };

    const sizes = {
        default: 'max-w-7xl',
        narrow: 'max-w-4xl',
        wide: 'max-w-[1500px]',
        full: 'max-w-full',
    };

    // Upgraded: Smooth responsive increments avoiding jumpy designs
    const spacings = {
        default: 'py-10 md:py-16 lg:py-24',
        large: 'py-16 md:py-24 lg:py-32',
        none: 'py-0',
    };

    return (
        <section
            id={ id }
            className={ cn(
                'relative w-full overflow-hidden',
                variants[ variant ],
                spacings[ spacing ],
                border && 'border-t border-slate-200',
                className
            ) }
            { ...rest }
        >
            <div
                className={ cn(
                    'mx-auto w-full px-4 sm:px-6 lg:px-8',
                    sizes[ size ],
                    containerClassName
                ) }
            >
                { children }
            </div>
        </section>
    );
};

export default Section;