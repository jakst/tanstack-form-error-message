import { UserForm } from "./form"
import styles from "./page.module.css"

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>App router</h1>
			<div>
				This form throws a warning 👇
				<UserForm />
			</div>

			<a href="/apage">It works in the pages router though 👉</a>
		</main>
	)
}
