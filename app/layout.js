import { ClerkProvider } from '@clerk/nextjs'
import '@/styles/globals.css'
export const metadata = {
	title: 'Project',
	description: 'dmit group project',
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>{children}</body>
			</html>
		</ClerkProvider>
	)
}
