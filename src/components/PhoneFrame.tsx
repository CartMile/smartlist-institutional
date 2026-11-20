import type { ReactNode } from 'react'

type Props = {
  alt: string
  src?: string
  children?: ReactNode
  className?: string
  priority?: boolean
}

export function PhoneFrame({ src, alt, children, className = '', priority = false }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[280px] ${className}`}>
      <div className="rounded-[2rem] border border-black/10 bg-black p-2 shadow-[0_24px_60px_rgba(19,32,15,0.18)]">
        <div className="overflow-hidden rounded-[1.55rem] bg-white">
          {children ? (
            <div role="img" aria-label={alt} className="relative aspect-[9/19.5] w-full overflow-hidden bg-[#f6f7f8]">
              <div className="absolute inset-0">{children}</div>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className="aspect-[9/19.5] w-full object-cover object-top"
              loading={priority ? 'eager' : 'lazy'}
            />
          )}
        </div>
      </div>
    </div>
  )
}
