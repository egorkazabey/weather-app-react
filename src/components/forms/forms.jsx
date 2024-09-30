import './forms.css'


const forms = ({  weatherMethod }) => {
	return (
		<form className="forms"
		     onSubmit={weatherMethod}>
			<input type='text'
			       placeholder='enter city'
			       name='city'/>
			<button>
				Check the weather
			</button>
		</form>
	)
}

export default forms