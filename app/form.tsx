"use client"
import { useForm } from "@tanstack/react-form"

export function UserForm() {
	const form = useForm({
		defaultValues: {
			name: "John Doe",
		},
		onSubmit: (values) => {
			form.setFieldMeta("name", (meta) => ({
				...meta,
				error: "This is an error",
			}))
		},
	})

	return (
		<form.Provider>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					e.stopPropagation()
					form.handleSubmit()
				}}
			>
				<form.Field name="name">
					{(field) => (
						<div>
							<input
								name={field.name}
								value={field.state.value ?? ""}
								onChange={(event) => {
									field.handleChange(event.target.value)
								}}
							/>
							{field.state.meta.errors.join(", ")}
						</div>
					)}
				</form.Field>
			</form>
		</form.Provider>
	)
}
