import { useReducer } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import {
	DcNavbar,
	DcNavSidebar,
	DcNavItem,
	DcNavSubmenu,
	DcSubmenuSection,
	DcSubmenuItem,
	DcIcon,
} from "../dreamcoat/ui-components-lib-rc";

import { todoReducer } from "./reducer";

import "./app.css";
import "./app-overrides.css";

export function App() {
	const [todos, dispatch] = useReducer(todoReducer, []);

	return (
		<>
			<DcNavbar>
				<DcNavSidebar>
					<div slot="logo">
						<a href="/">
							<DcIcon name="bug" family="regular" size="lg" />
						</a>
					</div>
					<div slot="upper-nav">
						<DcNavItem icon="fa-barcode" href="checkin.php" id="checkin">
							Check In
						</DcNavItem>
						<DcNavItem
							icon="fa-calendar-week"
							href="schedules.php"
							id="collapseWidthExample"
							has-submenu="true"
							is-active="true"
						>
							Schedules
						</DcNavItem>
						<DcNavItem
							icon="fa-hands-holding-heart"
							href="childcare.php"
							id="Childcare"
							target="_blank"
						>
							Childcare
						</DcNavItem>
						<DcNavItem icon="fa-chart-mixed" href="reports.php" id="Reports">
							Reports
						</DcNavItem>
						<DcNavItem icon="fa-messages" href="outreach.php" id="Member">
							Member Outreach
						</DcNavItem>
						<DcNavItem icon="fa-tools" href="tools.php" id="Tools">
							Tools
						</DcNavItem>
						<DcNavItem icon="fa-clipboard" href="events.php" id="eventMana">
							Event Management
						</DcNavItem>
					</div>
					<div slot="bottom-nav">
						<DcNavItem icon="fa-gears" href="settings.php">
							Club Settings
						</DcNavItem>
					</div>
				</DcNavSidebar>
				<DcNavSubmenu
					id="collapseWidthExample"
					title="Club Automation"
					subtitle="Schedules"
					collapsible="true"
					collapsible-position-left="true"
					collapsible-text-open="Open All"
					collapsible-text-close="Close All"
				>
					<div slot="sections">
						<DcSubmenuSection
							title="Members 1"
							section-id="schedules-section1"
							expanded="true"
						>
							<DcSubmenuItem
								favorite="true"
								href="aquatics.php"
								is-active="true"
							>
								Aquatics
							</DcSubmenuItem>
							<DcSubmenuItem favorite="true" href="basketball.php">
								Basketball
							</DcSubmenuItem>
							<DcSubmenuItem href="facility.php">Facility</DcSubmenuItem>
							<DcSubmenuItem href="pickleball.php">Pickleball</DcSubmenuItem>
							<DcSubmenuItem href="pilates.php">Pilates</DcSubmenuItem>
							<DcSubmenuItem href="repair.php">Racquet Repair</DcSubmenuItem>
							<DcSubmenuItem href="soccer.php">Soccer Fields</DcSubmenuItem>
							<DcSubmenuItem href="tennis.php">Tennis</DcSubmenuItem>
						</DcSubmenuSection>
					</div>
				</DcNavSubmenu>
			</DcNavbar>

			<div className="wrapper">
				<Header dispatch={dispatch} />
				<Main todos={todos} dispatch={dispatch} />
				<Footer todos={todos} dispatch={dispatch} />
			</div>
		</>
	);
}
