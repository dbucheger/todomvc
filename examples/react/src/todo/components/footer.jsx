import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

import { REMOVE_COMPLETED_ITEMS } from "../constants";
import { DcButton, DcTooltip } from "../../dreamcoat/ui-components-lib-rc";

export function Footer({ todos, dispatch }) {
    const { pathname: route } = useLocation();

    const activeTodos = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);

    const removeCompleted = useCallback(() => dispatch({ type: REMOVE_COMPLETED_ITEMS }), [dispatch]);
	const triggerConsoleLog = useCallback(() => (console.log("click handler triggered")));

    // prettier-ignore
    if (todos.length === 0)
        return null;

    return (
        <footer className="footer" data-testid="footer">
			<DcTooltip direction="top" title="Toggle visibility of items with the filters">
            	<span className="todo-count">{`${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`}</span>
			</DcTooltip>
            <ul className="filters" data-testid="footer-navigation">
                <li>
					<DcButton className="all-button" label="All" size="md" variant="text-primary" icon-left-family="regular"
						icon-left="filter" onClick={triggerConsoleLog} />
                </li>
                <li>
					<DcButton className="active-button" label="Active" size="md" variant="text" icon-left-family="regular"
						icon-left="filter" onClick={triggerConsoleLog} />
                </li>
                <li>
					<DcButton className="completed-button" label="Completed" size="md" variant="text" icon-left-family="regular"
						icon-left="filter" onClick={triggerConsoleLog} />
                </li>
            </ul>
			<DcButton className="clear-completed" label="Clear completed" size="md" variant="text-danger" disabled={activeTodos.length === todos.length} onClick={removeCompleted} />
        </footer>
    );
}
