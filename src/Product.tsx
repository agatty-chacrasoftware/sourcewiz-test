import React from "react";
import { FaImages } from "react-icons/fa";

interface Props {
	categoryName: string;
	productImages: {
		directus_files_id: string;
	}[];
}

const Product: React.FC<Props> = ({ categoryName, productImages }) => {
	return (
		<div className="grid-item">
			<div className="content" style={{ fontWeight: "bold", fontSize: "20px" }}>
				{categoryName}
			</div>
			<div className="content">{productImages.length} Products</div>
			<div className="image-grid-container">
				<div className="image-grid-item">
					<img
						src={"//example.com/assets/" + productImages[0].directus_files_id}
						alt="noImage"
					/>
				</div>
				<div className="image-grid-item">
					{productImages[1] ? (
						<img
							src={"//example.com/assets/" + productImages[1].directus_files_id}
							alt="noImage"
						/>
					) : (
						<FaImages color="gray" size="40px" />
					)}
				</div>
				<div className="image-grid-item">
					{productImages[2] ? (
						<img
							src={"//example.com/assets/" + productImages[2].directus_files_id}
							alt="noImage"
						/>
					) : (
						<FaImages size="40px" color="gray" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Product;
