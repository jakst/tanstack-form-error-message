import { UserForm } from "@/app/form"
import styles from "@/app/page.module.css"

export default function DerpPage() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Pages router</h1>
				<UserForm />
			</div>
		</main>
	)
}
