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
		this.state = {title: '', items: []};
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


class CreateNewItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', price: ''}
	}

	render(){
		const item={name: this.state.name, price: this.state.price}

		return <div>
			<form className="ItemForm">
				<input type='text' placeholder='Item Name' value={this.state.name} onChange={e => this.setState({name : e.target.value})} />
				<input type='number' min='0.00' step='0.01' placeholder='Item Price' value={this.state.price} onChange={e => this.setState({price : e.target.value})} />
				<Button onClick={() => this.props.addNewItem(item)} label='Add Item' />
			</form>
		</div>
	}
}

const Category = props =>
	<div>
		<p>- {props.title}</p>
		<CreateNewItem />
	</div>


class CategoryItems extends React.Component {
	constructor (){
		super();
		this.state = {
			itemsList: []
		};
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	addItem(item){
		var itemsList = this.state.itemsList.concat(item.id);
		this.setState({itemsList})
	}

	removeItem(item){
		var itemsList = this.state.itemsList.slice();
		itemsList.splice(itemsList.indexOf(item.id), 1)
		this.setState({itemsList})
	}

	render(){
		const {category} = this.props
		const {itemsList} = this.state



	}

}

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
			<table className='table table-border table-hover'>	
				<thead>
					<tr>
						<th>Categories</th>
					</tr>
				</thead>
				<tbody>
					
					{categories.map(category =>
						<tr><Category title={category.title}/></tr>
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