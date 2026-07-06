import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProductById } from '../data/products.js'
import { CartContext } from './cartContext.js'

const CART_KEY = 'luxelane-cart'
const ORDERS_KEY = 'luxelane-orders'
const WISHLIST_KEY = 'luxelane-wishlist'

const getDefaultVariant = (product, options = {}) => ({
  size: options.size ?? product?.sizes?.[0] ?? 'One size',
  color: options.color ?? product?.colors?.[0]?.name ?? 'Default',
})

const getLineKey = (item, product) => {
  const variant = getDefaultVariant(product, item)
  return `${item.id}__${variant.size}__${variant.color}`
}

const readStoredValue = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => readStoredValue(CART_KEY, []))
  const [orders, setOrders] = useState(() => readStoredValue(ORDERS_KEY, []))
  const [wishlist, setWishlist] = useState(() => readStoredValue(WISHLIST_KEY, []))
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
  }, [orders])

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => {
          const product = getProductById(item.id)
          if (!product) return null

          const variant = getDefaultVariant(product, item)
          return {
            ...product,
            lineKey: getLineKey(item, product),
            quantity: item.quantity,
            selectedSize: variant.size,
            selectedColor: variant.color,
          }
        })
        .filter(Boolean),
    [cart],
  )

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cartItems.length === 0 || subtotal >= 250 ? 0 : 12
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const wishlistItems = useMemo(
    () => wishlist.map((id) => getProductById(id)).filter(Boolean),
    [wishlist],
  )

  const openCartDrawer = useCallback(() => {
    setCartDrawerOpen(true)
  }, [])

  const closeCartDrawer = useCallback(() => {
    setCartDrawerOpen(false)
  }, [])

  const closeToast = useCallback(() => {
    setToast(null)
  }, [])

  const addToCart = useCallback((id, quantity = 1, options = {}) => {
    const product = getProductById(id)
    const variant = getDefaultVariant(product, options)
    const nextItem = { id, quantity, size: variant.size, color: variant.color }
    const nextLineKey = getLineKey(nextItem, product)

    setCart((items) => {
      const existing = items.find((item) => getLineKey(item, getProductById(item.id)) === nextLineKey)
      if (existing) {
        return items.map((item) =>
          getLineKey(item, getProductById(item.id)) === nextLineKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...items, nextItem]
    })
    setToast({
      id: Date.now(),
      message: `${product?.name ?? 'Item'} added in ${variant.color}, ${variant.size}`,
    })
    setCartDrawerOpen(true)
  }, [])

  const isWishlisted = useCallback((id) => wishlist.includes(id), [wishlist])

  const toggleWishlist = useCallback((id) => {
    const product = getProductById(id)

    setWishlist((items) => {
      const exists = items.includes(id)
      setToast({
        id: Date.now(),
        message: exists
          ? `${product?.name ?? 'Item'} removed from wishlist`
          : `${product?.name ?? 'Item'} saved to wishlist`,
      })
      return exists ? items.filter((item) => item !== id) : [...items, id]
    })
  }, [])

  const updateQuantity = useCallback((lineKey, quantity) => {
    setCart((items) =>
      items
        .map((item) =>
          getLineKey(item, getProductById(item.id)) === lineKey
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeFromCart = useCallback((lineKey) => {
    setCart((items) => items.filter((item) => getLineKey(item, getProductById(item.id)) !== lineKey))
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const createOrder = useCallback((customer) => {
    const order = {
      id: `LX-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      customer,
      items: cartItems,
      subtotal,
      shipping,
      tax,
      total,
    }
    setOrders((current) => [order, ...current])
    clearCart()
    return order
  }, [cartItems, clearCart, shipping, subtotal, tax, total])

  const value = useMemo(
    () => ({
      cartItems,
      orders,
      subtotal,
      shipping,
      tax,
      total,
      totalItems,
      cartDrawerOpen,
      wishlist,
      wishlistItems,
      toast,
      addToCart,
      isWishlisted,
      toggleWishlist,
      updateQuantity,
      removeFromCart,
      clearCart,
      createOrder,
      openCartDrawer,
      closeCartDrawer,
      closeToast,
    }),
    [
      addToCart,
      cartItems,
      cartDrawerOpen,
      clearCart,
      closeCartDrawer,
      closeToast,
      createOrder,
      isWishlisted,
      openCartDrawer,
      orders,
      removeFromCart,
      shipping,
      subtotal,
      tax,
      total,
      totalItems,
      toast,
      toggleWishlist,
      updateQuantity,
      wishlist,
      wishlistItems,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
