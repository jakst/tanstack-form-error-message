"use client"
import { useForm } from "@tanstack/react-form"

export function UserForm() {
	const form = useForm({
		defaultValues: {
			name: "John Doe",
		},
	})

	return (
		<form.Provider>
			<form>
				<form.Field name="name">
					{(field) => (
						<input
							name={field.name}
							value={field.state.value}
							onChange={(event) => {
								field.handleChange(event.target.value)
							}}
						/>
					)}
				</form.Field>
			</form>
		</form.Provider>
	)
}
