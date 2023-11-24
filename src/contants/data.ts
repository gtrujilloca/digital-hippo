import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'

import { Perk } from '@/app/types/data'

export const perks: Perk[] = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: 'Get your assets delivered to your email in seconds and download them right away.'
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: 'Every asset on our platform is verified by our team to ensure out highest quality standards. No happy?. We offer a 30-day refund guarantee.'
  },
  {
    name: 'For the planet',
    icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the natural environment."
  },
]