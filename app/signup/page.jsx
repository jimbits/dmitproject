import { SignUp } from '@clerk/nextjs'
export default function SignUpPage() {
	return (
		<>
			<header>
				<h1 className="text-3xl text-center py-10">Sign Up Page</h1>
			</header>
			<main>
				<section className="flex justify-center">
					<SignUp />
				</section>
			</main>
		</>
	)
}
