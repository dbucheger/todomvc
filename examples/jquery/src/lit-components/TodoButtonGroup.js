import {
	LitElement,
	css,
	html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class TodoButtonGroup extends LitElement {
	static properties = {
		name: {},
	};
	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			color: blue;
		}
		.filters {
			margin: 0;
			padding: 0;
			list-style: none;
			position: absolute;
			right: 0;
			left: 0;
		}

		.filters li {
			display: inline;
		}
	`;

	constructor() {
		super();
		// Declare reactive properties
		this.name = "World";
	}

	// Render the UI as a function of component state
	render() {
		return html`<ul id="filters" class="filters">
			<li>
				<dc-button
					class="all-button"
					label="All"
					size="md"
					variant="text"
					icon-left-family="regular"
					icon-left="filter"
					onclick="location = '#/all'"
				></dc-button>
			</li>
			<li>
				<dc-button
					class="active-button"
					label="Active"
					size="md"
					variant="text"
					icon-left-family="regular"
					icon-left="filter"
					onclick="location = '#/active'"
				></dc-button>
			</li>
			<li>
				<dc-button
					class="completed-button"
					label="Completed"
					size="md"
					variant="text"
					icon-left-family="regular"
					icon-left="filter"
					onclick="location = '#/completed'"
				></dc-button>
			</li>
		</ul>`;
	}
}
customElements.define("todo-buttongroup", TodoButtonGroup);
