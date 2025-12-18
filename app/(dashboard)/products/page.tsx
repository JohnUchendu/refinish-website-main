'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Edit, Trash2, Plus, Search, Package } from 'lucide-react'
import { ProductForm } from '@/components/dashboard/ProductForm'

// This will be replaced with real data from Prisma
const initialProducts = [
    {
        id: '1',
        name: 'Premium Car Wax',
        description: 'High-quality car wax for ultimate shine and protection',
        price: 15000,
        category: 'detailing',
        inStock: true,
        isBestSeller: true,
        stockQuantity: 50,
    },
    {
        id: '2',
        name: 'Interior Cleaner Kit',
        description: 'Complete interior cleaning kit',
        price: 8500,
        category: 'cleaning',
        inStock: true,
        isNew: true,
        stockQuantity: 30,
    },
    // Add more from your mock data
]

export default function ProductsPage() {
    const [products, setProducts] = useState(initialProducts)
    const [search, setSearch] = useState('')
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState<any>(null)

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    )

    const handleEdit = (product: any) => {
        setEditingProduct(product)
        setIsFormOpen(true)
    }

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id))
        }
    }

    const handleSave = (productData: any) => {
        if (editingProduct) {
            // Update existing product
            setProducts(products.map(p =>
                p.id === editingProduct.id ? { ...p, ...productData } : p
            ))
        } else {
            // Add new product
            const newProduct = {
                id: Date.now().toString(),
                ...productData,
            }
            setProducts([...products, newProduct])
        }
        setIsFormOpen(false)
        setEditingProduct(null)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Products</h1>
                    <p className="text-gray-600">Manage your online shop products</p>
                </div>
                <Button onClick={() => setIsFormOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                </Button>
            </div>

            {/* Search and Filters */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                            <Input
                                placeholder="Search products..."
                                className="pl-9"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Button variant="outline">Filter</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Products Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Products ({filteredProducts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Stock</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredProducts.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <div className="font-medium">{product.name}</div>
                                            <div className="text-sm text-gray-500">{product.description}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{product.category}</Badge>
                                        </TableCell>
                                        <TableCell>₦{product.price.toLocaleString()}</TableCell>
                                        <TableCell>{product.stockQuantity}</TableCell>
                                        <TableCell>
                                            {product.inStock ? (
                                                <Badge variant="default">In Stock</Badge>
                                            ) : (
                                                <Badge variant="destructive">Out of Stock</Badge>
                                            )}
                                            {product.isBestSeller && (
                                                <Badge className="ml-2 bg-yellow-100 text-yellow-800">Best Seller</Badge>
                                            )}
                                            {product.isNew && (
                                                <Badge className="ml-2 bg-blue-100 text-blue-800">New</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end space-x-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleEdit(product)}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Product Form Modal */}
            {isFormOpen && (
                <ProductForm
                    product={editingProduct}
                    onSave={handleSave}
                    onClose={() => {
                        setIsFormOpen(false)
                        setEditingProduct(null)
                    }}
                />
            )}
        </div>
    )
}