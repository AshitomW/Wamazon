import { Product, ProductResponse } from "./types";

const BASE_URL = "https://dummyjson.com/products";

interface GetProductsParams {
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}

export async function getProducts({
  limit = 30,
  skip = 0,
  sortBy,
  order = "asc",
}: GetProductsParams = {}): Promise<ProductResponse> {
  const params = new URLSearchParams({
    limit: limit.toString(),
    skip: skip.toString(),
  });

  if (sortBy) {
    params.append("sortBy", sortBy);
    params.append("order", order);
  }

  const res = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function searchProducts(
  query: string,
  limit = 30,
  skip = 0
): Promise<ProductResponse> {
  const params = new URLSearchParams({
    q: query,
    limit: limit.toString(),
    skip: skip.toString(),
  });

  const res = await fetch(`${BASE_URL}/search?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to search products");
  }

  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
