const Header = () =>
	<div className="container fluid">
		<div className="jumbotron">
			<h1 className="text-center">Pier Pilot<small>®</small> Place</h1>
		</div>
	</div>

const Button = props => {
	var classes = [
	'btn',
	props.warning ? 'btn-warning' : 'btn-primary',
	]

	return <button onClick={props.onClick}  type="button" className={classes.join(' ')} data-toggle="button" aria-pressed="false" autoComplete="off">
 		{props.label}
	</button>
}

Button.propTypes = {
	onClick: React.PropTypes.func,
	label: React.PropTypes.string.isRequired,
	warning: React.PropTypes.bool,
}

class CreateCategoryForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: ''};
	}

	render(){
		const category={title: this.state.title}

		return <div>
			<form className="CategoryForm">
				<input type='text' className='form-control' placeholder='Category' value={this.state.title} onChange={e => this.setState({title : e.target.value})} />
				<Button onClick={() => this.props.addNewCategory(category)} label='Add Category' />
			</form>
		</div>
	}
}

const CategoryName = props =>
	<div>
		<p>- {props.title}</p>
	</div>

class CategoryList extends React.Component {
	constructor () {
		super();
		this.state = {categories: []};
		this.count = 0;
		this.addNewCategory = this.addNewCategory.bind(this);
	}

	addNewCategory(category){
		this.count++
		category.id = this.count
		const newCategories = this.state.categories.concat(category)
		this.setState({categories: newCategories})
	}

	render(){
		const {categories} = this.state

		return <div className="col-md-2 col-md-offset-1 pull-left">
			<CreateCategoryForm addNewCategory={this.addNewCategory}/>
			<table className='table table-bordered table-hover'>	
				<thead>
					<tr>
						<th>Categories</th>
					</tr>
				</thead>
				<tbody>
					
					{categories.map(category =>
						<tr><td><CategoryName title={category.title}/></td></tr>
						)}
					
				</tbody>
			</table>
		</div>
	}
}

ReactDOM.render(
	<div>	
		<Header/>
		<CategoryList/>
	</div>,

	document.getElementById("app")
)