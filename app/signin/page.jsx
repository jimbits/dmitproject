import { SignIn } from '@clerk/nextjs'
export default function SignInPage() {
	return (
		<>
			<header>
				<h1 className="text-3xl text-center py-10">Sign In Page</h1>
			</header>
			<main>
				<section className="flex justify-center">
					<SignIn />
				</section>
			</main>
		</>
	)
}
