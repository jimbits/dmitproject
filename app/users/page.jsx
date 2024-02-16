import { UserButton } from '@clerk/nextjs'

addtodb
export default function UsersPage() {
	return (
		<>
			<nav className="flex justify-end py-2 px-4">
				<UserButton afterSignOutUrl="/" />
			</nav>
			<header>
				<h1 className="text-3xl text-center py-10">Users Page</h1>
			</header>
		</>
	)
}
