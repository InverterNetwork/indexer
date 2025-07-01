import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

/**
 * Simple signal manager for coordinating event processing
 */

// Default TTL: 2 seconds (short wait for fresh prices)
const DEFAULT_TTL = 2

// Cache storage
const cache = new CacheContainer(new MemoryStorage())

// Signal data stored in cache
interface SignalData {
  promise: Promise<void>
  resolve: () => void
  timestamp: number
}

// Track recent signals
interface RecentSignal {
  timestamp: number
}

/**
 * Create a deferred signal that will wait for a signal() call
 * @param id - The unique identifier
 * @param namespace - Optional namespace
 * @param ttl - Time to live in seconds (default: 2)
 * @returns Promise that resolves when signaled or after timeout
 */
export async function createDeferredSignal(
  id: string,
  namespace = 'default',
  ttl = DEFAULT_TTL
): Promise<void> {
  const key = `${namespace}:${id}`
  const recentKey = `recent:${key}`

  // Check if there was a recent signal first
  const recentSignal = await cache.getItem<RecentSignal>(recentKey)
  if (recentSignal) {
    console.log(
      `[createDeferredSignal] Found recent signal for: ${key}, resolving immediately`
    )
    await cache.setItem(recentKey, null, { ttl: 0 }) // Clean up
    return Promise.resolve()
  }

  // Check if signal already exists
  const existing = await cache.getItem<SignalData>(key)
  if (existing) {
    // Return existing promise if still valid
    const age = Date.now() - existing.timestamp
    if (age < ttl * 1000) {
      return existing.promise
    }
  }

  // Create new deferred signal
  let resolve: () => void
  const promise = new Promise<void>((res) => {
    resolve = res

    // Auto-resolve after TTL
    setTimeout(() => {
      res()
      cache.setItem(key, null, { ttl: 0 })
    }, ttl * 1000)
  })

  const signalData: SignalData = {
    promise,
    resolve: resolve!,
    timestamp: Date.now(),
  }

  await cache.setItem(key, signalData, { ttl })
  return promise
}

/**
 * Signal a waiting deferred signal
 * @param id - The unique identifier
 * @param namespace - Optional namespace
 */
export async function signal(id: string, namespace = 'default'): Promise<void> {
  const key = `${namespace}:${id}`
  const recentKey = `recent:${key}`

  // Store as recent signal
  const recentSignal: RecentSignal = { timestamp: Date.now() }
  await cache.setItem(recentKey, recentSignal, { ttl: 5 })

  // Get waiting signal
  const signalData = await cache.getItem<SignalData>(key)
  if (signalData) {
    // Resolve the promise and clean up
    signalData.resolve()
    await cache.setItem(key, null, { ttl: 0 })
  }

  return Promise.resolve()
}

/**
 * Check if there's a recent signal without waiting
 * @param id - The unique identifier
 * @param namespace - Optional namespace
 * @returns true if a recent signal exists, false otherwise
 */
export async function hasRecentSignal(
  id: string,
  namespace = 'default'
): Promise<boolean> {
  const key = `${namespace}:${id}`
  const recentKey = `recent:${key}`

  const recentSignal = await cache.getItem<RecentSignal>(recentKey)
  return !!recentSignal
}
