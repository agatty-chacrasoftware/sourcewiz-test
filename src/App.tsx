import React, { useState } from "react";
import "./App.css";
import Product from "./Product";
import { Data } from "./Data";
import { MdAccountCircle } from "react-icons/md";

const App: React.FC = () => {
	const [currentTab, setCurrentTab] = useState(0);

	const removeDuplicates = () => {
		let uniq: any = {};
		return Data.filter(
			(obj) =>
				!uniq[obj.secondary_category.id] &&
				(uniq[obj.secondary_category.id] = true)
		);
	};

	return (
		<div className="App">
			<div className="header">
				<div>Sourcewiz</div>
				<div>
					<MdAccountCircle color="green" size="40px" />
				</div>
			</div>

			<div className="container">
				<div className="content">
					<div className="content" style={{ color: "#A9A9A9" }}>
						Home
					</div>
					<div className="content">/</div>
					<div className="content" style={{ fontWeight: "bold" }}>
						All Products
					</div>
				</div>
				<div className="all-products">
					<div className="all-product-content">All Products</div>
					<button className="all-product-button">Add Products</button>
				</div>
				<div className="all-product-subcontent">
					{removeDuplicates().length} Products
				</div>

				<div className="tabs">
					<div
						className={currentTab === 0 ? "current-tab" : "tab-content"}
						onClick={() => {
							setCurrentTab(0);
						}}
					>
						Categories
					</div>
					<div
						className={currentTab === 1 ? "current-tab" : "tab-content"}
						onClick={() => {
							setCurrentTab(1);
						}}
					>
						See All Products
					</div>
				</div>

				{currentTab === 0 ? (
					<div className="grid-container">
						{removeDuplicates().map((item) => {
							return (
								<Product
									categoryName={item.secondary_category.name}
									productImages={item.product_images}
								/>
							);
						})}
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default App;
