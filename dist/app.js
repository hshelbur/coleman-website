"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header() {
	return React.createElement(
		"div",
		{ className: "container fluid" },
		React.createElement(
			"div",
			{ className: "jumbotron" },
			React.createElement(
				"h1",
				{ className: "text-center" },
				"Pier Pilot",
				React.createElement(
					"small",
					null,
					"\xAE"
				),
				" Place"
			)
		)
	);
};

var Button = function Button(props) {
	var classes = ['btn', props.warning ? 'btn-warning' : 'btn-primary'];

	return React.createElement(
		"button",
		{ onClick: props.onClick, type: "button", className: classes.join(' '), "data-toggle": "button", "aria-pressed": "false", autoComplete: "off" },
		props.label
	);
};

Button.propTypes = {
	onClick: React.PropTypes.func,
	label: React.PropTypes.string.isRequired,
	warning: React.PropTypes.bool
};

var CreateCategoryForm = function (_React$Component) {
	_inherits(CreateCategoryForm, _React$Component);

	function CreateCategoryForm(props) {
		_classCallCheck(this, CreateCategoryForm);

		var _this = _possibleConstructorReturn(this, (CreateCategoryForm.__proto__ || Object.getPrototypeOf(CreateCategoryForm)).call(this, props));

		_this.state = { title: '' };
		return _this;
	}

	_createClass(CreateCategoryForm, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var category = { title: this.state.title };

			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ className: "CategoryForm" },
					React.createElement("input", { type: "text", className: "form-control", placeholder: "Category", value: this.state.title, onChange: function onChange(e) {
							return _this2.setState({ title: e.target.value });
						} }),
					React.createElement(Button, { onClick: function onClick() {
							return _this2.props.addNewCategory(category);
						}, label: "Add Category" })
				)
			);
		}
	}]);

	return CreateCategoryForm;
}(React.Component);

var CategoryName = function CategoryName(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			"- ",
			props.title
		)
	);
};

var CategoryList = function (_React$Component2) {
	_inherits(CategoryList, _React$Component2);

	function CategoryList() {
		_classCallCheck(this, CategoryList);

		var _this3 = _possibleConstructorReturn(this, (CategoryList.__proto__ || Object.getPrototypeOf(CategoryList)).call(this));

		_this3.state = { categories: [] };
		_this3.count = 0;
		_this3.addNewCategory = _this3.addNewCategory.bind(_this3);
		return _this3;
	}

	_createClass(CategoryList, [{
		key: "addNewCategory",
		value: function addNewCategory(category) {
			this.count++;
			category.id = this.count;
			var newCategories = this.state.categories.concat(category);
			this.setState({ categories: newCategories });
		}
	}, {
		key: "render",
		value: function render() {
			var categories = this.state.categories;


			return React.createElement(
				"div",
				{ className: "col-md-2 col-md-offset-1 pull-left" },
				React.createElement(CreateCategoryForm, { addNewCategory: this.addNewCategory }),
				React.createElement(
					"table",
					{ className: "table table-bordered table-hover" },
					React.createElement(
						"thead",
						null,
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								null,
								"Categories"
							)
						)
					),
					React.createElement(
						"tbody",
						null,
						categories.map(function (category) {
							return React.createElement(
								"tr",
								null,
								React.createElement(
									"td",
									null,
									React.createElement(CategoryName, { title: category.title })
								)
							);
						})
					)
				)
			);
		}
	}]);

	return CategoryList;
}(React.Component);

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Header, null),
	React.createElement(CategoryList, null)
), document.getElementById("app"));