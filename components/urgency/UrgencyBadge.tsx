export function UrgencyBadge({ type = 'discount' }: { type?: 'discount' | 'limited' | 'popular' }) {
  const config = {
    discount: {
      text: 'Limited Time Offer',
      bgColor: 'bg-red-100 dark:bg-red-900',
      textColor: 'text-red-600 dark:text-red-400'
    },
    limited: {
      text: 'Limited Slots',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      textColor: 'text-orange-600 dark:text-orange-400'
    },
    popular: {
      text: 'Popular Service',
      bgColor: 'bg-green-100 dark:bg-green-900',
      textColor: 'text-green-600 dark:text-green-400'
    }
  }

  const { text, bgColor, textColor } = config[type]

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
      ⏰ {text}
    </span>
  )
}