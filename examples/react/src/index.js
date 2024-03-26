import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "./todo/app";

import "todomvc-app-css/index.css";
import "../src/dreamcoat/ui-components-lib-wc.css";

const root = createRoot(document.getElementById('root'));

root.render(<HashRouter>
	<Routes>
		<Route path="*" element={<App />} />
	</Routes>
</HashRouter>);
