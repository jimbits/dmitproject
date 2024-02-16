import { cn } from '@/lib/utils/mergeCss'

function Heading({ children, label, className }) {
	return <h1 className={cn('text-center text-3xl', className)}>{label}</h1>
}

export { Heading }
