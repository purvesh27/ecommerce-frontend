export function discountedPrice(item) {
    const finalPrice = ((100 - item.product.discountPercentage) / 100) * item.product.price * item.quantity;
    return finalPrice;
}

// export discountedPrice;

export function discountedPriceProduct(product) {
    const finalPrice = ((100 - product.discountPercentage) / 100) * product.price;
    return finalPrice;
}

// export discountedPriceProduct;