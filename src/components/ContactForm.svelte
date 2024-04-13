<form>
	<div class="field">
		<label for="nome">Nome</label>
		<input type="text" name="nome" placeholder="Giggio" />
	</div>
	<div class="field">
		<label for="email">Email</label>
		<input type="email" name="email" placeholder="giggio@gmail.com" />
	</div>
	<div class="field">
		<label for="msg">Messaggio</label>
		<textarea name="msg" rows="5" />
	</div>
	<div class="field">
		<input type="submit" value="Invio" />
	</div>
</form>

<style>
	form {
		background-color: #00000040;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		width: 30rem;
		gap: 1.5rem;
		padding: 3rem;
	}
	.field {
		display: flex;
		flex-direction: column;
	}
	input,
	textarea {
		border-radius: 0.5rem;
		outline: none;
		padding: 0.5rem;
		font-family: inherit;
	}
	textarea {
		resize: vertical;
	}
	label {
		font-size: 1.5rem;
	}
	input[type='submit'] {
		background-color: red;
		border-radius: 0.5rem;
		padding: 0.5rem;
	}
</style>
