interface PriceCalculateProps {
	price: number;
	discount: number;
	isInstallment: boolean;
	months: number;
}

const calculateTotalPrice = ({price, discount, isInstallment, months}: PriceCalculateProps): number => {
	if (isInstallment) {
		return (price * (100 - discount) / 100) / months
	}
	return price;
};

const price = calculateTotalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
console.log(price)
